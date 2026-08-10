import { Link } from 'react-router-dom';
import { courseInfo, labsOverview } from '../data';
import CodeBlock from '../components/CodeBlock';

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-badge">Java &middot; OOP Lab</div>
        <h1>{courseInfo.code}</h1>
        <p className="hero-subtitle">{courseInfo.title}</p>
        <p className="hero-desc">
          {courseInfo.totalPrograms} programs across 6 lab modules for B.Tech CSE Semester V,
          based on the MAKAUT West Bengal syllabus.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-value">{courseInfo.totalPrograms}</span>
            <span className="stat-label">Programs</span>
          </div>
          <div className="stat">
            <span className="stat-value">6</span>
            <span className="stat-label">Labs</span>
          </div>
          <div className="stat">
            <span className="stat-value">59</span>
            <span className="stat-label">Source Files</span>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Syllabus Coverage</h2>
        <div className="lab-grid">
          {labsOverview.map((lab) => (
            <Link key={lab.id} to={`/lab/${lab.id}`} className="lab-card">
              <div className="lab-card-number">Lab {lab.id}</div>
              <h3 className="lab-card-title">{lab.title}</h3>
              <span className="lab-card-count">{lab.count} programs</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Prerequisites</h2>
        <ul className="info-list">
          <li>Java JDK 8 or higher (JDK 11+ recommended)</li>
          <li>Terminal / command line access</li>
        </ul>
        <CodeBlock>{'java -version\njavac -version'}</CodeBlock>
      </section>

      <section className="section">
        <h2>Quick Start</h2>
        <h3>Single-file programs (Lab 1, 2, 3, 5)</h3>
        <CodeBlock>{'cd Lab_1\njavac Program1_StudentClassObject.java\njava Program1_StudentClassObject'}</CodeBlock>

        <h3>Package programs (Lab 4)</h3>
        <CodeBlock>{'cd Lab_4/Program1_BasicPackage\njavac mypack/Greeting.java Program1_BasicPackage.java\njava Program1_BasicPackage'}</CodeBlock>

        <h3>GUI programs (Lab 6)</h3>
        <CodeBlock>{'cd Lab_6\njavac Program2_DrawLines.java\njava Program2_DrawLines'}</CodeBlock>

        <h3>Batch script</h3>
        <CodeBlock>{'chmod +x compile_all.sh\n./compile_all.sh        # all labs\n./compile_all.sh 3      # Lab 3 only'}</CodeBlock>
      </section>

      <section className="section">
        <h2>Course Information</h2>
        <table className="data-table">
          <tbody>
            <tr><td>University</td><td>{courseInfo.university}</td></tr>
            <tr><td>Branch</td><td>{courseInfo.branch}</td></tr>
            <tr><td>Semester</td><td>{courseInfo.semester}</td></tr>
            <tr><td>Language</td><td>{courseInfo.language}</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
