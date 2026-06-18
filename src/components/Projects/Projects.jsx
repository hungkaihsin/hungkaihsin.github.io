import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Toxicity Prediction Data Pipeline (Capstone)',
      date: 'May 2026',
      tech: 'Python, Scikit-Learn, Gemini API, Pandas, REST APIs, JSON/CSV',
      category: 'Data Engineering',
      featured: true,
      bullets: [
        'Harmonized TG-GATEs and DrugMatrix toxicogenomics data (~22 GB) and trained multitask machine-learning models to predict animal-study outcomes (body weight, organ weight, clinical chemistry) from molecular inputs — SMILES, dose, and duration.',
        'Built an automated ETL pipeline ingesting, cleaning, and standardizing 10 heterogeneous healthcare datasets (DrugBank, LIVERTOX, SIDER, ClinicalTrials.gov) into a unified analytics-ready schema, with PubChem/PubMed API integration to resolve cross-source identifier inconsistencies.',
        'Engineered feature pipelines and data-quality guardrails (schema-drift, missing-value, and label-consistency checks) producing versioned JSON validation reports for reproducible model training.',
      ],
      link: 'https://github.com/hungkaihsin/toxicity-prediction',
    },
    {
      title: 'GoPark: AI-Powered Parking Recommendation System',
      date: 'Dec. 2025',
      tech: 'Python, YOLOv8, PyTorch, FastAPI, PostgreSQL/PostGIS, spaCy, Docker',
      category: 'ML / AI',
      featured: true,
      bullets: [
        'Trained and deployed a YOLOv8 computer-vision detector reaching 97.2% mAP@0.5 at 5.4 ms inference, paired with a spaCy NLP query parser (96% intent accuracy) — peer-reviewed and accepted at IntelliSys 2026 (Springer LNNS).',
        'Designed a PostgreSQL/PostGIS schema with SQLAlchemy ORM and Alembic migrations, modeling spatial stall geometries, occupancy states, and event logs with referential-integrity constraints.',
        'Built a containerized FastAPI backend with Docker Compose, orchestrating API, database, and model services into a reproducible multi-container deployment with sub-50 ms end-to-end latency.',
      ],
      link: 'https://github.com/hungkaihsin/Parking_lot_detection',
    },
    {
      title: 'DeepTSMC: Automated Time-Series Forecasting Pipeline',
      date: 'Jun. 2025',
      tech: 'Python, TensorFlow, Pandas, Scikit-Learn, Flask, React, Docker, CI/CD',
      category: 'Full-Stack',
      featured: true,
      bullets: [
        'Developed an automated data pipeline using Pandas and Scikit-Learn for imputation, scaling, and sequence windowing to supply normalized time-series inputs to deep learning models.',
        'Built a model-serving infrastructure using Docker, Google Cloud Run, and GitHub Actions CI/CD, reducing deployment time by 85% and enabling continuous delivery.',
        'Designed a containerized frontend-backend architecture with Flask REST API and React dashboard, orchestrated via Docker Compose with automated health checks and environment-based configuration.',
      ],
      link: 'https://github.com/hungkaihsin/DeepTSMC',
    },
    {
      title: 'JobFit AI: Intelligent Resume Analysis System',
      date: 'Jul. 2025',
      tech: 'Python, Gemini LLM, Flask, Firebase, Cloud Run, Docker',
      category: 'ML / AI',
      featured: false,
      bullets: [
        'Built an automated data extraction pipeline with Python, PyMuPDF, and the Adzuna API to parse unstructured resume PDFs and scrape live job postings.',
        'Architected a full-stack real-time streaming solution using Google Cloud Run, Firebase, and Flask Server-Sent Events (SSE) to reduce application response latency by 40%.',
        'Integrated the Gemini API for intelligent resume analysis, boosting user retention by 30%.',
      ],
      link: 'https://github.com/hungkaihsin/JobFit-AI',
    },
    {
      title: 'NYC Traffic Collision Analysis Dashboard',
      date: 'Mar. 2025',
      tech: 'React, Plotly, Flask, Pandas, Firebase',
      category: 'Data Viz',
      featured: false,
      bullets: [
        'Designed and launched an interactive traffic dashboard analyzing 2.1M+ collision records, pinpointing high-risk streets and peak crash hours for data-driven public safety planning.',
        'Developed a Flask API with Pandas to preprocess and serve real-time analytics, reducing frontend load time by 20%.',
      ],
      link: 'https://github.com/hungkaihsin/NYC_Traffic_Collision_Analysis_Dashboard',
    },
    {
      title: 'Graphene Oxide Actuator',
      date: 'May. 2023',
      tech: 'Materials Science, Polypyrrole, Graphene Oxide',
      category: 'Research',
      featured: false,
      bullets: [
        'Explored the development of bilayer actuators with graphene oxide.',
        'Integrated polypyrrole for enhanced mechanical performance.',
        'Demonstrated responses to light, humidity, and electrical stimuli.',
        'Investigated applications in smart materials and robotics.',
      ],
      link: '/GraphineDioxide.pdf',
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const categoryColors = {
    'Data Engineering': { bg: 'rgba(15, 118, 110, 0.10)', color: '#0f766e' },
    'ML / AI': { bg: 'rgba(109, 40, 217, 0.10)', color: '#6d28d9' },
    'Full-Stack': { bg: 'rgba(190, 18, 60, 0.10)', color: '#be123c' },
    'Data Viz': { bg: 'rgba(180, 83, 9, 0.10)', color: '#b45309' },
    'Research': { bg: 'rgba(29, 78, 216, 0.10)', color: '#1d4ed8' },
  };

  const renderProjectCard = (project, index, isFeatured = false) => (
    <motion.div
      className={`project-card ${isFeatured ? 'featured-card' : ''} ${project.link ? 'clickable-card' : ''}`}
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index % 3 * 0.1 }}
      onClick={() => project.link && window.open(project.link, '_blank')}
    >
      <div className="project-card-header">
        <span
          className="category-badge"
          style={{
            backgroundColor: categoryColors[project.category]?.bg,
            color: categoryColors[project.category]?.color,
          }}
        >
          {project.category}
        </span>
        <p className="project-date">{project.date}</p>
      </div>

      <h3 className="project-title">{project.title}</h3>

      {project.tech && (
        <div className="project-tech-chips">
          {project.tech.split(',').map((techItem, i) => (
            <span key={i} className="tech-chip">{techItem.trim()}</span>
          ))}
        </div>
      )}

      <ul className="dash-bullets project-bullets">
        {project.bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>

      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link" onClick={(e) => e.stopPropagation()}>
          View Project <span className="arrow">↗</span>
        </a>
      )}
    </motion.div>
  );

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="featured-grid">
          {featuredProjects.map((project, index) => renderProjectCard(project, index, true))}
        </div>

        <h2 className="section-title other-projects-title">Other Projects</h2>
        <div className="projects-grid">
          {otherProjects.map((project, index) => renderProjectCard(project, index))}
        </div>
      </div>
    </section>
  );
};

export default Projects;