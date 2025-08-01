# Xahau website and documentation

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/Xahau/xahau-web/tree/main)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/Xahau/xahau-web/tree/main)

## Project Structure

Inside the project, these are the most relevant folders for collaboration

```text
/
├── public/
├── src/
│   └── assets/
│       └── ecosystem-logos/
│   └── content/
│       └── docs/
│           └── docs/
│   └── pages/
│   └── schemas/
```

The project is using `.mdx` files for content, which combines markdown with JSX. When editing content, look at the existing files for reference on how various elements are used, such as `LinkButton`, `LinkCard`, `Aside` etc. 

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |