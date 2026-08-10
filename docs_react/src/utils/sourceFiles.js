/**
 * Resolve repository-relative paths to Java source files for a program entry.
 */
export function getProgramSourceFiles(program) {
  if (program.sourceFiles?.length) {
    return program.sourceFiles;
  }

  if (program.files?.length && program.path) {
    const base = program.path.replace(/\/$/, '');
    return program.files.map((file) => `${base}/${file}`);
  }

  if (program.path?.endsWith('.java')) {
    return [program.path];
  }

  return [];
}

export function getSourceUrl(filePath) {
  const base = import.meta.env.BASE_URL;
  return `${base}sources/${filePath.split('/').map(encodeURIComponent).join('/')}`;
}
