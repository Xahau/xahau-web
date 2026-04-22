export const homeTranslations = {
  stats: [
    {
      value: '22M+',
      label: {
        en: 'Ledgers closed',
        es: 'Ledgers cerrados',
        ja: '閉鎖済みレジャー',
      },
      theme: 'dark',
      col: 5,
    },
    {
      value: '1.5M+',
      label: {
        en: 'Transactions / 24h',
        es: 'Transacciones/24h',
        ja: '取引/24時間',
      },
      theme: 'teal',
      col: 4,
    },
    {
      value: '200K+',
      label: { en: 'Accounts', es: 'Cuentas', ja: 'アカウント' },
      theme: 'light',
      col: 3,
    },
    {
      value: '10K+',
      label: {
        en: 'Hooks installed',
        es: 'Hooks instalados',
        ja: 'インストール済みHooks',
      },
      theme: 'sage',
      col: 3,
    },
    {
      value: '300+',
      label: { en: 'Nodes', es: 'Nodos', ja: 'ノード' },
      theme: 'light',
      col: 3,
    },
    {
      value: '500M+',
      label: {
        en: 'Hook executions',
        es: 'Ejecuciones de Hooks',
        ja: 'Hook実行回数',
      },
      theme: 'dark',
      col: 6,
    },
    {
      type: 'cta',
      theme: 'light',
      col: 3,
      label: {
        en: 'Want to run a node?',
        es: '¿Quieres ejecutar un nodo?',
        ja: 'ノードを運用しませんか？',
      },
      url: '/docs/infrastructure/system-requirements',
    },
  ],
} as const
