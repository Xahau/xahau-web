# Xahau Website

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/Xahau/xahau-web/tree/main)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/Xahau/xahau-web/tree/main)

Built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and [React](https://react.dev). Editorial pages use a hand-coded component system; documentation lives under `src/content/docs/` and is powered by [Starlight](https://starlight.astro.build).

---

## Commands

| Command           | Action                                        |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Start local dev server at `localhost:4321`    |
| `npm run build`   | Build production site to `./dist/`            |
| `npm run preview` | Preview production build locally              |
| `npm run check`   | Auto-fix formatting with Biome                |
| `npm run ci`      | Biome lint check (CI — no auto-fix)           |

---

## Pre-commit Hooks

The project uses [Lefthook](https://github.com/evilmartians/lefthook) to run pre-commit hooks. The hooks are defined in the `lefthook.yml` file.

To install the hooks, use the following command (npm install is required):

```bash
npx lefthook install
```

To run the hooks manually, use the following command:

```bash
npx lefthook run pre-commit
```

## Project Structure

```
/
├── public/                   Static assets (fonts, favicons)
├── src/
│   ├── assets/               SVGs, images, gem PNGs
│   ├── components/           Astro & React components (incl. CookieConsent.astro)
│   ├── content/docs/         Starlight documentation (Markdown/MDX)
│   ├── data/                 JSON data files (home, connect, ecosystem, roadmap)
│   ├── i18n/                 Per-page translation tables + locales.ts
│   ├── layouts/              Page-level layout wrappers
│   ├── pages/                URL routes (en = root, es/, ja/)
│   ├── plugins/              Remark/MDX plugins (e.g. global references)
│   ├── schemas/              Zod schemas + JSON schemas for typed data
│   ├── styles/               Global CSS and Tailwind theme tokens
│   ├── utils/                Shared helpers (e.g. localizedHref)
│   └── CookieConsentConfig.ts  vanilla-cookieconsent configuration
├── biome.jsonc               Linter/formatter config (Biome 2.4)
└── astro.config.mjs          Astro config (i18n, integrations)
```

---

## Localization

The site supports three locales: English (root `/`), Spanish (`/es/`), and Japanese (`/ja/`). All three are fully enabled in production.

Each editorial page is a **single component** that reads its copy from a per-page translation table in `src/i18n/` (e.g. `aboutTranslations.ts`, `featuresTranslations.ts`, `contestTranslations.ts`, `indexTranslations.ts`, `fraudReportTranslations.ts`). The component picks the active locale via `Astro.currentLocale` and looks up strings against the table — there are no per-locale component variants.

Locale identifiers are centralized in `src/i18n/locales.ts` (`locales`, `defaultLocale`, `Locale` type). Each route is a thin `.astro` wrapper under `src/pages/`, `src/pages/es/`, and `src/pages/ja/` that imports the shared component.

To add a new language, follow the steps in [ADDING-A-LOCALE.md](ADDING-A-LOCALE.md).

---

## Updating Content

Content lives in two places, depending on the page:

**JSON data files** (`src/data/`) drive list-shaped pages — home stats, events, ecosystem entries, roadmap items. Edit the JSON to change what's rendered; no component changes needed.

| File | Controls |
| :--- | :------- |
| `src/data/home.json` | Statistics tiles on the home page |
| `src/data/connect.json` | Events list on the Connect page |
| `src/data/roadmap.json` | Roadmap items and quarter window |
| `src/data/ecosystem.json` | Ecosystem project list |

**i18n translation tables** (`src/i18n/*Translations.ts`) drive hand-crafted editorial pages — About, Features, Contest, the home hero/feature copy, and the Fraud Report form. Each table is keyed by locale (`en` / `es` / `ja`); add or update strings under the right locale and the matching component picks them up.

| File | Controls |
| :--- | :------- |
| `src/i18n/aboutTranslations.ts` | All copy on the About page |
| `src/i18n/featuresTranslations.ts` | All copy on the Features page |
| `src/i18n/contestTranslations.ts` | All copy on the Contest page |
| `src/i18n/indexTranslations.ts` | Home hero + feature blurbs |
| `src/i18n/fraudReportTranslations.ts` | Fraud Report form labels |

See [DEVELOPMENT.md](DEVELOPMENT.md) for the full schema of each file.

A few historical `src/data/about.json` / `features.json` files still exist; the live About and Features components no longer read from them — translations are the source of truth.

---

## Cookie Consent

The site uses [vanilla-cookieconsent](https://cookieconsent.orestbida.com/) for GDPR-compliant cookie banners. The component lives in `src/components/CookieConsent.astro` and the category/translation config is in `src/CookieConsentConfig.ts`.

---

## Further Reading

- [DEVELOPMENT.md](DEVELOPMENT.md) — editorial component system, design tokens, JSON schemas, Biome config
- [CONTRIBUTING.md](CONTRIBUTING.md) — code style and pull request guidelines
- [ADDING-A-LOCALE.md](ADDING-A-LOCALE.md) — how to add a new language, with a worked pt-BR example

## Contributors

[![Contributors](https://contrib.rocks/image?repo=Xahau/xahau-web)](https://github.com/Xahau/xahau-web/graphs/contributors)
