import './LabTheory.css';

export default function LabTheory({ theory, accent }) {
  if (!theory) return null;

  const color = accent?.color || 'var(--primary)';
  const bg = accent?.bg || 'var(--primary-light)';

  return (
    <section className="theory" style={{ '--theory-color': color, '--theory-bg': bg }}>
      <div className="theory-header">
        <div className="theory-header-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
          </svg>
        </div>
        <div>
          <h2 className="theory-title">Theory & Concepts</h2>
          <p className="theory-subtitle">Background knowledge required for this lab</p>
        </div>
      </div>

      <p className="theory-overview">{theory.overview}</p>

      {theory.prerequisites?.length > 0 && (
        <div className="theory-prereq-box">
          <h3>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
            </svg>
            Prerequisites
          </h3>
          <ul>
            {theory.prerequisites.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="theory-topics-grid">
        {theory.topics.map((topic, i) => (
          <article key={topic.title} className="theory-topic-card">
            <div className="theory-topic-num">{String(i + 1).padStart(2, '0')}</div>
            <h3>{topic.title}</h3>
            <p className="theory-topic-summary">{topic.summary}</p>
            {topic.points?.length > 0 && (
              <ul>
                {topic.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>

      {theory.keyTerms?.length > 0 && (
        <div className="theory-glossary">
          <h3>Key Terms</h3>
          <div className="theory-glossary-grid">
            {theory.keyTerms.map(({ term, definition }) => (
              <div key={term} className="theory-glossary-card">
                <dt>{term}</dt>
                <dd>{definition}</dd>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
