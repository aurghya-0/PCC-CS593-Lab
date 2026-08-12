/**
 * Detect the router basename at runtime so the app works on any GitHub Pages
 * project URL without hardcoding the repository name.
 */
export function getRouterBasename() {
  if (import.meta.env.DEV) {
    return '';
  }

  const segments = window.location.pathname.split('/').filter(Boolean);
  const appRoutes = new Set(['lab', 'utilities', 'playground']);

  // GitHub Pages project site: /repo-name/lab/1 → basename is /repo-name
  if (segments.length > 0 && !appRoutes.has(segments[0])) {
    return `/${segments[0]}`;
  }

  return '';
}

/**
 * Resolve a path to a static asset in /public (manifest, source files, etc.).
 * Must be root-absolute so fetches work from nested routes like /lab/1.
 */
export function getPublicUrl(relativePath) {
  const path = relativePath.replace(/^\//, '');
  const basename = getRouterBasename();

  if (import.meta.env.DEV) {
    return `/${path}`;
  }

  return basename ? `${basename}/${path}` : `/${path}`;
}
