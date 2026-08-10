import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// GitHub Pages project site: https://<user>.github.io/PCC-CS593/
// Build output goes to /docs so GitHub Pages can serve from the docs folder.
export default defineConfig({
  plugins: [react()],
  base: '/PCC-CS593/',
  build: {
    outDir: path.resolve(__dirname, '../docs'),
    emptyOutDir: true,
  },
});
