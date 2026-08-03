import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Toxicity Prediction & Data Curation',
      context: 'M.S. Capstone · five-person team',
      date: 'May 2026',
      status: null,
      featured: true,
      metrics: [
        ['Merged dataset', '30,106 records'],
        ['Prediction targets', '31 endpoints'],
        ['Sources curated', '10'],
        ['Models benchmarked', '7'],
      ],
      tech: 'Python, Scikit-Learn, Gemini API, Pandas, REST APIs',
      bullets: [
        'Contributed the Ridge-regression baseline to a five-person, seven-model benchmark predicting 31 animal-toxicology endpoints (clinical chemistry, organ weight, hematology) from molecular SMILES, dose, and duration, across a merged 30,106-record TG-GATEs and DrugMatrix dataset.',
        'Architected the DrugMatrix harmonization pipeline, integrating differential expression, clinical chemistry, and histopathology into a unified schema with PubChem API enrichment (SMILES, CASRN), and curated the ATSDR and CEBS sources within a ten-source team curation effort.',
        'Engineered data-quality guardrails (schema-drift, missing-value, and label-consistency checks) producing versioned JSON validation reports for reproducible model training.',
      ],
      link: 'https://github.com/hungkaihsin/toxicity-prediction',
    },
    {
      title: 'GoPark — AI Parking Recommendation System',
      context: 'Computer vision, NLP, geospatial backend',
      date: 'Dec 2025',
      status: 'Accepted · IntelliSys 2026 · Springer LNNS',
      featured: true,
      metrics: [
        ['mAP@0.5', '97.2 %'],
        ['Inference latency', '5.4 ms'],
        ['NLP intent accuracy', '96.0 %'],
        ['End-to-end response', '< 50 ms'],
      ],
      tech: 'Python, YOLOv8, PyTorch, FastAPI, PostgreSQL/PostGIS, spaCy, Docker',
      bullets: [
        'Trained and deployed a YOLOv8 detector reaching 97.2% mAP@0.5 at 5.4 ms inference, paired with a spaCy query parser at 96% intent accuracy.',
        'Designed a PostgreSQL/PostGIS schema with SQLAlchemy ORM and Alembic migrations, modeling spatial stall geometries, occupancy states, and event logs under referential-integrity constraints.',
        'Built a containerized FastAPI backend with Docker Compose, orchestrating API, database, and model services into a reproducible multi-container deployment.',
      ],
      link: 'https://github.com/hungkaihsin/Parking_lot_detection',
    },
    {
      title: 'DeepTSMC — Time-Series Forecasting Pipeline',
      context: 'Financial time series, automated retraining and deploy',
      date: 'Jun 2025',
      status: null,
      featured: true,
      metrics: [
        ['Best test MAE', '2.19 %'],
        ['Architectures benchmarked', '4'],
        ['Deployment time', '−85 %'],
      ],
      tech: 'Python, TensorFlow, Pandas, Scikit-Learn, Flask, React, Docker, CI/CD',
      bullets: [
        'Developed an automated preprocessing pipeline (imputation, scaling, sequence windowing) feeding normalized time-series inputs to four benchmarked architectures — LSTM, GRU, Conv1D, and a feed-forward network.',
        'Built model-serving infrastructure on Docker, Google Cloud Run, and GitHub Actions CI/CD, cutting deployment time by 85%.',
        'Designed a containerized frontend-backend architecture with a Flask REST API and React dashboard, orchestrated via Docker Compose with automated health checks.',
      ],
      link: 'https://github.com/hungkaihsin/DeepTSMC',
    },
    {
      title: 'JobFit AI — Resume Analysis System',
      context: 'LLM application, streaming backend',
      date: 'Jul 2025',
      status: null,
      featured: false,
      metrics: [
        ['Response latency', '−40 %'],
        ['User retention', '+30 %'],
      ],
      tech: 'Python, Gemini API, Flask, Firebase, Cloud Run, Docker',
      bullets: [
        'Built an extraction pipeline with PyMuPDF and the Adzuna API to parse unstructured resume PDFs against live job postings.',
        'Architected a real-time streaming layer on Cloud Run and Flask Server-Sent Events, reducing perceived response latency by 40%.',
        'Integrated the Gemini API for resume analysis, improving user retention by 30%.',
      ],
      link: 'https://github.com/hungkaihsin/JobFit-AI',
    },
    {
      title: 'NYC Traffic Collision Analysis',
      context: 'Large-scale ETL and dashboard delivery',
      date: 'Mar 2025',
      status: null,
      featured: false,
      metrics: [
        ['Records processed', '2.15 M'],
        ['Payload compression', '450 MB → < 200 KB'],
        ['Dashboard load', '< 100 ms'],
      ],
      tech: 'Python, Pandas, React, Plotly.js, Firebase, Power BI',
      bullets: [
        'Processed 2.15 M NYC OpenData collision records into five optimized JSON payloads, compressing roughly 450 MB of source CSV to under 200 KB.',
        'Built an interactive React and Plotly.js dashboard surfacing high-risk streets and peak collision hours, with a complementary Power BI view.',
      ],
      link: 'https://github.com/hungkaihsin/NYC_Traffic_Collision_Analysis_Dashboard',
    },
    {
      title: 'Graphene Oxide Bilayer Actuator',
      context: 'Undergraduate materials research',
      date: 'May 2023',
      status: null,
      featured: false,
      metrics: [],
      tech: 'Materials Science, Polypyrrole, Graphene Oxide',
      bullets: [
        'Developed bilayer actuators from graphene oxide, integrating polypyrrole for improved mechanical performance.',
        'Characterized actuator response to light, humidity, and electrical stimuli for smart-material applications.',
      ],
      link: '/GraphineDioxide.pdf',
    },
  ];

  const renderRecord = (project, index) => (
    <motion.article
      className="record"
      key={project.title}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
    >
      <header className="record-head">
        <h3 className="record-title">{project.title}</h3>
        <span className="record-date mono">{project.date}</span>
      </header>

      <p className="record-context">{project.context}</p>

      {project.status && (
        <p className="record-status">
          <span className="status-mark" aria-hidden="true" />
          {project.status}
        </p>
      )}

      {project.metrics.length > 0 && (
        <dl className="metrics">
          {project.metrics.map(([label, value]) => (
            <div className="metric-row" key={label}>
              <dt>{label}</dt>
              <dd className="mono">{value}</dd>
            </div>
          ))}
        </dl>
      )}

      <ul className="dash-bullets record-bullets">
        {project.bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>

      <div className="record-foot">
        <span className="record-stack mono">{project.tech}</span>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="record-link mono"
          >
            View source ↗
          </a>
        )}
      </div>
    </motion.article>
  );

  const selected = projects.filter((p) => p.featured);
  const additional = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-title">Selected work</h2>
      <div className="record-list">{selected.map(renderRecord)}</div>

      <h2 className="section-title additional-title">Additional work</h2>
      <div className="record-list">{additional.map(renderRecord)}</div>
    </section>
  );
};

export default Projects;
