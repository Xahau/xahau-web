import { readFileSync } from 'node:fs'
import { visit } from 'unist-util-visit'

const parseRules: {
  path: string
  parse: (content: string) => { label: string; url: string }[]
}[] = [
  {
    path: 'src/content/references/global.md',
    parse: (content: string) => {
      const lines = content.split('\n')
      const result: { label: string; url: string }[] = []
      for (const line of lines) {
        const match = line.match(/^\[([^\]]+)\]:\s*(.+)$/)
        if (match) {
          const [, label, url] = match
          result.push({ label, url: url.trim() })
        }
      }
      return result
    },
  },
  {
    path: 'src/content/references/transactions.md',
    parse: (content: string) => {
      const lines = content.split('\n')
      const result: { label: string; url: string }[] = []
      for (const line of lines) {
        if (line.length > 0) {
          const url = `/docs/protocol-reference/transactions/transaction-types/${line.toLowerCase()}`
          result.push({ label: `${line}`, url })
          result.push({ label: `${line} transaction`, url })
          result.push({ label: `${line} transactions`, url })
        }
      }
      return result
    },
  },
  {
    path: 'src/content/references/pseudo-transactions.md',
    parse: (content: string) => {
      const lines = content.split('\n')
      const result: { label: string; url: string }[] = []
      for (const line of lines) {
        if (line.length > 0) {
          const url = `/docs/protocol-reference/transactions/pseudo-transaction-types/${line.toLowerCase()}`
          result.push({ label: `${line}`, url })
          result.push({ label: `${line} transaction`, url })
          result.push({ label: `${line} transactions`, url })
        }
      }
      return result
    },
  },
]

/**
 * Remark plugin to resolve reference-style links from global.md
 */
export function remarkGlobalReferences() {
  let globalRefs: Record<string, string> | null = null

  function loadGlobalReferences() {
    if (globalRefs !== null) return globalRefs

    try {
      globalRefs = {}
      for (const rule of parseRules) {
        const content = readFileSync(rule.path, 'utf-8')
        const refs = rule.parse(content)
        for (const ref of refs) {
          globalRefs[ref.label] = ref.url
        }
      }

      return globalRefs
    } catch (error: any) {
      console.warn('Could not load global.md references:', error.message)
      globalRefs = {}
      return globalRefs
    }
  }

  return function transformer(tree: any) {
    const refs = loadGlobalReferences()

    // Find all reference-style links in the format [text][]
    visit(tree, 'linkReference', (node) => {
      if (
        node.referenceType === 'shortcut' ||
        node.referenceType === 'collapsed'
      ) {
        const label = node.label || node.children?.[0]?.value

        if (label && refs[label]) {
          // Convert linkReference to a regular link
          node.type = 'link'
          node.url = refs[label]
          delete node.referenceType
          delete node.identifier
          delete node.label
        }
      }
    })

    // Also look for escaped reference-style links in text nodes: \[label]\[]
    visit(tree, 'text', (node, index, parent) => {
      if (!node.value) return

      // Find escaped reference-style links: \[label]\[]
      const pattern = /\\?\[([^\]]+)\\?\]\\?\[\]/g
      const replacements = []
      let match: RegExpExecArray | null = null

      match = pattern.exec(node.value)
      while (match !== null) {
        const [fullMatch, label] = match
        if (refs[label]) {
          replacements.push({
            start: match.index,
            end: match.index + fullMatch.length,
            label,
            url: refs[label],
          })
        }
        match = pattern.exec(node.value)
      }

      // Apply replacements from right to left to maintain indices
      if (replacements.length > 0) {
        const newNodes = []
        let lastIndex = 0

        for (const replacement of replacements) {
          // Add text before the replacement
          if (replacement.start > lastIndex) {
            newNodes.push({
              type: 'text',
              value: node.value.slice(lastIndex, replacement.start),
            })
          }

          // Add the link
          newNodes.push({
            type: 'link',
            url: replacement.url,
            children: [{ type: 'text', value: replacement.label }],
          })

          lastIndex = replacement.end
        }

        // Add remaining text
        if (lastIndex < node.value.length) {
          newNodes.push({
            type: 'text',
            value: node.value.slice(lastIndex),
          })
        }

        // Replace the current node with the new nodes
        if (parent && typeof index === 'number') {
          parent.children.splice(index, 1, ...newNodes)
        }
      }
    })
  }
}
