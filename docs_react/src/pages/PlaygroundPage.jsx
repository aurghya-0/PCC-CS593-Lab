import { useState, useEffect, useRef } from 'react';
import { executeJavaCode } from '../services/runner';
import { labsOverview } from '../data';
import { resolveProgramSourceFiles, getSourceUrl } from '../utils/sourceFiles';
import JavaCodeEditor from '../components/JavaCodeEditor';
import './PlaygroundPage.css';

const DEFAULT_TEMPLATES = [
  {
    id: 'hello',
    name: '1. Hello World (Basics)',
    code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java OOP World!");
        System.out.println("B.Tech CSE Semester V - PCC-CS593 Lab");
        
        int a = 25, b = 15;
        System.out.println("Sum of " + a + " + " + b + " = " + (a + b));
    }
}`
  },
  {
    id: 'class_object',
    name: '2. Class & Object (OOP)',
    code: `class Student {
    private String name;
    private int roll;
    private double gpa;

    public Student(String name, int roll, double gpa) {
        this.name = name;
        this.roll = roll;
        this.gpa = gpa;
    }

    public void displayDetails() {
        System.out.println("Student: " + name + " | Roll: " + roll + " | GPA: " + gpa);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Aurghya", 101, 9.4);
        Student s2 = new Student("Riya", 102, 9.1);
        
        s1.displayDetails();
        s2.displayDetails();
    }
}`
  },
  {
    id: 'interface',
    name: '3. Interfaces & Abstract Classes',
    code: `interface Playable {
    void play();
}

abstract class Instrument implements Playable {
    protected String name;
    public Instrument(String name) { this.name = name; }
}

class Guitar extends Instrument {
    public Guitar() { super("Guitar"); }
    public void play() {
        System.out.println("Strumming acoustic chords on " + name);
    }
}

