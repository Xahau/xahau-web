// @ts-check

import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import starlightLlmsTxt from 'starlight-llms-txt'
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi'
import { remarkGlobalReferences } from './src/plugins/remarkGlobalReferences'

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    starlight({
      title: 'Xahau Docs',
      description: 'Documentation for the Xahau blockchain',
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        es: { label: 'Español', lang: 'es' },
        ja: { label: '日本語', lang: 'ja' },
      },
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
        starlightLlmsTxt({
          customSets: [
            {
              label: 'Hook Concepts',
              description: 'Xahau Hook Concepts',
              paths: ['docs/hooks/**'],
            },
            {
              label: 'Hook API',
              description: 'Documentation for the Hook API',
              paths: ['docs/hooks/functions/**'],
            },
            {
              label: 'Transactions',
              description: 'Documentation for Xahau Transactions',
              paths: ['docs/protocol-reference/transactions/**'],
            },
            {
              label: 'Ledger Entries',
              description: 'Documentation for Xahau Ledger Entries',
              paths: ['docs/protocol-reference/ledger-data/**'],
            },
          ],
        }),
      ],
      sidebar: [
        {
          label: 'Get started',
          translations: { es: 'Primeros pasos', ja: 'はじめる' },
          items: ['docs', 'docs/what-is-different'],
        },
        {
          label: 'Features',
          translations: { es: 'Características', ja: '機能' },
          items: [
            'docs/features/public-nodes-rpc',
            'docs/features/amendments',
            {
              label: 'Transaction Signing',
              translations: {
                es: 'Firma de Transacciones',
                ja: 'トランザクション署名',
              },
              autogenerate: { directory: 'docs/features/transaction-signing' },
              collapsed: true,
            },
            {
              label: 'Developer Tooling',
              translations: {
                es: 'Herramientas para Desarrolladores',
                ja: '開発者ツール',
              },
              autogenerate: { directory: 'docs/features/developer-tooling' },
              collapsed: true,
            },
            {
              label: 'HTTP / WebSocket APIs',
              translations: {
                es: 'APIs HTTP / WebSocket',
                ja: 'HTTP / WebSocket API',
              },
              autogenerate: { directory: 'docs/features/http-websocket-apis' },
              collapsed: true,
            },
            {
              label: 'Network Features',
              translations: {
                es: 'Funcionalidades de Red',
                ja: 'ネットワーク機能',
              },
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
          translations: {
            es: 'Referencia del Protocolo',
            ja: 'プロトコルリファレンス',
          },
          items: [
            {
              label: 'Transactions',
              translations: { es: 'Transacciones', ja: 'トランザクション' },
              collapsed: true,
              items: [
                'docs/protocol-reference/transactions',
                {
                  label: 'Transaction Types',
                  translations: {
                    es: 'Tipos de Transacción',
                    ja: 'トランザクションタイプ',
                  },
                  autogenerate: {
                    directory:
                      'docs/protocol-reference/transactions/transaction-types',
                  },
                  collapsed: true,
                },
                {
                  label: 'Pseudo Transaction Types',
                  translations: {
                    es: 'Tipos de Pseudotransacción',
                    ja: '擬似トランザクションタイプ',
                  },
                  autogenerate: {
                    directory:
                      'docs/protocol-reference/transactions/pseudo-transaction-types',
                  },
                  collapsed: true,
                },
                {
                  label: 'Transaction Results',
                  translations: {
                    es: 'Resultados de Transacción',
                    ja: 'トランザクション結果',
                  },
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
              translations: { es: 'Datos del Ledger', ja: 'レジャーデータ' },
              collapsed: true,
              items: [
                'docs/protocol-reference/ledger-data',
                {
                  label: 'Ledger Objects Types',
                  translations: {
                    es: 'Tipos de Objetos del Ledger',
                    ja: 'レジャーオブジェクトタイプ',
                  },
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
              translations: { es: 'Tipos de Datos', ja: 'データ型' },
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
              translations: { es: 'Conceptos', ja: 'コンセプト' },
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
              translations: { es: 'Funciones', ja: '関数' },
              collapsed: true,
              items: [
                {
                  label: 'Overview',
                  translations: { es: 'Descripción General', ja: '概要' },
                  collapsed: true,
                  autogenerate: { directory: 'docs/hooks/functions/overview' },
                },
                {
                  label: 'Developer Defined',
                  translations: {
                    es: 'Definidas por el Desarrollador',
                    ja: '開発者定義',
                  },
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
                  translations: { es: 'Utilidades', ja: 'ユーティリティ' },
                  collapsed: true,
                  autogenerate: { directory: 'docs/hooks/functions/utilities' },
                },
                {
                  label: 'Serialization',
                  translations: {
                    es: 'Serialización',
                    ja: 'シリアライゼーション',
                  },
                  collapsed: true,
                  autogenerate: {
                    directory: 'docs/hooks/functions/serialization',
                  },
                },
                {
                  label: 'Emitted Transaction',
                  translations: {
                    es: 'Transacción Emitida',
                    ja: '発行トランザクション',
                  },
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
                  translations: {
                    es: 'Contexto del Hook',
                    ja: 'フックコンテキスト',
                  },
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
                  translations: { es: 'Estado', ja: '状態' },
                  collapsed: true,
                  autogenerate: { directory: 'docs/hooks/functions/state' },
                },
                {
                  label: 'Trace (Debug)',
                  translations: {
                    es: 'Traza (Debug)',
                    ja: 'トレース（デバッグ）',
                  },
                  collapsed: true,
                  autogenerate: {
                    directory: 'docs/hooks/functions/trace-debug',
                  },
                },
                {
                  label: 'Originating Transaction',
                  translations: {
                    es: 'Transacción de Origen',
                    ja: '発信トランザクション',
                  },
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
          translations: { es: 'Cumplimiento', ja: 'コンプライアンス' },
          items: [
            'docs/compliance/security-audit',
            'docs/compliance/responsible-disclosure',
          ],
        },
        {
          label: 'Infrastructure',
          translations: { es: 'Infraestructura', ja: 'インフラストラクチャ' },
          items: [
            'docs/infrastructure/system-requirements',
            'docs/infrastructure/installing-xahaud',
            'docs/infrastructure/updating-xahaud',
            'docs/infrastructure/enabling-validation',
            'docs/infrastructure/identity',
            'docs/infrastructure/interacting',
            'docs/infrastructure/advanced-configuration',
            {
              label: 'Build xahaud (Advanced)',
              translations: {
                es: 'Compilar xahaud (Avanzado)',
                ja: 'xahaudをビルド（上級）',
              },
              collapsed: true,
              items: [
                'docs/infrastructure/build-xahaud',
                'docs/infrastructure/build-xahaud/linux',
                'docs/infrastructure/build-xahaud/macos',
              ],
            },
          ],
        },
        {
          label: 'Resources',
          translations: { es: 'Recursos', ja: 'リソース' },
          items: ['docs/resources/whitepaper', 'docs/resources/media-kit'],
        },
        {
          label: 'Support',
          translations: { es: 'Soporte', ja: 'サポート' },
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
