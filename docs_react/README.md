# PCC-CS593 React Documentation Site

Interactive documentation for the OOP Lab programs, built with **React + Vite**.

The production build is written to the repository's **`docs/`** folder so GitHub Pages can serve it directly.

## Development

```bash
cd docs_react
npm install
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) in your browser.

## Build for GitHub Pages

```bash
cd docs_react
npm run build
```

This outputs the static site to **`../docs/`** (the repo root `docs/` folder), including all Java source files under `docs/sources/`.

Then commit and push the `docs/` folder:

```bash
git add docs/
git commit -m "Update documentation site"
git push
```

## GitHub Pages Setup

1. Push the built `docs/` folder to your repository.
2. Go to **Settings → Pages** in your GitHub repo.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Select your default branch (`main` or `master`) and folder **`/docs`**.
5. Save. Your site will be live at: `https://<your-username>.github.io/PCC-CS593-Lab/`

## Configuration

No hardcoded repository name is required. The build uses a **relative base path** (`./`) so assets work on any GitHub Pages URL, and the router basename is detected at runtime from the current URL.

Source files are **auto-discovered** from `Lab_1`–`Lab_6` at build time via `scripts/sync-sources.mjs`, which copies `.java` files and generates `sources-manifest.json`. Adding a new program to the repo only requires running `npm run build` — no path updates in the docs data.

## Project Structure

```
docs_react/
├── public/           # Static assets (.nojekyll for GitHub Pages)
├── src/
│   ├── components/   # Layout, Sidebar, ProgramCard, CodeBlock
│   ├── pages/        # Home, LabPage, UtilitiesPage, NotFound
│   ├── data/         # Lab documentation content (lab1.js – lab6.js)
│   ├── App.jsx
│   └── main.jsx
├── vite.config.js    # outDir → ../docs
└── package.json
```

## Markdown Documentation

The original markdown documentation lives in [`docs_md/`](../docs_md/) at the repo root. The React site in `docs/` is the published version for GitHub Pages.
