let manifestPromise = null;

async function loadManifest() {
  if (!manifestPromise) {
    const url = new URL('sources-manifest.json', import.meta.env.BASE_URL).href;
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
  return manifest[labFolder]?.[programKey] ?? [];
}

export function getSourceUrl(filePath) {
  return new URL(`sources/${filePath}`, import.meta.env.BASE_URL).href;
}
