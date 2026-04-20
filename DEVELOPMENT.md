# Development Guide

Reference documentation for working on the Xahau website codebase. See [README.md](README.md) for quick-start instructions.

---

## Editorial Component System

Marketing pages (About, Features, Connect, Contest, Home, Roadmap) use a custom editorial component system — **not** Markdown/MDX. Each page is a self-contained `.astro` component inside `src/components/`.

### Component map

| URL | Component(s) |
| :-- | :----------- |
| `/` | `IndexLayout.astro` → `XahauHome.astro` |
| `/about` | `XahauAbout.astro` / `XahauAboutEs.astro` / `XahauAboutJa.astro` |
| `/features` | `XahauFeatures.astro` / `XahauFeaturesEs.astro` / `XahauFeaturesJa.astro` |
| `/connect` | `XahauConnect.astro` |
| `/contest` | `XahauContest.astro` / `XahauContestEs.astro` / `XahauContestJa.astro` |
| `/roadmap` | `XahauRoadmap.astro` |
| `/ecosystem` | `XahauEcosystem.astro` |
| `/fraud-report` | `FraudReportPage.astro` |

Each component lives in `src/components/` and is imported by a thin page wrapper in `src/pages/` (and `src/pages/es/`, `src/pages/ja/`).

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

## JSON Data Files

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

### `src/data/about.json`

Drives `XahauAbout.astro` (and ES/JA variants). Top-level structure:

```json
{
  "meta": {
    "videoId": "4pruN6sWJho",
    "launched": "October 2023",
    "accounts": "100k+",
    "settlement": "~4s"
  },
  "content": {
    "en": { "title": "...", "subtitle": "...", "chips": [], "intro": {}, "acts": [] },
    "es": { ... },
    "ja": { ... }
  }
}
```

Each locale object contains `title`, `subtitle`, `chips[]`, `intro` (label + paragraphs), and `acts[]` (the three thematic acts: Network, Protocol, Currency), each with headings, paragraphs, and graphic keys mapping to SVGs in `src/assets/enterprise/`.

---

### `src/data/features.json`

Drives `XahauFeatures.astro` (and ES/JA variants). The `content` object is keyed by locale. Each locale has `title`, `subtitle`, `chips[]`, and `features[]`:

```json
{
  "id": "hooks",
  "label": "Programmability",
  "type": "protocol",
  "graphic": "hooks",
  "heading": "Hooks: Account-Level Smart Contract Logic",
  "paragraphs": ["...", "..."]
}
```

| Field | Description |
| :---- | :---------- |
| `id` | Unique slug (used for anchor links) |
| `label` | Short label shown in the sidebar nav |
| `type` | Visual category tag: `"protocol"`, `"finance"`, or `"infrastructure"` |
| `graphic` | Key mapping to an SVG in `src/assets/enterprise/` |
| `heading` | Full section heading |
| `paragraphs` | Array of body paragraph strings |

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

Drives `XahauEcosystem.astro`. Contains the ecosystem project list with logos, categories, and external links. Logo image files go in `src/assets/ecosystem-logos/`.

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
