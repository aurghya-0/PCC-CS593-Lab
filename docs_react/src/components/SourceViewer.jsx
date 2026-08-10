import { lazy, Suspense, useEffect, useState } from 'react';
import { getProgramKey, getSourceUrl, resolveProgramSourceFiles } from '../utils/sourceFiles';
import './SourceViewer.css';

const JavaCodeBlock = lazy(() => import('./JavaCodeBlock'));

async function fetchSource(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load source (${response.status})`);
  }
  return response.text();
}

export default function SourceViewer({ labFolder, program }) {
  const [sourceFiles, setSourceFiles] = useState([]);
  const [open, setOpen] = useState(false);
  const [activeFile, setActiveFile] = useState('');
  const [sources, setSources] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    resolveProgramSourceFiles(labFolder, program)
      .then((files) => {
        if (!cancelled) {
          setSourceFiles(files);
          setActiveFile(files[0] || '');
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [labFolder, program]);

  useEffect(() => {
    if (!open || sourceFiles.length === 0) return;

    let cancelled = false;

    async function loadSources() {
      setLoading(true);
      setError(null);

      try {
        const entries = await Promise.all(
          sourceFiles.map(async (file) => {
            const content = await fetchSource(getSourceUrl(file));
            return [file, content];
          })
        );

        if (!cancelled) {
          setSources(Object.fromEntries(entries));
          setActiveFile((current) => current || sourceFiles[0]);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadSources();
    return () => {
      cancelled = true;
    };
  }, [open, sourceFiles]);

  if (sourceFiles.length === 0 && !error) return null;

  const activeSource = sources[activeFile];
  const programKey = getProgramKey(program);

  async function copySource() {
    if (!activeSource) return;
    try {
      await navigator.clipboard.writeText(activeSource);
    } catch {
      // clipboard may be unavailable
    }
  }

  return (
    <div className="program-section source-viewer">
      <button
        type="button"
        className={`source-toggle ${open ? 'source-toggle--open' : ''}`}
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        disabled={sourceFiles.length === 0}
      >
        <span>{open ? 'Hide Source Code' : 'View Source Code'}</span>
        {sourceFiles.length > 0 && (
          <span className="source-toggle-count">
            {sourceFiles.length} file{sourceFiles.length > 1 ? 's' : ''}
          </span>
        )}
      </button>

      {open && (
        <div className="source-panel">
          {error && <p className="source-error">{error}</p>}

          {sourceFiles.length > 1 && (
            <div className="source-tabs" role="tablist">
              {sourceFiles.map((file) => (
                <button
                  key={file}
                  type="button"
                  role="tab"
                  aria-selected={activeFile === file}
                  className={`source-tab ${activeFile === file ? 'source-tab--active' : ''}`}
                  onClick={() => setActiveFile(file)}
                >
                  {file.split('/').pop()}
                </button>
              ))}
            </div>
          )}

          {sourceFiles.length > 0 && (
            <div className="source-toolbar">
              <code className="source-file-path">{activeFile || `${labFolder}/${programKey}`}</code>
              {activeSource && (
                <button type="button" className="source-copy-btn" onClick={copySource}>
                  Copy
                </button>
              )}
            </div>
          )}

          {loading && <p className="source-status">Loading source...</p>}
          {activeSource && !loading && (
            <div className="source-code-wrap java-code-block">
              <Suspense fallback={<p className="source-status">Highlighting source...</p>}>
                <JavaCodeBlock code={activeSource} />
              </Suspense>
            </div>
          )}
          {!loading && !error && !activeSource && sourceFiles.length > 0 && (
            <p className="source-status">Select a file to view its source.</p>
          )}
          {!loading && sourceFiles.length === 0 && !error && (
            <p className="source-status">No source files found for {programKey}.</p>
          )}
        </div>
      )}
    </div>
  );
}
