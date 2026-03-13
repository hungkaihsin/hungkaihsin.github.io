import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'GoPark: AI-Powered Parking Recommendation System',
      date: 'Dec. 2025',
      tech: 'Python, YOLOv8, FastAPI, PostgreSQL, Shapely, Docker',
      bullets: [
        'Tracked continuous vehicle events in real-time by engineering a data pipeline using containerized ML models and FastAPI microservices.',
        'Mapped 2D image detections to physical parking spaces by building a geospatial database system with PostgreSQL, SQLAlchemy, and Shapely.',
        'Publication: Accepted paper at IntelliSys 2026 (Springer); indexed in Scopus and Web of Science.'
      ],
      link: 'https://github.com/hungkaihsin/Parking_lot_detection'
    },
    {
      title: 'JobFit AI: Automated Resume & Skills Analysis Pipeline',
      date: 'Jul. 2025',
      tech: 'Python, Flask, Google Gemini API, PyMuPDF, Docker',
      bullets: [
        'Parsed unstructured resume PDFs and scraped live job postings by building an automated data extraction pipeline with Python, PyMuPDF, and the Adzuna API.',
        'Delivered real-time analysis feedback to users, reducing perceived loading latency by 40%, by implementing Server-Sent Events (SSE) in a Dockerized Flask microservice.'
      ],
      link: 'https://github.com/hungkaihsin/JobFit-AI'
    },
    {
      title: 'DeepTSMC: Automated Time-Series Forecasting Pipeline',
      date: 'Jun. 2025',
      tech: 'Python, Pandas, Scikit-Learn, Flask, Docker, CI/CD',
      bullets: [
        'Supplied normalized time-series data inputs by developing an automated pipeline using Pandas and Scikit-Learn for imputation, scaling, and sequence windowing.',
        'Streamlined application deployment, reducing deployment time by 85%, by building a model-serving infrastructure using Docker, Google Cloud Run, and GitHub Actions CI/CD.'
      ],
      link: 'https://github.com/hungkaihsin/DeepTSMC'
    },
    {
      title: 'NYC Traffic Collision Analysis Dashboard',
      date: 'July. 2025',
      bullets: [
        'Designed and launched an interactive traffic dashboard (React, Plotly, Flask) analyzing 2.1M+ collision records, pinpointing high-risk streets and peak crash hours, enabling data-driven public safety planning',
        'Developed a Flask API with Pandas to preprocess and serve real-time analytics, reducing frontend load time by 20%'
      ],
      link: 'https://github.com/hungkaihsin/NYC_Traffic_Collision_Analysis_Dashboard?tab=readme-ov-file'
    },
    {
      title: 'RNN and ConvNets model performance comparison',
      date: 'Apr. 2025',
      bullets: [
        'Explored four models (Feedforward NN, LSTM, GRU, and 1D ConvNet) to predict time series values by using historical data.',
        'Evaluated models based on unnormalized MAE, concluding that LSTM performed best with the lowest prediction error among all.'
      ],
      link: 'https://github.com/hungkaihsin/RNN-ConvNets'
    },
    {
      title: 'Perceptron-and-Shallow-Neural-Network',
      date: 'Apr. 2025',
      bullets: [
        'Built a wine quality prediction model using Lasso regression to select impactful features and achieved an out-of-sample MAE of 0.7654. Developed a framework for facial recognition using OpenCV.',
        'Developed a custom 3-layer neural network using stochastic gradient descent and back propagation, reaching a minimum in-sample error with hand-tuned weights and plotted predicted vs. actual values.'
      ],
      link: 'https://github.com/hungkaihsin/Perceptron-and-Shallow-Neural-Network'
    },
    {
      title: 'TDSP Data Science Project',
      date: 'Jan. 2025',
      bullets: [
        'Interpret the dataset from NYC OpenData on vehicle collisions and analyze several factors leading to crashes using the pandas, matplotlib, and seaborn libraries in Python.',
        'Utilize data visualization skills to create charts, compare relationships between different categories, and recommend solutions to reduce the number of crashes.'
      ],
      link: 'https://github.com/hungkaihsin/TDSP_Projcet_analysis'
    },
    {
      title: 'Machine Learning with PCA',
      date: 'Nov. 2024',
      bullets: [
        'Used PCA in Python to compress several large-sized images.',
        'Combined images to generate a new one with reduced noise.'
      ],
      link: 'https://github.com/hungkaihsin/Machine-learning-image-compression-with-PCA'
    },
    {
      title: 'Graphene Oxide Actuator',
      date: 'May. 2023',
      bullets: [
        'Explored the development of bilayer actuators with graphene oxide.',
        'Integrated polypyrrole for enhanced mechanical performance.',
        'Demonstrated responses to light, humidity, and electrical stimuli.',
        'Investigated applications in smart materials and robotics.'
      ],
      link: '/GraphineDioxide.pdf'
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-date">{project.date}</p>
              <p className="project-tech">
                {project.tech ? (
                  <><strong>Tech Stack:</strong> {project.tech}</>
                ) : (
                  "\u00A0" 
                )}
              </p>
              <ul className="project-bullets">
                {project.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;