public class Main {
    public static void main(String[] args) {
        Playable instrument = new Guitar();
        instrument.play();
    }
}`
  },
  {
    id: 'threads',
    name: '4. Multithreading (Threads)',
    code: `class CounterWorker extends Thread {
    private String threadName;
    
    public CounterWorker(String name) {
        this.threadName = name;
    }
    
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println("[" + threadName + "] Count: " + i);
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                System.out.println(threadName + " interrupted.");
            }
        }
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println("Starting threads...");
        CounterWorker t1 = new CounterWorker("Worker-1");
        CounterWorker t2 = new CounterWorker("Worker-2");
        
        t1.start();
        t2.start();
    }
}`
  }
];

export default function PlaygroundPage() {
  const [code, setCode] = useState(DEFAULT_TEMPLATES[0].code);
  const [stdin, setStdin] = useState('');
  const [showStdin, setShowStdin] = useState(false);
  const [engine, setEngine] = useState('wandbox');
  const [selectedLab, setSelectedLab] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');
  const [labProgramsList, setLabProgramsList] = useState([]);
  const [isExecuting, setIsExecuting] = useState(false);
  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const textareaRef = useRef(null);

  // When selected lab changes, update programs list
  useEffect(() => {
    if (!selectedLab) {
      setLabProgramsList([]);
      setSelectedProgram('');
      return;
    }

    const labObj = labsOverview.find((l) => String(l.id) === String(selectedLab));
    if (labObj && labObj.programs) {
      setLabProgramsList(labObj.programs);
      setSelectedProgram('');
    }
  }, [selectedLab]);

  // When selected program changes, load its source code
  useEffect(() => {
    if (!selectedLab || !selectedProgram) return;

    const labFolder = `Lab_${selectedLab}`;
    const prog = labProgramsList.find((p) => p.name === selectedProgram);

    if (!prog) return;

    resolveProgramSourceFiles(labFolder, prog)
      .then(async (files) => {
        if (files.length > 0) {
          const res = await fetch(getSourceUrl(files[0]));
          if (res.ok) {
            const src = await res.text();
            setCode(src);
            setOutput(null);
            setError(null);
          }
        }
      })
      .catch((err) => {
        console.warn('Failed to load program source:', err);
      });
  }, [selectedProgram, selectedLab, labProgramsList]);

  const handleTemplateChange = (e) => {
    const tmpl = DEFAULT_TEMPLATES.find((t) => t.id === e.target.value);
    if (tmpl) {
      setCode(tmpl.code);
      setSelectedLab('');
      setSelectedProgram('');
      setOutput(null);
      setError(null);
    }
  };

  const handleTextareaKeyDown = (e) => {
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
      setError(err.message || 'Execution error.');
    } finally {
      setIsExecuting(false);
    }
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

  const lineCount = (code.match(/\n/g) || []).length + 1;
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1);

  return (
    <div className="playground-container">
      {/* Header Banner */}
      <header className="pg-header">
        <div className="pg-title-area">
          <span className="pg-badge">⚡ Interactive IDE</span>
          <h1 className="pg-title">Java Live Runner & Playground</h1>
          <p className="pg-subtitle">
            Compile and run standard Java code in browser WebAssembly (CheerpJ 3.0) or Cloud Execution engine.
          </p>
        </div>
      </header>

      {/* Control Bar */}
      <div className="pg-controls">
        {/* Preset Selector */}
        <div className="pg-control-group">
          <label htmlFor="tmpl-select">Templates:</label>
          <select id="tmpl-select" onChange={handleTemplateChange}>
            {DEFAULT_TEMPLATES.map((t) => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>
        </div>

        {/* Lab Program Selector */}
        <div className="pg-control-group">
          <label htmlFor="lab-select">Load Lab Program:</label>
          <select
            id="lab-select"
            value={selectedLab}
            onChange={(e) => setSelectedLab(e.target.value)}
          >
            <option value="">-- Select Lab --</option>
            {labsOverview.map((lab) => (
              <option key={lab.id} value={lab.id}>Lab {lab.id}: {lab.title}</option>
            ))}
          </select>

          {selectedLab && (
            <select
              id="prog-select"
              value={selectedProgram}
              onChange={(e) => setSelectedProgram(e.target.value)}
            >
              <option value="">-- Select Program --</option>
              {labProgramsList.map((p) => (
                <option key={p.name} value={p.name}>{p.name}</option>
              ))}
            </select>
          )}
        </div>

        {/* Engine Selector */}
        <div className="pg-control-group">
          <label htmlFor="pg-engine">Engine:</label>
          <select
            id="pg-engine"
            value={engine}
            onChange={(e) => setEngine(e.target.value)}
          >
            <option value="wandbox">⚡ OpenJDK 21 Live Runner</option>
            <option value="cheerpj">🌐 WebAssembly Wasm JVM (CheerpJ)</option>
          </select>
        </div>

        {/* Actions */}
        <div className="pg-actions">
          <button
            type="button"
            className={`pg-btn pg-btn--stdin ${showStdin ? 'active' : ''}`}
            onClick={() => setShowStdin(!showStdin)}
          >
            ⌨️ Stdin Input {stdin ? '•' : ''}
          </button>
          <button
            type="button"
            className="pg-btn pg-btn--primary"
            onClick={handleRun}
            disabled={isExecuting}
          >
            {isExecuting ? (
              <>
                <span className="runner-spinner" /> Executing...
              </>
            ) : (
              <>▶️ Run Code (Ctrl+Enter)</>
            )}
          </button>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="pg-workspace">
        {/* Left: Code Editor */}
        <div className="pg-editor-wrap">
          {showStdin && (
            <div className="pg-stdin-box">
              <div className="pg-stdin-label">
                <span>Standard Input (STDIN)</span>
                <span className="pg-stdin-hint">Inputs read by Scanner / System.in</span>
              </div>
              <textarea
                className="pg-stdin-textarea"
                value={stdin}
                onChange={(e) => setStdin(e.target.value)}
                placeholder="Enter input values..."
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

        {/* Right: Output Console */}
        <div className="pg-console-wrap">
          <div className="pg-console-header">
            <div className="pg-console-title">
              <span>🖥️ Output Terminal</span>
              {output && (
                <span className={`pg-status-tag ${output.exitCode === 0 ? 'success' : 'error'}`}>
                  {output.exitCode === 0 ? 'Success (Exit 0)' : `Exit Code ${output.exitCode}`}
                </span>
              )}
              {output?.durationMs !== undefined && (
                <span className="pg-time-tag">⏱️ {output.durationMs}ms</span>
              )}
            </div>
            {output && (
              <button
                type="button"
                className="pg-copy-btn"
                onClick={handleCopyOutput}
              >
                {copied ? '✓ Copied' : '📋 Copy'}
              </button>
            )}
          </div>

          <div className="pg-console-output">
            {isExecuting && (
              <div className="pg-console-loading">
                <span className="runner-spinner runner-spinner--lg" />
                <p>Compiling & Running Java Bytecode...</p>
              </div>
            )}

            {!isExecuting && error && (
              <div className="pg-console-error">
                <strong>Execution Error:</strong>
                <pre>{error}</pre>
              </div>
            )}

            {!isExecuting && output && (
              <div className="pg-console-result">
                {output.engineNotice && (
                  <div className="pg-notice">{output.engineNotice}</div>
                )}
                {output.stdout && (
                  <pre className="pg-stdout">{output.stdout}</pre>
                )}
                {output.stderr && (
                  <div className="pg-stderr-wrap">
                    <span className="pg-stderr-label">Error Output:</span>
                    <pre className="pg-stderr">{output.stderr}</pre>
                  </div>
                )}
                {!output.stdout && !output.stderr && (
                  <span className="pg-console-empty">(No output printed)</span>
                )}
              </div>
            )}

            {!isExecuting && !output && !error && (
              <div className="pg-console-placeholder">
                <p>Click <strong>▶️ Run Code</strong> to compile and execute Java code in WebAssembly.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
