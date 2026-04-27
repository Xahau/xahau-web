# Development Guide

Reference documentation for working on the Xahau website codebase. See [README.md](README.md) for quick-start instructions.

---

## Editorial Component System

Marketing pages (About, Features, Connect, Contest, Home, Roadmap, Ecosystem) use a custom editorial component system — **not** Markdown/MDX. Each page is a self-contained `.astro` component inside `src/components/`, and there is exactly **one component per page** for all locales — locale-specific copy is fetched from translation tables in `src/i18n/`.

### Component map

| URL | Component | Source of copy |
| :-- | :-------- | :------------- |
| `/` | `XahauHome.astro` | `src/i18n/indexTranslations.ts` + `src/data/home.json` (stat numbers) |
| `/about` | `XahauAbout.astro` | `src/i18n/aboutTranslations.ts` |
| `/features` | `XahauFeatures.astro` | `src/i18n/featuresTranslations.ts` |
| `/contest` | `XahauContest.astro` | `src/i18n/contestTranslations.ts` |
| `/connect` | `XahauConnect.astro` | `src/data/connect.json` |
| `/roadmap` | `XahauRoadmap.astro` | `src/data/roadmap.json` |
| `/ecosystem` | `XahauEcosystem.astro` | `src/data/ecosystem.json` |
| `/fraud-report` | `FraudReportPage.astro` | `src/i18n/fraudReportTranslations.ts` |

Each component lives in `src/components/` and is imported by a thin page wrapper in `src/pages/` (and `src/pages/es/`, `src/pages/ja/`). The wrapper sets the page frontmatter; the component reads `Astro.currentLocale` and looks up its strings.

```astro
---
import { defaultLocale, type Locale } from '../i18n/locales'
import { aboutTranslations } from '../i18n/aboutTranslations'

const locale = (Astro.currentLocale ?? defaultLocale) as Locale
const t = aboutTranslations[locale]
---
<h2>{t.page_title}</h2>
```

Locale identifiers are centralized in `src/i18n/locales.ts` (`locales`, `defaultLocale`, `Locale`). Use this module for any new locale-aware code instead of hard-coding `'en' | 'es' | 'ja'`.

### Design tokens

All editorial components share the same CSS custom properties, defined at the top of each component's `<style>` block:

| Token | Value | Usage |
| :---- | :---- | :---- |
| `--ink` | `#0f2328` | Primary text, dark headings |
| `--dim` | `#2d3e44` | Secondary body text |
| `--mute` | `#556068` | Captions, labels, muted text |
| `--grn2` | `#007a28` | Green accent — CTAs, labels, pip dots |
| `--teal2` | `#006f87` | Teal accent — statistics, resource links |
| `--grn-hi` | `#00c940` | Highlight green (gradient text) |
| `--teal-hi` | `#00c4e8` | Highlight teal (gradient text, stat values) |
| `--border` | `#e4edef` | All border and separator colours |
| `--hover-bg` | `#f4f6f7` | Hover background for interactive rows |

Do not introduce one-off hex values. Either use these tokens or extend the set in `src/styles/global.css`.

The outer white card used by every editorial component:

```css
background: #ffffff;
border-radius: 24px;
padding: 48px 56px 72px;
box-shadow: 0 2px 4px rgba(0,0,0,0.04), 0 20px 64px -24px rgba(15,35,40,0.13);
```

### Component anatomy

Each component is divided into **acts** — thematic sections introduced by a monospaced act-label with a coloured pip dot:

```html
<p class="xc-act-label">
  <span class="act-pip pip-grn"></span>Introduction
</p>
```

Alternate `.pip-grn` (green) and `.pip-teal` (teal) across acts to create visual rhythm. Within each act, section labels use the `.xc-lbl` / `.lbl-grn` / `.lbl-teal` pattern:

```html
<span class="xc-lbl lbl-teal">Judges Panel</span>
```

---

## i18n Translation Tables

Hand-crafted editorial pages — **About, Features, Contest, the Home hero/feature copy, and the Fraud Report form** — read all of their copy from per-page translation tables in `src/i18n/`. These tables are flat objects keyed by locale (`en` / `es` / `ja`) with string values for each text slot.

| File | Drives |
| :--- | :----- |
| `src/i18n/locales.ts` | `locales`, `defaultLocale`, `Locale` type — single source of truth for locale identifiers |
| `src/i18n/indexTranslations.ts` | Home page: hero, network section, five feature blurbs, stats heading |
| `src/i18n/aboutTranslations.ts` | All copy on the About page (page title, chips, three acts) |
| `src/i18n/featuresTranslations.ts` | All copy on the Features page (chips, three acts: Protocol / Finance / Governance) |
| `src/i18n/contestTranslations.ts` | All copy on the Contest page |
| `src/i18n/fraudReportTranslations.ts` | Fraud Report intro, form, privacy, attribution, error messages |

Adding or changing copy means editing one of these files — components do not need to change. Keys are flat (e.g. `proto_h3_line1`, `feat3_desc`) so that a missing translation is a quick visual diff against the English block.

`src/data/about.json` and `src/data/features.json` remain in the tree as historical artefacts. The live About and Features components no longer read from them.

---

## JSON Data Files

JSON drives list-shaped pages where the content has uniform structure (stats, events, ecosystem entries, roadmap items). Each entry's translatable strings are keyed by locale inline.

### `src/data/home.json`

Controls the statistics tiles on the home page (`XahauHome.astro`).

```json
{
  "stats": [
    {
      "value": "22M+",
      "label": { "en": "Ledgers closed", "es": "Ledgers cerrados", "ja": "閉鎖済みレジャー" },
      "theme": "dark",
      "col": 5
    }
  ]
}
```

