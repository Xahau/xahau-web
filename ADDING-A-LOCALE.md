# Adding a New Locale to the Xahau Website

The Xahau website supports multiple languages through Astro's built-in i18n system. Content is driven by JSON data files and a small set of translation keys, making it straightforward to add a new language without touching component logic.

The site currently ships with English (default), Spanish (`es`), and Japanese (`ja`).

To add a new language, you need to update a handful of files — configuration, translation keys, data files, and page routes. The steps below walk through each one.

For a worked example, see the [Brazilian Portuguese (pt-BR) guide](#example-brazilian-portuguese-pt-br) at the end of this document.

---

## Overview of files to change

| File | What to do |
|------|-----------|
| `astro.config.mjs` | Register the new locale |
| `src/i18n/indexTranslations.ts` | Add home page translation keys |
| `src/i18n/fraudReportTranslations.ts` | Add fraud report page translations |
| `src/data/about.json` | Translate about page content |
| `src/data/ecosystem.json` | Translate ecosystem section labels |
| `src/data/home.json` | Translate stats tile labels |
| `src/data/features.json` | Translate features content |
| `src/data/connect.json` | Translate connect/events labels |
| `src/pages/<locale>/` | Create page routes (copy from `es/`) |
| `src/components/XahauAbout<Locale>.astro` | Create localised about component |
| `src/components/XahauEcosystem.astro` | Add locale to TM disclaimer |

---

## Example: Brazilian Portuguese (pt-BR)

The locale code to use throughout is `pt-BR`.

---

### Step 1 — `astro.config.mjs`

Find the `locales` block and add the new entry:

```js
locales: {
  root: { label: 'English', lang: 'en' },
  es: { label: 'Español', lang: 'es' },
  ja: { label: '日本語', lang: 'ja' },
  'pt-BR': { label: 'Português (Brasil)', lang: 'pt-BR' },
},
```

---

### Step 2 — `src/i18n/indexTranslations.ts`

Add a `'pt-BR'` block before the closing `}` of the `indexTranslations` object.
Copy the structure below and fill in the translations (English originals shown as comments):

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
  stats_accounts: '', // 'Accounts'
  stats_hooks: '', // 'Hooks installed'
  stats_nodes: '', // 'Nodes'
  stats_txs: '', // 'Transactions/24h'
  stats_ledgers: '', // 'Ledgers closed'
  stats_node_cta: '', // 'Want to run a node?'
},
```

Also update the type at the bottom of the file:
```ts
export type IndexLocale = keyof typeof indexTranslations
```
This updates automatically — no change needed if you added the block above correctly.

---

### Step 3 — `src/i18n/fraudReportTranslations.ts`

Update the type at the top:
```ts
export type FraudReportLocale = 'en' | 'es' | 'ja' | 'pt-BR'
```

Then add a `'pt-BR'` block to `fraudReportTranslations`. English originals are shown below — translate all values:

```ts
'pt-BR': {
  frontmatter: {
    title: '', // 'Report Fraud'
    description: '', // 'Have you been scammed or hacked? Here is what to do!'
  },
  intro: {
    body: '', // 'Xahau is a public blockchain, with no governing party that can freeze or retrieve funds, close accounts, or otherwise keep people from their assets.'
    warning: '', // "We can't reverse or cancel transactions, no-one can."
    lead: '', // 'We can flag accounts used for illicit activity, which will:'
    bullets: [
      '', // 'Be included in our API that exchanges and other entities are using for AML compliance to monitor deposits, and possibly withhold illicit funds.'
      '', // 'Movement of funds will be auto-traced and we will receive notifications whenever they move, no matter how old the case is.'
      '', // 'In case of a scam, warn other users through wallet software and exchanges using our API, not to send funds to a flagged account.'
    ],
    steps: [
      {
        title: '', // '1. Submit the address to Xahau Forensics'
        body: '', // 'We maintain the largest fraudulent address registry on Xahau and it is used by several entities to combat illicit activity.'
      },
      {
        title: '', // '2. Report your case to law enforcement'
        body: '', // 'Report it to the local police and if your country has an online report form for cybercrime or financial crime, report it there as well.'
      },
      {
        title: '', // '3. Follow up on your police report'
        body: '', // 'We work with law enforcement. Let them know that we have the information. The odds are that we are also in contact with other victims and can help law enforcement combine cases across jurisdictions and provide actionable intelligence.'
      },
    ],
    expectationTitle: '', // 'What can you expect?'
    expectations: [
      '', // "We can't reverse or cancel transactions, no-one can."
      '', // 'We do our best to have funds seized when they leave Xahau, by working with exchanges and other off ramps through our fraudulent address registry API and by manually making contact.'
      '', // 'When you report an account to us, you can expect us to treat your report with as much attention as any other report.'
      '', // 'We get many reports every single day. If an account is added to our fraudulent address registry, we are taking the best care of it along with all other cases.'
      '', // 'If money is seized we will contact you, if you have left us a way to contact you.'
      '', // 'To reclaim funds you have to work with law enforcement for paperwork.'
    ],
    expectationWarning: '', // "We monitor hundreds of cases at the same time and can't hold hands on a case-by-case basis. We will only contact you if we have good news!"
  },
  form: {
    successTitle: '', // 'Success!'
    successBody: '', // 'Thank you for your report. It has been submitted successfully.'
    reportIdLabel: '', // 'Report ID:'
    reportIdFallback: '', // 'unknown'
    errorTitle: '', // 'Error'
    addressLabel: '', // 'Xahau Address'
    addressPlaceholder: 'rXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    addressHint: '', // 'Enter the Xahau address associated with the fraudulent activity'
    descriptionLabel: '', // 'Description'
    descriptionPlaceholder: '', // 'Describe the fraudulent activity'
    descriptionHint: '', // 'Provide as much detail as possible to help us investigate'
    urlLabel: 'URL',
    urlPlaceholder: '', // 'Optional URL related to the fraud'
    urlHint: '', // 'Provide a URL if relevant, for example a scam website or social media post'
    categoryLabel: '', // 'Suggested Category'
    categoryPlaceholder: '', // 'Select a category...'
    categoryOptions: [
      { value: 'giveaway', label: '' }, // 'Giveaway'
      { value: 'theft', label: '' },    // 'Theft'
      { value: 'other', label: '' },    // 'Other'
    ],
    categoryHint: '', // 'Help us categorize the type of fraud'
    contactLabel: '', // 'Contact Information'
    contactPlaceholder: '', // 'Optional contact information, for example e-mail, X handle or Telegram username'
    contactHint: '', // "Provide contact info if you're willing to help with follow-up questions"
    requiredFields: '', // 'Required fields'
    submitLabel: '', // 'Submit Report'
    submitAnotherLabel: '', // 'Submit Another Report'
    optional: '', // 'Optional'
  },
  privacy: {
    title: '', // 'Privacy & Security'
    bullets: [
      '', // "This form uses ALTCHA, a privacy-compliant CAPTCHA that doesn't track you"
      '', // 'Your report is submitted securely to the Xahau Forensics network'
      '', // 'Reports are reviewed and used to improve network security'
      '', // 'No personal information is required to submit a report'
    ],
  },
  attribution: {
    prefix: '', // 'Xahau Forensics is run by '
    label: 'INFTF',
    suffix: '.', // '.'
  },
  messages: {
    captchaIncomplete: '', // 'Please complete the CAPTCHA verification before submitting.'
    captchaFailed: '', // 'CAPTCHA verification failed. Please complete the challenge and try again.'
    submitting: '', // 'Submitting...'
    submitFailed: '', // 'Failed to submit report. Please try again.'
    networkError: '', // 'Network error: Unable to connect to the server. Please check your connection and try again.'
  },
},
```

---

### Step 4 — `src/data/ecosystem.json`

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

**CTA tile label** (in `home.json`):
- `"pt-BR": "Quer rodar um nó?"`

---

### Step 5 — `src/data/home.json`

Add `"pt-BR"` to every stat tile `label`. English originals:

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

### Step 6 — `src/data/about.json`

Add `"pt-BR"` chips arrays and body text for all three locale sections. The chips to translate:

- `"Est. outubro de 2023"` (Est. October 2023)
- `"200k+ Contas"` (200k+ Accounts)
- `"~4s Liquidação"` (~4s Settlement)
- `"10k tx / ledger"` (keep as-is, technical term)

The body paragraphs and timeline entries are longer — use the English text in the file as source.

---

### Step 7 — `src/data/features.json`

Add `"pt-BR"` translations to all feature titles and descriptions. Use the English text as source.

---

### Step 8 — `src/data/connect.json`

Add `"pt-BR"` translations to all event label fields. Use the English text as source.

---

### Step 9 — `src/pages/pt-BR/`

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

In each `.astro` file, the only change needed is the component import — replace `XahauAboutEs` with `XahauAboutPtBR` in `about.astro`. All other pages use the shared locale-aware components and need no changes.

For `index.mdx` and `privacy-policy.mdx`, translate the MDX content directly.

---

### Step 10 — `src/components/XahauAboutPtBR.astro`

Copy `src/components/XahauAboutEs.astro` and rename it `XahauAboutPtBR.astro`. Translate all hardcoded text strings inside the file (headings, body paragraphs, chip labels).

---

### Step 11 — `src/components/XahauEcosystem.astro`

Find the TM disclaimer ternary and add the `pt-BR` case:

```astro
{locale === 'es'
  ? 'Todas las marcas y logotipos son propiedad de sus respectivos dueños.'
  : locale === 'ja'
  ? 'すべての商標およびロゴは、各所有者の財産です。'
  : locale === 'pt-BR'
  ? 'Todas as marcas e logotipos são propriedade de seus respectivos donos.'
  : 'All trademarks and logos are the property of their respective owners.'}
```

---

## Checklist

- [ ] `astro.config.mjs` — locale added
- [ ] `src/i18n/indexTranslations.ts` — `pt-BR` block added
- [ ] `src/i18n/fraudReportTranslations.ts` — type updated, `pt-BR` block added
- [ ] `src/data/ecosystem.json` — all labels and taglines
- [ ] `src/data/home.json` — all stat labels
- [ ] `src/data/about.json` — chips and body text
- [ ] `src/data/features.json` — all features
- [ ] `src/data/connect.json` — all labels
- [ ] `src/pages/pt-BR/` — folder created, all pages copied
- [ ] `src/components/XahauAboutPtBR.astro` — created and translated
- [ ] `src/components/XahauEcosystem.astro` — TM disclaimer updated
