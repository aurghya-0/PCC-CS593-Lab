import CodeBlock from './CodeBlock';
import SourceViewer from './SourceViewer';

export default function ProgramCard({ program, index }) {
  return (
    <article className="program-card" id={`program-${index + 1}`}>
      <div className="program-card-header">
        <span className="program-number">#{index + 1}</span>
        <h3 className="program-name">{program.name}</h3>
      </div>

      <div className="program-meta">
        <span className="badge badge-concept">{program.concept}</span>
        {program.path && (
          <code className="program-path">{program.path}</code>
        )}
      </div>

      <div className="program-section">
        <h4>Overview</h4>
        <p className="program-description">{program.description}</p>
      </div>

      {program.purpose && (
        <div className="program-section">
          <h4>Purpose</h4>
          <p className="program-text">{program.purpose}</p>
        </div>
      )}

      {program.howItWorks && program.howItWorks.length > 0 && (
        <div className="program-section">
          <h4>How It Works</h4>
          <ol className="how-it-works-list">
            {program.howItWorks.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      )}

      {program.classes && program.classes.length > 0 && (
        <div className="program-section">
          <h4>Classes / Interfaces</h4>
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
              </tr>
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
      )}

      {program.files && program.files.length > 0 && (
        <div className="program-section">
          <h4>Files</h4>
          <ul className="file-list">
            {program.files.map((file) => (
              <li key={file}><code>{file}</code></li>
            ))}
          </ul>
        </div>
      )}

      {program.run && (
        <div className="program-section">
          <h4>How to Run</h4>
          <CodeBlock>{program.run}</CodeBlock>
        </div>
      )}

      {program.output && (
        <div className="program-section">
          <h4>Expected Output</h4>
          <CodeBlock>{program.output}</CodeBlock>
        </div>
      )}

      {program.notes && program.notes.length > 0 && (
        <div className="program-section">
          <h4>Key Concepts & Takeaways</h4>
          <ul className="notes-list">
            {program.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      )}

      <SourceViewer program={program} />
    </article>
  );
}
