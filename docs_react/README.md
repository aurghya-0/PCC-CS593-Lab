# PCC-CS593 React Documentation Site

Interactive documentation for the OOP Lab programs, built with **React + Vite**.

The production build is written to the repository's **`docs/`** folder so GitHub Pages can serve it directly.

## Development

```bash
cd docs_react
npm install
npm run dev
```

Open [http://localhost:5173/PCC-CS593-Lab/](http://localhost:5173/PCC-CS593-Lab/) in your browser.

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

If your repository name differs, update **only** `REPO_BASE` in `vite.config.js`:

```js
const REPO_BASE = '/YOUR-REPO-NAME/';
```

The router basename is derived automatically from this at build time.

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
