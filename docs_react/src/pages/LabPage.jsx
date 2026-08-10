import { useParams, Link } from 'react-router-dom';
import { labs, labTheory } from '../data';
import { labMeta } from '../data/labMeta';
import ProgramCard from '../components/ProgramCard';
import LabTheory from '../components/LabTheory';
import './LabPage.css';

export default function LabPage() {
  const { id } = useParams();
  const lab = labs.find((l) => l.id === Number(id));
  const meta = lab ? labMeta[lab.id] : null;
  const maxLabId = labs[labs.length - 1].id;

  if (!lab) {
    return (
      <div className="page">
        <h1>Lab not found</h1>
        <p>The lab you are looking for does not exist.</p>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    );
  }

  const prevLab = lab.id > 0 ? lab.id - 1 : null;
  const nextLab = lab.id < maxLabId ? lab.id + 1 : null;

  return (
    <div className="lab-page" style={{ '--lab-color': meta.color, '--lab-bg': meta.bg }}>
      {/* Hero */}
      <header className="lab-hero">
        <div className="lab-hero-bg" aria-hidden="true" />
        <div className="lab-hero-inner">
          <nav className="lab-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Lab {lab.id}</span>
          </nav>

          <div className="lab-hero-main">
            <div className="lab-hero-left">
              <div className="lab-hero-badge-row">
                <span className="lab-hero-num">Lab {lab.id}</span>
                <span className="lab-hero-tag">{meta.label}</span>
                <span className="lab-hero-count">{lab.programs.length} programs</span>
              </div>
              <h1 className="lab-hero-title">{lab.title.replace(/^Lab \d+ — /, '')}</h1>
              <p className="lab-hero-desc">{lab.description}</p>
            </div>

            <div className="lab-hero-nav">
              {prevLab ? (
                <Link to={`/lab/${prevLab}`} className="lab-nav-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Lab {prevLab}
                </Link>
              ) : <span />}
              {nextLab ? (
                <Link to={`/lab/${nextLab}`} className="lab-nav-btn lab-nav-btn--next">
                  Lab {nextLab}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : <span />}
            </div>
          </div>

          {lab.note && (
            <div className="lab-note">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              {lab.note}
            </div>
          )}
        </div>
      </header>

      {/* Two-column layout */}
      <div className="lab-layout">
        <aside className="lab-sidebar">
          <nav className="lab-toc" aria-label="On this page">
            <p className="lab-toc-title">On this page</p>
            <a href="#theory" className="lab-toc-link lab-toc-link--section">Theory & Concepts</a>
            <p className="lab-toc-subtitle">Programs</p>
            <ol className="lab-toc-list">
              {lab.programs.map((program, i) => (
                <li key={program.name}>
                  <a href={`#program-${i + 1}`} className="lab-toc-link">
                    <span className="lab-toc-num">{i + 1}</span>
                    <span className="lab-toc-name">{program.name.replace(/\.java$/, '').replace(/^Program\d+_/, '')}</span>
                  </a>
                </li>
              ))}
            </ol>
            {lab.accessTable && (
              <a href="#access-table" className="lab-toc-link lab-toc-link--section">Access Modifiers</a>
            )}
          </nav>
        </aside>

        <div className="lab-content">
          <div id="theory">
            <LabTheory theory={labTheory[lab.id]} accent={meta} />
          </div>

          <section className="lab-programs-section" id="programs">
            <div className="lab-section-header">
              <h2>Programs</h2>
              <p>{lab.programs.length} exercises with documentation and source code</p>
            </div>
            <div className="programs-list">
              {lab.programs.map((program, i) => (
                <ProgramCard key={program.name} program={program} index={i} labFolder={lab.folder} accent={meta} />
              ))}
            </div>
          </section>

          {lab.accessTable && (
            <section className="lab-access-section" id="access-table">
              <div className="lab-section-header">
                <h2>Access Modifier Summary</h2>
                <p>Quick reference for Lab 4 access levels across package boundaries</p>
              </div>
              <div className="access-table-wrap">
                <table className="access-table">
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
                        <td><code className="access-modifier">{row.modifier}</code></td>
                        <td><AccessCell allowed={row.sameClass} /></td>
                        <td><AccessCell allowed={row.samePackage} /></td>
                        <td><AccessCell allowed={row.subclass} /></td>
                        <td><AccessCell allowed={row.otherPackage} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

function AccessCell({ allowed }) {
  return (
    <span className={`access-cell ${allowed ? 'access-cell--yes' : 'access-cell--no'}`}>
      {allowed ? '✓' : '✗'}
    </span>
  );
}
