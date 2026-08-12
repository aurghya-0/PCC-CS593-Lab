import { useState } from 'react';
import { Link } from 'react-router-dom';
import { courseInfo, labsOverview } from '../data';
import { labMeta } from '../data/labMeta';
import CodeBlock from '../components/CodeBlock';
import './Home.css';

const features = [
  {
    id: 'theory',
    title: 'Theory & Concepts',
    description: 'Concise explanations, prerequisites, and key terms for every lab — read before you code.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
    span: 'bento-wide',
  },
  {
    id: 'source',
    title: 'Live Source Code',
    description: '69 Java files, syntax-highlighted in the browser.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    span: 'bento-tall',
  },
  {
    id: 'guides',
    title: 'Step-by-Step Guides',
    description: 'What it does, how it works, and exact commands to run.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <circle cx="4" cy="6" r="1" fill="currentColor" />
        <circle cx="4" cy="12" r="1" fill="currentColor" />
        <circle cx="4" cy="18" r="1" fill="currentColor" />
      </svg>
    ),
    span: '',
  },
  {
    id: 'syllabus',
    title: 'MAKAUT Aligned',
    description: 'All 7 modules from Java basics through Swing graphics.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5" />
      </svg>
    ),
    span: '',
  },
];

const sourcePreviewCode = `class Student {
  String name;
  void display() {
    System.out.println(name);
  }
}`;

const quickStartTabs = [
  {
    id: 'basics',
    label: 'Basics',
    labs: '0',
    code: 'cd Lab_0\njavac Program1_HelloWorld.java\njava Program1_HelloWorld',
  },
  {
    id: 'single',
    label: 'Single-file',
    labs: '1, 2, 3, 5',
    code: 'cd Lab_1\njavac Program1_StudentClassObject.java\njava Program1_StudentClassObject',
  },
  {
    id: 'package',
    label: 'Packages',
    labs: '4',
    code: 'cd Lab_4/Program1_BasicPackage\njavac mypack/Greeting.java Program1_BasicPackage.java\njava Program1_BasicPackage',
  },
  {
    id: 'gui',
    label: 'GUI / Swing',
    labs: '6',
    code: 'cd Lab_6\njavac Program2_DrawLines.java\njava Program2_DrawLines',
  },
  {
    id: 'batch',
    label: 'Batch script',
    labs: 'All',
    code: 'chmod +x compile_all.sh\n./compile_all.sh        # all labs\n./compile_all.sh 3      # Lab 3 only',
  },
];

const heroCode = `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`;

const lab0 = labsOverview[0];
const lab0Accent = labMeta[0];
const otherLabs = labsOverview.slice(1);

