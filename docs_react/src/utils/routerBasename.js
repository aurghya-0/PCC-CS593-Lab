/**
 * Detect the router basename at runtime so the app works on any GitHub Pages
 * project URL without hardcoding the repository name.
 */
export function getRouterBasename() {
  if (import.meta.env.DEV) {
    return '';
  }

  const { pathname } = window.location;

  // GitHub Pages project site: https://<user>.github.io/<repo>/
  const projectMatch = pathname.match(/^\/([^/]+)/);
  if (projectMatch && projectMatch[1] !== 'assets') {
    return `/${projectMatch[1]}`;
  }

  return '';
}
