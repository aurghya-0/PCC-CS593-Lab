import { getPublicUrl } from './routerBasename';

let manifestPromise = null;

async function loadManifest() {
  if (!manifestPromise) {
    const url = getPublicUrl('sources-manifest.json');
    manifestPromise = fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load sources manifest (${response.status})`);
      }
      return response.json();
    });
  }
  return manifestPromise;
}

export function getProgramKey(program) {
  if (program.name.endsWith('.java')) {
    return program.name.replace(/\.java$/, '');
  }
  return program.name;
}

export async function resolveProgramSourceFiles(labFolder, program) {
  const manifest = await loadManifest();
  const programKey = getProgramKey(program);
  const fromManifest = manifest[labFolder]?.[programKey];

  if (fromManifest?.length) {
    return fromManifest;
  }

  // Fallback when manifest is stale or entry is missing
  if (program.name?.endsWith('.java')) {
    return [`${labFolder}/${program.name}`];
  }

  return [];
}

export function getSourceUrl(filePath) {
  return getPublicUrl(`sources/${filePath}`);
}
