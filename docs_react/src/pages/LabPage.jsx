import { useParams, Link } from 'react-router-dom';
import { labs } from '../data';
import ProgramCard from '../components/ProgramCard';

export default function LabPage() {
  const { id } = useParams();
  const lab = labs.find((l) => l.id === Number(id));

  if (!lab) {
    return (
      <div className="page">
        <h1>Lab not found</h1>
        <p>The lab you are looking for does not exist.</p>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-header">
        <Link to="/" className="breadcrumb">Home</Link>
        <span className="breadcrumb-sep">/</span>
        <span>Lab {lab.id}</span>
      </div>

      <h1>{lab.title}</h1>
      <p className="page-description">{lab.description}</p>

      {lab.note && (
        <div className="alert alert-info">{lab.note}</div>
      )}

      <div className="toc">
        <h2>Programs</h2>
        <ol className="toc-list">
          {lab.programs.map((program, i) => (
            <li key={program.name}>
              <a href={`#program-${i + 1}`}>{program.name}</a>
              <span className="toc-concept">{program.concept}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="programs-list">
        {lab.programs.map((program, i) => (
          <ProgramCard key={program.name} program={program} index={i} labFolder={lab.folder} />
        ))}
      </div>

      {lab.accessTable && (
        <section className="section">
          <h2>Access Modifier Summary</h2>
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Modifier</th>
                  <th>Same Class</th>
                  <th>Same Package</th>
                  <th>Subclass</th>
                  <th>Other Package</th>
                </tr>
              </thead>
              <tbody>
                {lab.accessTable.map((row) => (
                  <tr key={row.modifier}>
                    <td><code>{row.modifier}</code></td>
                    <td>{row.sameClass ? '✓' : '✗'}</td>
                    <td>{row.samePackage ? '✓' : '✗'}</td>
                    <td>{row.subclass ? '✓' : '✗'}</td>
                    <td>{row.otherPackage ? '✓' : '✗'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}
