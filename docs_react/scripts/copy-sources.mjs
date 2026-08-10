import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../..');
const outDir = path.resolve(__dirname, '../public/sources');

function copyJavaFiles(dir, relativeTo = repoRoot) {
  if (!fs.existsSync(dir)) return 0;

  let count = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += copyJavaFiles(fullPath, relativeTo);
    } else if (entry.name.endsWith('.java')) {
      const rel = path.relative(relativeTo, fullPath);
      const dest = path.join(outDir, rel);
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(fullPath, dest);
      count++;
    }
  }
  return count;
}

if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true });
}

let total = 0;
for (let i = 1; i <= 6; i++) {
  total += copyJavaFiles(path.join(repoRoot, `Lab_${i}`));
}

console.log(`Copied ${total} Java source files to public/sources/`);
