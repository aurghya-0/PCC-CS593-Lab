import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../..');
const publicDir = path.resolve(__dirname, '../public');
const sourcesDir = path.join(publicDir, 'sources');
const manifestPath = path.join(publicDir, 'sources-manifest.json');

function collectJavaFiles(dir, relativeTo = repoRoot) {
  if (!fs.existsSync(dir)) return [];

  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectJavaFiles(fullPath, relativeTo));
    } else if (entry.name.endsWith('.java')) {
      files.push(path.relative(relativeTo, fullPath).split(path.sep).join('/'));
    }
  }
  return files.sort();
}

function buildManifest() {
  const manifest = {};

  for (let i = 1; i <= 6; i++) {
    const labFolder = `Lab_${i}`;
    const labPath = path.join(repoRoot, labFolder);
    if (!fs.existsSync(labPath)) continue;

    manifest[labFolder] = {};
    const entries = fs.readdirSync(labPath, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith('.java')) {
        const programKey = entry.name.replace(/\.java$/, '');
        manifest[labFolder][programKey] = [`${labFolder}/${entry.name}`];
        continue;
      }

      if (entry.isDirectory() && entry.name.startsWith('Program')) {
        const programPath = path.join(labPath, entry.name);
        const javaFiles = collectJavaFiles(programPath, repoRoot);
        if (javaFiles.length > 0) {
          manifest[labFolder][entry.name] = javaFiles;
        }
      }
    }
  }

  return manifest;
}

function copySources(manifest) {
  if (fs.existsSync(sourcesDir)) {
    fs.rmSync(sourcesDir, { recursive: true });
  }

  let count = 0;
  for (const lab of Object.values(manifest)) {
    for (const files of Object.values(lab)) {
      for (const relPath of files) {
        const src = path.join(repoRoot, relPath);
        const dest = path.join(sourcesDir, relPath);
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.copyFileSync(src, dest);
        count++;
      }
    }
  }
  return count;
}

const manifest = buildManifest();
const fileCount = copySources(manifest);

fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

const programCount = Object.values(manifest).reduce(
  (sum, lab) => sum + Object.keys(lab).length,
  0
);

console.log(`Synced ${fileCount} Java files to public/sources/`);
console.log(`Generated manifest for ${programCount} programs → public/sources-manifest.json`);
