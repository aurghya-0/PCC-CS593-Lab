import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// GitHub Pages project site: https://<user>.github.io/<repo-name>/
// Must match your GitHub repository name exactly.
const REPO_BASE = '/PCC-CS593-Lab/';

export default defineConfig({
  plugins: [react()],
  base: REPO_BASE,
  build: {
    outDir: path.resolve(__dirname, '../docs'),
    emptyOutDir: true,
  },
});
