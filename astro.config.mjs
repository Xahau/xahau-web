// @ts-check

import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi'
import { remarkGlobalReferences } from './src/plugins/remarkGlobalReferences'

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    starlight({
      title: 'Xahau Docs',
      description: 'Documentation for the Xahau blockchain',
      tableOfContents: {
        minHeadingLevel: 1,
        maxHeadingLevel: 3,
      },
      editLink: {
        baseUrl: 'https://github.com/Xahau/xahau-web/edit/main/',
      },
      components: {
        PageFrame: './src/layouts/DocsLayout.astro',
        TwoColumnContent: './src/components/DocsTwoColumnContent.astro',
        PageSidebar: './src/components/DocsPageSidebar.astro',
        Sidebar: './src/components/DocsSidebar.astro',
        MobileMenuToggle: './src/components/DocsMobileMenuToggle.astro',
        ThemeProvider: './src/components/DocsForceLightTheme.astro',
      },
      plugins: [
        starlightOpenAPI([
          {
            base: 'docs/data-apis/data-api',
            schema: './src/schemas/dataapi.json',
            sidebar: {
              label: 'Xahau Data API',
            },
          },
        ]),
      ],
      sidebar: [
        {
          label: 'Get started',
          items: ['docs', 'docs/what-is-different'],
        },
        {
          label: 'Features',
          items: [
            'docs/features/public-nodes-rpc',
            'docs/features/amendments',
            {
              label: 'Transaction Signing',
              autogenerate: { directory: 'docs/features/transaction-signing' },
              collapsed: true,
            },
            {
              label: 'Developer Tooling',
              autogenerate: { directory: 'docs/features/developer-tooling' },
              collapsed: true,
            },
            {
              label: 'HTTP / WebSocket APIs',
              autogenerate: { directory: 'docs/features/http-websocket-apis' },
              collapsed: true,
            },
            {
              label: 'Network Features',
              autogenerate: { directory: 'docs/features/network-features' },
              collapsed: true,
            },
            'docs/features/faucet-and-explorer',
            'docs/features/balance-adjustments',
            'docs/features/governance-game',
            'docs/features/burn-2-mint',
            'docs/features/versioning-process',
          ],
        },
        {
          label: 'Protocol Reference',
          items: [
            {
              label: 'Transactions',
              collapsed: true,
              items: [
                'docs/protocol-reference/transactions',
                {
                  label: 'Transaction Types',
                  autogenerate: {
                    directory:
                      'docs/protocol-reference/transactions/transaction-types',
                  },
                  collapsed: true,
                },
                {
                  label: 'Pseudo Transaction Types',
                  autogenerate: {
                    directory:
                      'docs/protocol-reference/transactions/pseudo-transaction-types',
                  },
                  collapsed: true,
                },
                {
                  label: 'Transaction Results',
                  autogenerate: {
                    directory:
                      'docs/protocol-reference/transactions/transaction-results',
                  },
                  collapsed: true,
                },
                'docs/protocol-reference/transactions/transaction-common-fields',
                'docs/protocol-reference/transactions/transaction-metadata',
              ],
            },
            {
              label: 'Ledger Data',
              collapsed: true,
              items: [
                'docs/protocol-reference/ledger-data',
                {
                  label: 'Ledger Objects Types',
                  autogenerate: {
                    directory:
                      'docs/protocol-reference/ledger-data/ledger-objects-types',
                  },
                  collapsed: true,
                },
                'docs/protocol-reference/ledger-data/ledger-header',
                'docs/protocol-reference/ledger-data/ledger-object-ids',
              ],
            },
            {
              label: 'Data Types',
              collapsed: true,
              items: [
                'docs/protocol-reference/data-types',
                'docs/protocol-reference/data-types/currency-formats',
                'docs/protocol-reference/data-types/base-58-encodings',
              ],
            },
            'docs/protocol-reference/binary-format',
          ],
        },
        {
          label: 'Hooks',
          items: [
            'docs/hooks',
            {
              label: 'Concepts',
              collapsed: true,
              items: [
                'docs/hooks/concepts/introduction',
                'docs/hooks/concepts/terminology',
                'docs/hooks/concepts/loops-and-guarding',
                'docs/hooks/concepts/compiling-hooks',
                'docs/hooks/concepts/chaining',
                'docs/hooks/concepts/weak-and-strong',
                'docs/hooks/concepts/collect-call',
                'docs/hooks/concepts/sethook-transaction',
                'docs/hooks/concepts/parameters',
                'docs/hooks/concepts/namespaces',
                'docs/hooks/concepts/grants',
                'docs/hooks/concepts/hookon-field',
                'docs/hooks/concepts/reference-counted-hook-definitions',
                'docs/hooks/concepts/hook-fees',
                'docs/hooks/concepts/execution-metadata',
                'docs/hooks/concepts/debugging-hooks',
                'docs/hooks/concepts/state-management',
                'docs/hooks/concepts/slots-and-keylets',
                'docs/hooks/concepts/floating-point-numbers-xfl',
                'docs/hooks/concepts/emitted-transactions',
                'docs/hooks/concepts/serialized-objects',
              ],
            },
            {
              label: 'Functions',
              collapsed: true,
              items: [
                {
                  label: 'Overview',
                  collapsed: true,
                  autogenerate: { directory: 'docs/hooks/functions/overview' },
                },
                {
                  label: 'Developer Defined',
                  collapsed: true,
                  autogenerate: {
                    directory: 'docs/hooks/functions/developer-defined',
                  },
                },
                {
                  label: 'Control',
                  collapsed: true,
                  autogenerate: { directory: 'docs/hooks/functions/control' },
                },
                {
                  label: 'Utilities',
                  collapsed: true,
                  autogenerate: { directory: 'docs/hooks/functions/utilities' },
                },
                {
                  label: 'Serialization',
                  collapsed: true,
                  autogenerate: {
                    directory: 'docs/hooks/functions/serialization',
                  },
                },
                {
                  label: 'Emitted Transaction',
                  collapsed: true,
                  autogenerate: {
                    directory: 'docs/hooks/functions/emitted-transaction',
                  },
                },
                {
                  label: 'Float',
                  collapsed: true,
                  autogenerate: { directory: 'docs/hooks/functions/float' },
                },
                {
                  label: 'Ledger',
                  collapsed: true,
                  autogenerate: { directory: 'docs/hooks/functions/ledger' },
                },
                {
                  label: 'Hook Context',
                  collapsed: true,
                  autogenerate: {
                    directory: 'docs/hooks/functions/hook-context',
                  },
                },
                {
                  label: 'Slot',
                  collapsed: true,
                  autogenerate: { directory: 'docs/hooks/functions/slot' },
                },
                {
                  label: 'State',
                  collapsed: true,
                  autogenerate: { directory: 'docs/hooks/functions/state' },
                },
                {
                  label: 'Trace (Debug)',
                  collapsed: true,
                  autogenerate: {
                    directory: 'docs/hooks/functions/trace-debug',
                  },
                },
                {
                  label: 'Originating Transaction',
                  collapsed: true,
                  autogenerate: {
                    directory: 'docs/hooks/functions/originating-transaction',
                  },
                },
                {
                  label: 'WebSocket APIs',
                  collapsed: true,
                  autogenerate: {
                    directory: 'docs/hooks/functions/websocket-apis',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Data APIs',
          items: ['docs/data-apis', ...openAPISidebarGroups],
        },
        {
          label: 'Compliance',
          items: [
            'docs/compliance/security-audit',
            'docs/compliance/responsible-disclosure',
          ],
        },
        {
          label: 'Infrastructure',
          items: [
            'docs/infrastructure/system-requirements',
            'docs/infrastructure/installing-xahaud',
            'docs/infrastructure/updating-xahaud',
            'docs/infrastructure/enabling-validation',
            'docs/infrastructure/interacting',
            {
              label: 'Building Xahau (Dev)',
              collapsed: true,
              items: [
                'docs/infrastructure/building-xahau',
                'docs/infrastructure/building-xahau/ubuntu-22-04',
                'docs/infrastructure/building-xahau/mac-os-13-5-2',
              ],
            },
          ],
        },
        {
          label: 'Resources',
          items: ['docs/resources/whitepaper', 'docs/resources/media-kit'],
        },
        {
          label: 'Support',
          autogenerate: { directory: 'docs/support' },
        },
      ],
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [remarkGlobalReferences],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://xahau.network/',
})
