import { Link } from 'react-router-dom';
import { utilities } from '../data';
import CodeBlock from '../components/CodeBlock';

export default function UtilitiesPage() {
  return (
    <div className="page">
      <div className="page-header">
        <Link to="/" className="breadcrumb">Home</Link>
        <span className="breadcrumb-sep">/</span>
        <span>Utilities</span>
      </div>

      <h1>{utilities.title}</h1>

      {utilities.scripts.map((s) => (
        <article key={s.name} className="program-card">
          <h2><code>{s.name}</code></h2>
          <p className="program-description">{s.description}</p>

          <div className="program-section">
            <h4>Usage</h4>
            <CodeBlock>{s.usage.join('\n')}</CodeBlock>
          </div>

          <div className="program-section">
            <h4>Behavior by Lab</h4>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Lab</th>
                  <th>Compile Strategy</th>
                  <th>Run Behavior</th>
                </tr>
              </thead>
              <tbody>
                {s.behavior.map((b) => (
                  <tr key={b.lab}>
                    <td>{b.lab}</td>
                    <td>{b.compile}</td>
                    <td>{b.run}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="program-section">
            <h4>Requirements</h4>
            <ul className="notes-list">
              {s.requirements.map((req) => (
                <li key={req}>{req}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
