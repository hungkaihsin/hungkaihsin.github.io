import React from 'react';
import './Projects.css';

/* Featured work is a two-column spread: the claim on the left, the evidence
   plotted on the right. Every plotted value is a real measurement from the
   project's own repo or paper. Nothing here is illustrative.

   `emphasis: true` paints a bar in the accent; it marks the figure that is
   Daniel's own contribution rather than the team's or the comparison's. */

const Chart = ({ caption, scale, series }) => (
  <figure className="chart">
    <div
      className="chart-plot"
      role="img"
      aria-label={`${caption}. ${series
        .map(([label, , display]) => `${label}: ${display}`)
        .join('. ')}`}
    >
      {series.map(([label, value, display, emphasis]) => (
        <div className="chart-row" key={label}>
          <span className="chart-label">{label}</span>
          <span className="chart-track">
            <span
              className={`chart-fill${emphasis ? ' is-emphasis' : ''}`}
              style={{ width: `${Math.max((value / scale) * 100, 1.5)}%` }}
            />
          </span>
          <span className="chart-value mono">{display}</span>
        </div>
      ))}
    </div>
    <figcaption className="chart-caption">{caption}</figcaption>
  </figure>
);

const Projects = () => {
  const featured = [
    {
      title: 'Toxicity Prediction & Data Curation',
      date: 'May 2026 · five-person team',
      status: null,
      line: 'Built the Ridge baseline for a seven-model benchmark; harmonized DrugMatrix into the training set.',
      figure: ['30,106', 'records merged'],
      tech: 'Python · Scikit-Learn · Pandas · Gemini API',
      link: 'https://github.com/hungkaihsin/toxicity-prediction',
      chart: {
        caption: 'Mean per-target R² across 31 endpoints',
        scale: 0.7,
        series: [
          ['Team best (XGBoost)', 0.58, '0.58'],
          ['My Ridge baseline', 0.42, '0.42', true],
        ],
      },
    },
    {
      title: 'GoPark: AI Parking Recommendation',
      date: 'Dec 2025',
      status: 'Accepted · IntelliSys 2026 · Springer LNNS',
      line: 'Designed the nine-table PostgreSQL/PostGIS schema and the FastAPI backend serving the detector.',
      figure: ['97.2 %', 'detector mAP@0.5'],
      tech: 'PostgreSQL/PostGIS · SQLAlchemy · Alembic · FastAPI · Docker · SwiftUI',
      link: 'https://github.com/hungkaihsin/Parking_lot_detection',
      chart: {
        caption: 'Request latency budget',
        scale: 50,
        series: [
          ['End to end', 50, '< 50 ms'],
          ['Detector inference', 5.4, '5.4 ms'],
          ['Query parser', 0.07, '0.07 ms', true],
        ],
      },
    },
    {
      title: 'DeepTSMC: Forecasting Pipeline',
      date: 'Jun 2025',
      status: null,
      line: 'Benchmarked four architectures, then containerized the winner behind CI/CD.',
      figure: ['2.19 %', 'best test MAE'],
      tech: 'TensorFlow · Docker · Cloud Run · GitHub Actions',
      link: 'https://github.com/hungkaihsin/DeepTSMC',
      chart: {
        caption: 'Deployment time, before and after CI/CD',
        scale: 100,
        series: [
          ['Manual', 100, 'baseline'],
          ['Automated', 15, '−85 %', true],
        ],
      },
    },
  ];

  const index = [
    {
      title: 'NYC Traffic Collision Analysis',
      date: 'Mar 2025',
      context: '2.15 M records, 450 MB compressed to under 200 KB',
      tech: 'Pandas · React · Plotly.js · Firebase · Power BI',
      link: 'https://github.com/hungkaihsin/NYC_Traffic_Collision_Analysis_Dashboard',
    },
    {
      title: 'JobFit AI',
      date: 'Jul 2025',
      context: 'LLM resume analysis with a streaming backend',
      tech: 'Gemini API · Flask · pdfminer.six · Cloud Run',
      link: 'https://github.com/hungkaihsin/JobFit-AI',
    },
    {
      title: 'Graphene Oxide Bilayer Actuator',
      date: 'May 2023',
      context: 'Undergraduate materials research',
      tech: 'Polypyrrole · Graphene Oxide',
      link: '/GraphineDioxide.pdf',
    },
  ];

  return (
    <section id="work" className="section projects-section">
      <h2 className="section-title">Selected work</h2>

      <div className="spread-list">
        {featured.map((project) => (
          <article
            className="spread"
            key={project.title}
          >
            <div className="spread-claim">
              <span className="spread-date mono">{project.date}</span>
              <h3 className="spread-title">{project.title}</h3>
              {project.status && (
                <p className="record-status">
                  <span className="status-mark" aria-hidden="true" />
                  {project.status}
                </p>
              )}
              <p className="spread-line">{project.line}</p>
              <span className="spread-stack mono">{project.tech}</span>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="record-link mono"
              >
                View source ↗
              </a>
            </div>

            <div className="spread-evidence">
              <div className="headline-figure">
                <span className="figure-value mono">{project.figure[0]}</span>
                <span className="figure-caption">{project.figure[1]}</span>
              </div>
              <Chart {...project.chart} />
            </div>
          </article>
        ))}
      </div>

      <h2 className="section-title additional-title">Also built</h2>
      <div className="index-list">
        {index.map((project) => (
          <article
            className="index-row"
            key={project.title}
          >
            <span className="index-date mono">{project.date}</span>
            <h3 className="index-title">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h3>
            <p className="index-context">{project.context}</p>
            <span className="index-stack mono">{project.tech}</span>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