export default function Home() {
  const [activeTab, setActiveTab] = useState('basics');
  const currentTab = quickStartTabs.find((t) => t.id === activeTab);

  return (
    <div className="home">
      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero-bg" aria-hidden="true">
          <div className="home-hero-orb home-hero-orb--1" />
          <div className="home-hero-orb home-hero-orb--2" />
          <div className="home-hero-orb home-hero-orb--3" />
          <div className="home-hero-grid" />
        </div>

        <div className="home-container home-hero-inner">
          <div className="home-hero-copy">
            <div className="home-hero-eyebrow">
              <span className="home-pulse" />
              MAKAUT · B.Tech CSE · Semester V
            </div>
            <h1 className="home-hero-title">
              <span className="home-hero-code-label">{courseInfo.code}</span>
              Object Oriented Programming Lab
            </h1>
            <p className="home-hero-desc">
              {courseInfo.totalPrograms} fully documented Java programs with theory,
              source code, and run instructions — from Hello World to multithreading and Swing.
            </p>
            <div className="home-hero-actions">
              <Link to="/playground" className="home-btn home-btn--primary">
                ⚡ Try Live Playground
              </Link>
              <Link to="/lab/0" className="home-btn home-btn--ghost">
                Start with Lab 0
              </Link>
              <a href="#labs" className="home-btn home-btn--ghost">
                Explore labs
              </a>
            </div>
            <div className="home-hero-metrics">
              {[
                { value: courseInfo.totalPrograms, label: 'Programs' },
                { value: courseInfo.totalLabs, label: 'Lab modules' },
                { value: '69', label: 'Source files' },
              ].map((stat) => (
                <div key={stat.label} className="home-metric">
                  <span className="home-metric-value">{stat.value}</span>
                  <span className="home-metric-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="home-hero-terminal" aria-hidden="true">
            <div className="home-terminal">
              <div className="home-terminal-bar">
                <span className="home-terminal-dot home-terminal-dot--red" />
                <span className="home-terminal-dot home-terminal-dot--yellow" />
                <span className="home-terminal-dot home-terminal-dot--green" />
                <span className="home-terminal-title">Program1_HelloWorld.java</span>
              </div>
              <pre className="home-terminal-code"><code>{heroCode}</code></pre>
              <div className="home-terminal-output">
                <span className="home-terminal-prompt">$</span> java Program1_HelloWorld
                <br />
                <span className="home-terminal-result">Hello, Java!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning path */}
      <section className="home-path">
        <div className="home-container">
          <div className="home-path-header">
            <h2>Your learning path</h2>
            <p>Start from zero — progress through every syllabus topic in order.</p>
          </div>
          <div className="home-path-track">
            {labsOverview.map((lab, i) => {
              const accent = labMeta[i];
              return (
                <Link
                  key={lab.id}
                  to={`/lab/${lab.id}`}
                  className="home-path-node"
                  style={{ '--node-color': accent.color, '--node-bg': accent.bg }}
                >
                  <span className="home-path-num">{lab.id}</span>
                  <span className="home-path-label">{accent.label}</span>
                  {i < labsOverview.length - 1 && <span className="home-path-line" aria-hidden="true" />}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bento features */}
      <section className="home-section">
        <div className="home-container">
          <div className="home-section-header">
            <span className="home-section-tag">Why this site</span>
            <h2>Everything you need, nothing you don't</h2>
            <p>Built for students who want to learn, not hunt through folders.</p>
          </div>
          <div className="home-bento">
            {features.map((f) => (
              <div key={f.id} className={`home-bento-card ${f.span}`}>
                <div className="home-bento-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                {f.id === 'source' && (
                  <div className="home-bento-code-preview" aria-hidden="true">
                    <pre className="home-bento-code-snippet"><code>{sourcePreviewCode}</code></pre>
                    <div className="home-bento-files">
                      <span>Lab_0/Program1_HelloWorld.java</span>
                      <span>Lab_1/Program7_SingleInheritance.java</span>
                      <span>Lab_5/Program3_ThreadSync.java</span>
                    </div>
                  </div>
                )}
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Labs */}
      <section className="home-section home-labs" id="labs">
        <div className="home-container">
          <div className="home-section-header">
            <span className="home-section-tag">Curriculum</span>
            <h2>Lab modules</h2>
            <p>Theory, programs, and source code for every exercise.</p>
          </div>

          <Link
            to={`/lab/${lab0.id}`}
            className="home-lab-featured"
            style={{ '--lab-color': lab0Accent.color, '--lab-bg': lab0Accent.bg }}
          >
            <div className="home-lab-featured-left">
              <span className="home-lab-featured-badge">Start here</span>
              <span className="home-lab-featured-num">Lab {lab0.id}</span>
              <h3>{lab0.title}</h3>
              <p>{lab0.count} programs covering variables, loops, arrays, and methods.</p>
            </div>
            <div className="home-lab-featured-right">
              <span className="home-lab-featured-tag">{lab0Accent.label}</span>
              <span className="home-lab-featured-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>

          <div className="home-lab-grid">
            {otherLabs.map((lab, i) => {
              const accent = labMeta[i + 1];
              return (
                <Link
                  key={lab.id}
                  to={`/lab/${lab.id}`}
                  className="home-lab-card"
                  style={{ '--lab-color': accent.color, '--lab-bg': accent.bg }}
                >
                  <div className="home-lab-card-top">
                    <span className="home-lab-num">{String(lab.id).padStart(2, '0')}</span>
                    <span className="home-lab-tag">{accent.label}</span>
                  </div>
                  <h3 className="home-lab-title">{lab.title}</h3>
                  <div className="home-lab-footer">
                    <span className="home-lab-count">{lab.count} programs</span>
                    <span className="home-lab-arrow" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Start + Course */}
      <section className="home-section home-bottom">
        <div className="home-container home-bottom-grid">
          <div className="home-panel home-panel--terminal">
            <div className="home-panel-header">
              <span className="home-section-tag">Quick Start</span>
              <h2>Compile &amp; run in seconds</h2>
              <p>Pick a lab type and copy the commands.</p>
            </div>
            <div className="home-tabs" role="tablist">
              {quickStartTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className={`home-tab ${activeTab === tab.id ? 'home-tab--active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <p className="home-tab-hint">Lab {currentTab.labs}</p>
            <CodeBlock>{currentTab.code}</CodeBlock>
            <div className="home-prereq">
              <h3>Prerequisites</h3>
              <ul>
                <li>Java JDK 8+ (<code>java -version</code>)</li>
                <li>Terminal access for compile &amp; run</li>
              </ul>
            </div>
          </div>

          <div className="home-panel home-panel--course">
            <div className="home-panel-header">
              <span className="home-section-tag">Course Info</span>
              <h2>About this lab</h2>
              <p>MAKAUT West Bengal — B.Tech CSE</p>
            </div>
            <dl className="home-course-list">
              <div className="home-course-item">
                <dt>University</dt>
                <dd>{courseInfo.university}</dd>
              </div>
              <div className="home-course-item">
                <dt>Branch</dt>
                <dd>{courseInfo.branch}</dd>
              </div>
              <div className="home-course-item">
                <dt>Semester</dt>
                <dd>{courseInfo.semester}</dd>
              </div>
              <div className="home-course-item">
                <dt>Language</dt>
                <dd>{courseInfo.language}</dd>
              </div>
              <div className="home-course-item">
                <dt>Course Code</dt>
                <dd>{courseInfo.code}</dd>
              </div>
            </dl>
            <Link to="/utilities" className="home-utilities-link">
              View compile_all.sh utility
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="home-container home-cta-inner">
          <div className="home-cta-copy">
            <h2>Ready to code?</h2>
            <p>Jump into Lab 0 and write your first Java program in minutes.</p>
          </div>
          <Link to="/lab/0" className="home-btn home-btn--cta">
            Begin Lab 0
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