| Field | Type | Description |
| :---- | :--- | :---------- |
| `value` | string | Large number displayed on the tile |
| `label` | object | Translated label keyed by locale (`en`, `es`, `ja`) |
| `theme` | `"dark"` \| `"light"` | `dark` = ink background with teal value; `light` = white background |
| `col` | number | Column span within the 9-column grid |

**Grid rule:** `col` values for each visual row must sum to **9**. Current layout: row 1 = 5 + 4, row 2 = 3 + 3 + 3.

---

### `src/data/connect.json`

Drives `XahauConnect.astro`. Add an object to `events[]` to publish a new event. The component automatically separates upcoming from past events by comparing `date` to today.

```json
{
  "events": [
    {
      "id": "unique-slug",
      "date": "2026-06-15",
      "time": "16:00",
      "timezone": "CET",
      "dateLabel": { "en": "...", "es": "...", "ja": "..." },
      "title": { "en": "...", "es": "...", "ja": "..." },
      "location": {
        "name": "Venue Name",
        "address": "Full address",
        "mapsUrl": "https://maps.google.com/..."
      },
      "speakers": [],
      "registration": {
        "url": "https://...",
        "label": { "en": "Register to attend", "es": "...", "ja": "..." }
      }
    }
  ]
}
```

---

### `src/data/roadmap.json`

Drives `XahauRoadmap.astro`. This is the most structured file — it contains the full roadmap quarter grid.

**Window configuration** (`meta.window`):

| `mode` | Behaviour |
| :----- | :-------- |
| `"auto"` | Displays the current quarter + next 5 quarters, recalculated at build time |
| `"manual"` | Pins the view to the quarter containing the ISO date in `start` |

Each roadmap item:

```json
{
  "id": "hooks-js",
  "quarter": "2026-Q2",
  "status": "in-progress",
  "title": { "en": "Hooks JS Support", "es": "Soporte JS para Hooks" },
  "description": { "en": "...", "es": "..." }
}
```

Valid `status` values: `"done"`, `"in-progress"`, `"planned"`, `"research"`.

---

### `src/data/ecosystem.json`

Drives `XahauEcosystem.astro`. Contains the ecosystem project list (Enterprises, Wallets, Exchanges, Explorers & Utilities, Projects) with section labels, taglines, logos, and external links. Logo image files go in `src/assets/ecosystem-logos/`.

A top-level `trademark` object provides the localized footer disclaimer:

```json
"trademark": {
  "en": "All trademarks and logos are the property of their respective owners.",
  "es": "Todas las marcas y logotipos son propiedad de sus respectivos dueños.",
  "ja": "すべての商標およびロゴは、各所有者に帰属します"
}
```

---

## Cookie Consent

The site uses [vanilla-cookieconsent](https://cookieconsent.orestbida.com/) to show a GDPR-compliant banner. The component (`src/components/CookieConsent.astro`) is mounted in the base layout. Categories, button labels, and per-locale strings live in `src/CookieConsentConfig.ts` — adding a locale means adding a `translations` block keyed by the locale code in that file.

---

## Plugins, Schemas, Utils

Three small directories support the rest of the codebase:

- **`src/plugins/remarkGlobalReferences.ts`** — Remark plugin used by Astro's MDX pipeline (wired up in `astro.config.mjs` under `markdown.remarkPlugins`). Resolves shared `[label]` reference-link definitions across all docs files.
- **`src/schemas/roadmap.ts`** — Zod schema validating `src/data/roadmap.json` at build time, plus the exported `RoadmapItem` type used by `XahauRoadmap.astro`.
- **`src/schemas/dataapi.json`** — OpenAPI schema fed to `starlight-openapi` to generate the Data API reference.
- **`src/utils/localizedHref.ts`** — Helper for building locale-prefixed internal links (e.g. `/es/about`, `/ja/about`). Use this instead of hand-concatenating locale prefixes.

---

## Pre-commit Hooks

[Lefthook](https://github.com/evilmartians/lefthook) runs the Biome formatter on staged files before each commit. Configuration lives in `lefthook.yml` at the repo root. After cloning:

```bash
npm install
npx lefthook install
```

To run the hooks manually:

```bash
npx lefthook run pre-commit
```

---

## Header & Footer

The **Header** is a React component (`src/components/Header.jsx`, mounted with `client:load`) to support interactive dropdowns and the mobile menu. The nav link structure is defined in the `navLinks` array near the top of the file — edit there to add, remove, or rename nav items.

The **Footer** is a plain Astro component (`src/components/Footer.astro`). Translations are inlined in a `translations` object at the top of the file (EN, ES, JA). Column structure and link destinations are in the template below.

---

## Linting & Formatting

The project uses [Biome](https://biomejs.dev) v2.4 for both formatting and linting.

```bash
npm run check   # auto-fix formatting (run before committing)
npm run ci      # CI lint — exits non-zero on errors, no auto-fix
```

**Biome overrides** (see `biome.jsonc`):

- **All `**/*.astro` files:** `noUnusedVariables` and `useJsxKeyInIterable` are suppressed. Both are false positives — Biome cannot track variable usage across Astro's frontmatter/template boundary, and cannot detect server-render context where `key` props are unnecessary.
- **`src/components/XahauRoadmap.astro` only:** Three rules are suppressed for pre-existing CSS patterns that cannot be safely refactored:
  - `noImportantStyles` — `!important` is used intentionally in print media query overrides
  - `noImportantInKeyframe` — `!important` appears inside a `@keyframes` block for animation reset
  - `noDescendingSpecificity` — theme modifier selectors (`.xroadmap.theme-light .xr-roll.status-live`) intentionally override base selectors at lower specificity

  New components are still checked by all three rules.
