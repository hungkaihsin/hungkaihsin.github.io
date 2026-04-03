import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Toxicity Prediction Data Pipeline (Capstone)',
      date: 'Feb. 2026 – Apr. 2026',
      tech: 'Python, Gemini API, REST APIs, Pandas, JSON/CSV',
      category: 'Data Engineering',
      featured: true,
      bullets: [
        'Architected an automated ETL pipeline to ingest, clean, and standardize multiple healthcare datasets (LIVERTOX, SIDER) into a unified JSON/CSV schema, producing model-ready outputs for downstream ML consumers.',
        'Engineered API integration with PubChem and PubMed to programmatically extract compound synonyms and peer-reviewed reference metadata, resolving cross-source data inconsistencies.',
        'Developed a scalable text-processing workflow utilizing the Gemini API to parse unstructured medical abstracts, outputting structured JSON validation records with automated quality checks.',
      ],
      link: 'https://github.com/Huyhoclaptrinh/toxicity-prediction',
    },
    {
      title: 'GoPark: AI-Powered Parking Recommendation System',
      date: 'Dec. 2025',
      tech: 'Python, FastAPI, PostgreSQL, PostGIS, SQLAlchemy, Alembic, Docker, SwiftUI',
      category: 'ML / AI',
      featured: true,
      bullets: [
        'Designed and implemented a PostgreSQL/PostGIS database schema with SQLAlchemy ORM and Alembic migrations, modeling spatial stall geometries, occupancy states, and vehicle event logs with referential integrity constraints.',
        'Built a containerized FastAPI backend with Docker Compose, orchestrating API, database, and ML model services into a reproducible multi-container deployment.',
        'Engineered an end-to-end pipeline from raw image ingestion through object detection to recommendation ranking, achieving sub-50 ms average latency on edge hardware.',
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
      date: 'Jul. 2025',
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
      title: 'RNN and ConvNets Model Performance Comparison',
      date: 'Apr. 2025',
      tech: 'Python, TensorFlow, LSTM, GRU, 1D ConvNet',
      category: 'ML / AI',
      featured: false,
      bullets: [
        'Explored four models (Feedforward NN, LSTM, GRU, and 1D ConvNet) to predict time series values by using historical data.',
        'Evaluated models based on unnormalized MAE, concluding that LSTM performed best with the lowest prediction error among all.',
      ],
      link: 'https://github.com/hungkaihsin/RNN-ConvNets',
    },
    {
      title: 'Perceptron and Shallow Neural Network',
      date: 'Apr. 2025',
      tech: 'Python, NumPy, OpenCV, SGD',
      category: 'ML / AI',
      featured: false,
      bullets: [
        'Built a wine quality prediction model using Lasso regression to select impactful features and achieved an out-of-sample MAE of 0.7654.',
        'Developed a custom 3-layer neural network using stochastic gradient descent and back propagation, reaching a minimum in-sample error with hand-tuned weights.',
      ],
      link: 'https://github.com/hungkaihsin/Perceptron-and-Shallow-Neural-Network',
    },
    {
      title: 'TDSP Data Science Project',
      date: 'Jan. 2025',
      tech: 'Python, Pandas, Matplotlib, Seaborn',
      category: 'Data Viz',
      featured: false,
      bullets: [
        'Interpreted the dataset from NYC OpenData on vehicle collisions and analyzed several factors leading to crashes using Pandas, Matplotlib, and Seaborn.',
        'Utilized data visualization skills to create charts, compare relationships between different categories, and recommend solutions to reduce crashes.',
      ],
      link: 'https://github.com/hungkaihsin/TDSP_Projcet_analysis',
    },
    {
      title: 'Machine Learning with PCA',
      date: 'Nov. 2024',
      tech: 'Python, NumPy, PCA',
      category: 'ML / AI',
      featured: false,
      bullets: [
        'Used PCA in Python to compress several large-sized images.',
        'Combined images to generate a new one with reduced noise.',
      ],
      link: 'https://github.com/hungkaihsin/Machine-learning-image-compression-with-PCA',
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
    'Data Engineering': { bg: 'rgba(94, 234, 212, 0.1)', color: '#5eead4' },
    'ML / AI': { bg: 'rgba(167, 139, 250, 0.1)', color: '#a78bfa' },
    'Full-Stack': { bg: 'rgba(251, 113, 133, 0.1)', color: '#fb7185' },
    'Data Viz': { bg: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' },
    'Research': { bg: 'rgba(96, 165, 250, 0.1)', color: '#60a5fa' },
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