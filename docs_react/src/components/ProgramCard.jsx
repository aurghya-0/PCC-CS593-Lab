import CodeBlock from './CodeBlock';
import SourceViewer from './SourceViewer';
import './ProgramCard.css';

export default function ProgramCard({ program, index, labFolder, accent }) {
  const color = accent?.color || 'var(--primary)';
  const bg = accent?.bg || 'var(--primary-light)';

  return (
    <article
      className="prog-card"
      id={`program-${index + 1}`}
      style={{ '--prog-color': color, '--prog-bg': bg }}
    >
      <header className="prog-card-header">
        <div className="prog-card-title-row">
          <span className="prog-number">{String(index + 1).padStart(2, '0')}</span>
          <div>
            <h3 className="prog-name">{program.name}</h3>
            <span className="prog-concept">{program.concept}</span>
          </div>
        </div>
        {program.path && (
          <code className="prog-path">{program.path}</code>
        )}
      </header>

      <div className="prog-body">
        <section className="prog-block">
          <h4><span className="prog-block-icon">📋</span> Overview</h4>
          <p>{program.description}</p>
        </section>

        {program.purpose && (
          <section className="prog-block prog-block--callout">
            <h4><span className="prog-block-icon">🎯</span> Purpose</h4>
            <p>{program.purpose}</p>
          </section>
        )}

        {program.howItWorks?.length > 0 && (
          <section className="prog-block">
            <h4><span className="prog-block-icon">⚙️</span> How It Works</h4>
            <ol className="prog-steps">
              {program.howItWorks.map((step, i) => (
                <li key={step}>
                  <span className="prog-step-num">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {program.classes?.length > 0 && (
          <section className="prog-block">
            <h4><span className="prog-block-icon">🏗️</span> Classes / Interfaces</h4>
            <div className="prog-table-wrap">
              <table className="prog-table">
                <thead>
                  <tr><th>Name</th><th>Role</th></tr>
                </thead>
                <tbody>
                  {program.classes.map((cls) => (
                    <tr key={cls.name}>
                      <td><code>{cls.name}</code></td>
                      <td>{cls.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {program.files?.length > 0 && (
          <section className="prog-block">
            <h4><span className="prog-block-icon">📁</span> Files</h4>
            <ul className="prog-files">
              {program.files.map((file) => (
                <li key={file}><code>{file}</code></li>
              ))}
            </ul>
          </section>
        )}

        <div className="prog-code-grid">
          {program.run && (
            <section className="prog-block">
              <h4><span className="prog-block-icon">▶️</span> How to Run</h4>
              <CodeBlock>{program.run}</CodeBlock>
            </section>
          )}
          {program.output && (
            <section className="prog-block">
              <h4><span className="prog-block-icon">📤</span> Expected Output</h4>
              <CodeBlock>{program.output}</CodeBlock>
            </section>
          )}
        </div>

        {program.notes?.length > 0 && (
          <section className="prog-block">
            <h4><span className="prog-block-icon">💡</span> Key Takeaways</h4>
            <div className="prog-tags">
              {program.notes.map((note) => (
                <span key={note} className="prog-tag">{note}</span>
              ))}
            </div>
          </section>
        )}
      </div>

      <SourceViewer labFolder={labFolder} program={program} />
    </article>
  );
}
