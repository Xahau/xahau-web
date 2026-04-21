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

## Project Structure

```
/
├── public/                   Static assets (fonts, favicons)
├── src/
│   ├── assets/               SVGs, images, gem PNGs
│   ├── components/           Astro & React components
│   ├── content/docs/         Starlight documentation (Markdown/MDX)
│   ├── data/                 JSON data files — edit these to update content
│   ├── i18n/                 Translation keys for the home page
│   ├── layouts/              Page-level layout wrappers
│   ├── pages/                URL routes (en = root, es/, ja/)
│   └── styles/               Global CSS and Tailwind theme tokens
├── biome.jsonc               Linter/formatter config (Biome 2.4)
└── astro.config.mjs          Astro config (i18n, integrations)
```

---

## Localization

The site supports three locales: English (root `/`), Spanish (`/es/`), and Japanese (`/ja/`). Each editorial page has a dedicated component per locale — e.g. `XahauAbout.astro`, `XahauAboutEs.astro`, `XahauAboutJa.astro` — with a thin `.astro` page wrapper in `src/pages/` for each. To add a new language, follow the steps in [ADDING-A-LOCALE.md](ADDING-A-LOCALE.md).

---

## Updating Content

Most editorial page content is stored in JSON files under `src/data/`. **Edit the JSON to change what's rendered — no component code changes needed.** See [DEVELOPMENT.md](DEVELOPMENT.md) for the full schema of each file.

| File | Controls |
| :--- | :------- |
| `src/data/home.json` | Statistics tiles on the home page |
| `src/data/about.json` | All copy and section structure on the About page |
| `src/data/features.json` | Feature cards and body copy on the Features page |
| `src/data/connect.json` | Events list on the Connect page |
| `src/data/roadmap.json` | Roadmap items and quarter window |
| `src/data/ecosystem.json` | Ecosystem project list |

---

## Further Reading

- [DEVELOPMENT.md](DEVELOPMENT.md) — editorial component system, design tokens, JSON schemas, Biome config
- [CONTRIBUTING.md](CONTRIBUTING.md) — code style and pull request guidelines
- [ADDING-A-LOCALE.md](ADDING-A-LOCALE.md) — how to add a new language, with a worked pt-BR example
