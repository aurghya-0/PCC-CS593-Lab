import { useState, useEffect, useRef } from 'react';
import { executeJavaCode } from '../services/runner';
import JavaCodeEditor from './JavaCodeEditor';
import './LiveRunnerModal.css';

export default function LiveRunnerModal({
  isOpen,
  onClose,
  initialCode = '',
  title = 'Live Java Code Runner',
  labBadge = 'Lab',
  fileName = 'Main.java'
}) {
  const [code, setCode] = useState(initialCode);
  const [stdin, setStdin] = useState('');
  const [showStdin, setShowStdin] = useState(false);
  const [engine, setEngine] = useState('wandbox');
  const [isExecuting, setIsExecuting] = useState(false);
  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    setCode(initialCode);
    setOutput(null);
    setError(null);
  }, [initialCode, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleTextareaKeyDown = (e) => {
    // Tab key inserts 4 spaces
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const newCode = code.substring(0, start) + '    ' + code.substring(end);
      setCode(newCode);
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 4;
        }
      }, 0);
    }
    // Ctrl+Enter or Cmd+Enter to Run
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      handleRun();
    }
  };

  const handleRun = async () => {
    if (!code.trim() || isExecuting) return;

    setIsExecuting(true);
    setError(null);
    setOutput(null);

    try {
      const res = await executeJavaCode({ code, stdin, engine });
      setOutput(res);
    } catch (err) {
      setError(err.message || 'Execution failed.');
    } finally {
      setIsExecuting(false);
    }
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput(null);
    setError(null);
  };

  const handleCopyOutput = async () => {
    if (!output) return;
    const textToCopy = (output.stdout || '') + (output.stderr ? `\n[STDERR]\n${output.stderr}` : '');
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName.endsWith('.java') ? fileName : `${fileName}.java`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Line numbers calculation
  const lineCount = (code.match(/\n/g) || []).length + 1;
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1);

  return (
    <div className="runner-overlay" onClick={onClose}>
      <div
        className={`runner-modal ${isFullscreen ? 'runner-modal--fullscreen' : ''}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="runner-title"
      >
        {/* Header */}
        <div className="runner-header">
          <div className="runner-title-group">
            <span className="runner-badge">{labBadge}</span>
            <h2 id="runner-title" className="runner-title">{title}</h2>
          </div>
          <div className="runner-actions-top">
            <button
              type="button"
              className="runner-icon-btn"
              onClick={() => setIsFullscreen(!isFullscreen)}
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            >
              {isFullscreen ? '↙️' : '↗️'}
            </button>
            <button
              type="button"
              className="runner-close-btn"
              onClick={onClose}
              aria-label="Close runner"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Controls Toolbar */}
        <div className="runner-toolbar">
          <div className="runner-engine-selector">
            <label htmlFor="engine-select">Engine:</label>
            <select
              id="engine-select"
              value={engine}
              onChange={(e) => setEngine(e.target.value)}
              disabled={isExecuting}
            >
              <option value="wandbox">⚡ OpenJDK 21 Live Runner</option>
              <option value="cheerpj">🌐 WebAssembly Wasm JVM (CheerpJ)</option>
            </select>
          </div>

          <div className="runner-toolbar-buttons">
            <button
              type="button"
              className={`runner-btn runner-btn--stdin ${showStdin ? 'active' : ''}`}
              onClick={() => setShowStdin(!showStdin)}
              title="Toggle Standard Input (Scanner input)"
            >
              ⌨️ Input {stdin ? '•' : ''}
            </button>
            <button
              type="button"
              className="runner-btn runner-btn--secondary"
              onClick={handleReset}
              title="Reset code to original"
              disabled={isExecuting}
            >
              🔄 Reset
            </button>
            <button
              type="button"
              className="runner-btn runner-btn--secondary"
              onClick={handleDownload}
              title="Download Java file"
            >
              💾 Save
            </button>
            <button
              type="button"
              className="runner-btn runner-btn--primary"
              onClick={handleRun}
              disabled={isExecuting}
            >
              {isExecuting ? (
                <>
                  <span className="runner-spinner" /> Running...
                </>
              ) : (
                <>▶️ Run Code (Ctrl+Enter)</>
              )}
            </button>
          </div>
        </div>

        {/* Main Content Area: Editor + Output */}
        <div className="runner-body">
          {/* Editor Container */}
          <div className="runner-editor-wrap">
            {showStdin && (
              <div className="runner-stdin-box">
                <div className="runner-stdin-header">
                  <span>Standard Input (STDIN)</span>
                  <span className="runner-stdin-hint">Provide inputs for Scanner (each input on new line)</span>
                </div>
                <textarea
                  className="runner-stdin-input"
                  value={stdin}
                  onChange={(e) => setStdin(e.target.value)}
                  placeholder="Enter inputs here (e.g. numbers, strings)..."
                  rows={2}
                />
              </div>
            )}

            <JavaCodeEditor
              value={code}
              onChange={setCode}
              onKeyDown={handleTextareaKeyDown}
              textareaRef={textareaRef}
            />
          </div>

          {/* Console / Output Drawer */}
          <div className="runner-console-wrap">
            <div className="runner-console-header">
              <div className="runner-console-title">
                <span>🖥️ Output Console</span>
                {output && (
                  <span className={`runner-status-tag ${output.exitCode === 0 ? 'success' : 'error'}`}>
                    {output.exitCode === 0 ? 'Exit Code 0 (Success)' : `Exit Code ${output.exitCode}`}
                  </span>
                )}
                {output?.durationMs !== undefined && (
                  <span className="runner-time-tag">⏱️ {output.durationMs}ms</span>
                )}
              </div>
              {output && (
                <button
                  type="button"
                  className="runner-copy-btn"
                  onClick={handleCopyOutput}
                >
                  {copied ? '✓ Copied' : '📋 Copy Output'}
                </button>
              )}
            </div>

            <div className="runner-console-output">
              {isExecuting && (
                <div className="runner-console-loading">
                  <span className="runner-spinner runner-spinner--lg" />
                  <p>Compiling & Running Java Bytecode...</p>
                </div>
              )}

              {!isExecuting && error && (
                <div className="runner-console-error">
                  <strong>Execution Error:</strong>
                  <pre>{error}</pre>
                </div>
              )}

              {!isExecuting && output && (
                <div className="runner-console-result">
                  {output.engineNotice && (
                    <div className="runner-notice">{output.engineNotice}</div>
                  )}
                  {output.stdout && (
                    <pre className="runner-stdout">{output.stdout}</pre>
                  )}
                  {output.stderr && (
                    <div className="runner-stderr-wrap">
                      <span className="runner-stderr-label">Error Stream:</span>
                      <pre className="runner-stderr">{output.stderr}</pre>
                    </div>
                  )}
                  {!output.stdout && !output.stderr && (
                    <span className="runner-console-empty">(Program executed with no output)</span>
                  )}
                </div>
              )}

              {!isExecuting && !output && !error && (
                <div className="runner-console-placeholder">
                  <p>Press <strong>▶️ Run Code</strong> or hit <strong>Ctrl + Enter</strong> to execute program in browser WebAssembly.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
