# Adding a New Locale to the Xahau Website

The Xahau website supports multiple languages through Astro's directory-based i18n. Editorial pages are single components per page that pull their copy from per-page translation tables in `src/i18n/`, so adding a language is mostly a matter of adding new entries to those tables and creating a `src/pages/<locale>/` folder of thin route wrappers.

The site currently ships with English (default), Spanish (`es`), and Japanese (`ja`).

For a worked example, see the [Brazilian Portuguese (pt-BR) guide](#example-brazilian-portuguese-pt-br) at the end of this document.

---

## Overview of files to change

| File | What to do |
|------|-----------|
| `src/i18n/locales.ts` | Add the locale code to the `locales` array |
| `astro.config.mjs` | Register the locale with Starlight (for the `/docs` section) |
| `src/i18n/indexTranslations.ts` | Add a locale block (home page copy) |
| `src/i18n/aboutTranslations.ts` | Add a locale block (About page copy) |
| `src/i18n/featuresTranslations.ts` | Add a locale block (Features page copy) |
| `src/i18n/contestTranslations.ts` | Add a locale block (Contest page copy) |
| `src/i18n/fraudReportTranslations.ts` | Add a locale block (Fraud Report form) |
| `src/data/home.json` | Translate stat tile labels |
| `src/data/connect.json` | Translate event labels |
| `src/data/roadmap.json` | Translate roadmap titles/descriptions |
| `src/data/ecosystem.json` | Translate section labels, taglines, and the `trademark` disclaimer |
| `src/CookieConsentConfig.ts` | Add a `translations` block for the cookie banner |
| `src/pages/<locale>/` | Create page routes (copy from `es/`) |

There is **no per-locale component to create.** A single `XahauAbout.astro`, `XahauFeatures.astro`, etc. handles every locale by reading from the matching translation table.

---

## Example: Brazilian Portuguese (pt-BR)

The locale code to use throughout is `pt-BR`.

---

### Step 1 — `src/i18n/locales.ts`

Add the new locale to the `locales` tuple. Everything downstream (the `Locale` type, `nonDefaultLocales` array, and per-component lookups) updates automatically.

```ts
export const locales = ['en', 'es', 'ja', 'pt-BR'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale = 'en'
export const nonDefaultLocales = locales.filter(
  (locale) => locale !== defaultLocale,
)
```

---

### Step 2 — `astro.config.mjs`

This step is only needed if you want the `/docs` section translated as well. The Starlight `locales` block lives inside the `starlight({...})` integration:

```js
locales: {
  root: { label: 'English', lang: 'en' },
  es: { label: 'Español', lang: 'es' },
  ja: { label: '日本語', lang: 'ja' },
  'pt-BR': { label: 'Português (Brasil)', lang: 'pt-BR' },
},
```

The editorial pages do not need any Astro config change — they pick the new locale up automatically once `src/pages/pt-BR/` exists (Step 9).

---

### Step 3 — `src/i18n/indexTranslations.ts`

Add a `'pt-BR'` block before the closing `}` of the `indexTranslations` object. Copy the `en` block and translate every value (English originals shown as comments below for reference):

```ts
'pt-BR': {
  hero_title: '', // 'The Smarter Blockchain with Account-Based Programmability'
  hero_subtitle: '', // 'Not just smart contracts – smart accounts. Cheap and fast by design. Built for the real world.'
  hero_learn: '', // 'Learn the basics'
  hero_docs: '', // 'View docs'
  network_title: '', // 'The Xahau Network'
  network_subtitle: '', // 'Why is Xahau the right blockchain for your business?'
  feat1_title: '', // '1. Smart Contract Hooks'
  feat1_desc: '', // 'Xahau supports lightweight smart contracts directly on accounts, enabling automatic logic for approvals, rejections, or custom behavior without requiring users to call a contract.'
  feat2_title: '', // '2. Low Fees with Fee Burning'
  feat2_desc: '', // 'Xahau offers predictable, low transaction costs. A portion of each fee is burned, reducing spam and aligning incentives with long-term network health.'
  feat3_title: '', // '3. Enterprise-Ready Governance'
  feat3_desc: '', // 'With structured governance and validator coordination, Xahau provides a stable environment for regulated and enterprise use, including supply chain, payments, and compliance applications.'
  feat4_title: '', // '4. Fast, Green, and Scalable'
  feat4_desc: '', // 'With an efficient consensus protocol, Xahau processes transactions quickly without mining—ideal for businesses needing performance and sustainability.'
  feat5_title: '', // '5. Token and Asset Control by Design'
  feat5_desc: '', // 'Businesses can issue assets or tokens with fine-grained control over how they're used or transferred, enforcing rules automatically at the ledger level.'
  feat_more: '', // 'Discover more features'
  stats_title: '', // 'Network statistics'
  stats_subtitle: '', // 'Xahau in numbers'
},
```

---

### Step 4 — `src/i18n/aboutTranslations.ts`

Add a `'pt-BR'` block to `aboutTranslations`. Mirror the structure of the existing `en` block — page header (`page_title`, `page_subtitle`, `chip1`–`chip4`) followed by the three thematic acts (Network, Protocol, Currency) with their `actN_*` keys.

The English chips are: `Est. October 2023`, `200k+ Accounts`, `~4s Settlement`, `10k tx / ledger`.

---

### Step 5 — `src/i18n/featuresTranslations.ts`

Add a `'pt-BR'` block. The structure mirrors `en`: page header (`page_title`, `page_subtitle`, `chip1`–`chip4`), then the three acts — Protocol Layer, Finance, Governance — with `proto_*`, `dex_*`, `nft_*`, etc. keys for each feature inside.

---

### Step 6 — `src/i18n/contestTranslations.ts`

Add a `'pt-BR'` block mirroring the `en` block (page subtitle, chips, and the contest acts).

---

### Step 7 — `src/i18n/fraudReportTranslations.ts`

`fraudReportTranslations` is typed as `Record<Locale, FraudReportTranslations>`, so once Step 1 adds `pt-BR` to `Locale`, TypeScript will refuse to compile until this file has a matching block.

Add a `'pt-BR'` block mirroring the existing `en` block. It has six sub-sections — `frontmatter`, `intro`, `form`, `privacy`, `attribution`, `messages`. Every string needs translating; structural keys like `addressPlaceholder: 'rXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'` and `urlLabel: 'URL'` can stay as-is.

> **Note:** `aboutTranslations`, `featuresTranslations`, `contestTranslations`, and `indexTranslations` are not bound to `Record<Locale, …>` — TypeScript will not flag a missing locale block in those files. Use the [Checklist](#checklist) at the bottom of this guide to make sure none are missed.

---

### Step 8 — `src/data/ecosystem.json`

Add `"pt-BR"` to every `label` and `tagline` object. English originals shown:

**Section labels:**
- `"pt-BR": "Empresas"` (Enterprises)
- `"pt-BR": "Carteiras"` (Wallets)
- `"pt-BR": "Corretoras"` (Exchanges)
- `"pt-BR": "Exploradores e Utilitários"` (Explorers & Utilities)
- `"pt-BR": "Projetos"` (Projects)

**Section taglines:**
- Enterprises: `"pt-BR": "Instituições que adotaram o Xahau"`
- Wallets: `"pt-BR": "Armazene, envie e assine com XAH"`
- Exchanges: `"pt-BR": "Compre, venda e negocie XAH"`
- Explorers: `"pt-BR": "Inspecione e interaja com o ledger"`
- Projects: `"pt-BR": "Apps, ferramentas e experiências construídas no Xahau"`

**Trademark disclaimer** (top-level `trademark` object — this is the new home of the disclaimer, no component change needed):

```json
"trademark": {
  "en": "All trademarks and logos are the property of their respective owners.",
  "es": "Todas las marcas y logotipos son propiedad de sus respectivos dueños.",
  "ja": "すべての商標およびロゴは、各所有者に帰属します",
  "pt-BR": "Todas as marcas e logotipos são propriedade de seus respectivos donos."
}
```

---

### Step 9 — `src/data/home.json`

Add `"pt-BR"` to every stat tile `label`, including the CTA tile. English originals:

```json
"pt-BR": "Ledgers fechados"        // Ledgers closed
"pt-BR": "Transações/24h"          // Transactions / 24h
"pt-BR": "Contas"                  // Accounts
"pt-BR": "Hooks instalados"        // Hooks installed
"pt-BR": "Nós"                     // Nodes
"pt-BR": "Execuções de Hooks"      // Hook executions
"pt-BR": "Quer rodar um nó?"       // Want to run a node? (CTA tile)
```

---

### Step 10 — `src/data/connect.json` and `src/data/roadmap.json`

Each event in `connect.json` has `dateLabel`, `title`, `location`, and `registration.label` objects keyed by locale — add `"pt-BR"` entries to all of them.

Each item in `roadmap.json` has `title` and `description` objects keyed by locale — add `"pt-BR"` to every entry. Also add the locale to any `labels` block at the top of the file used by `XahauRoadmap.astro`.

---

### Step 11 — `src/CookieConsentConfig.ts`

Add a `'pt-BR'` block to the `language.translations` object, mirroring the existing `en` block (`consentModal` strings + `preferencesModal` strings). The cookie banner picks the active locale up automatically once this block exists.

---

### Step 12 — `src/pages/pt-BR/`

Create a new folder `src/pages/pt-BR/` and copy all files from `src/pages/es/`:

```
src/pages/pt-BR/about.astro
src/pages/pt-BR/connect.astro
src/pages/pt-BR/contest.astro
src/pages/pt-BR/ecosystem.astro
src/pages/pt-BR/features.astro
src/pages/pt-BR/fraud-report.astro
src/pages/pt-BR/index.mdx
src/pages/pt-BR/privacy-policy.mdx
src/pages/pt-BR/roadmap.astro
```

In each `.astro` file, only the `_frontmatter` `title` and `description` need translating — the component imports stay unchanged because the editorial components are locale-agnostic.

For `index.mdx` and `privacy-policy.mdx`, translate the MDX content directly.

---

## Checklist

- [ ] `src/i18n/locales.ts` — locale code added to `locales` tuple
- [ ] `astro.config.mjs` — Starlight `locales` updated (only if `/docs` is being translated)
- [ ] `src/i18n/indexTranslations.ts` — `pt-BR` block added
- [ ] `src/i18n/aboutTranslations.ts` — `pt-BR` block added
- [ ] `src/i18n/featuresTranslations.ts` — `pt-BR` block added
- [ ] `src/i18n/contestTranslations.ts` — `pt-BR` block added
- [ ] `src/i18n/fraudReportTranslations.ts` — type updated, `pt-BR` block added
- [ ] `src/data/ecosystem.json` — labels, taglines, and `trademark` updated
- [ ] `src/data/home.json` — all stat labels
- [ ] `src/data/connect.json` — event labels
- [ ] `src/data/roadmap.json` — item titles, descriptions, header labels
- [ ] `src/CookieConsentConfig.ts` — `translations.pt-BR` block added
- [ ] `src/pages/pt-BR/` — folder created, all pages copied, frontmatter translated
- [ ] `src/pages/pt-BR/index.mdx` and `privacy-policy.mdx` — content translated
- [ ] `npm run check` passes
