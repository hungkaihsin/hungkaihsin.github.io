import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'GoPark: AI-Powered Parking Recommendation System',
      date: 'Aug. 2025 - Dec. 2025',
      tech: 'Python, FastAPI, PostgreSQL (PostGIS), Docker, YOLOv8, PyTorch',
      bullets: [
        'Engineered a real-time monitoring system integrating FastAPI with PostGIS to manage complex spatial logic and track parking stall availability.',
        'Deployed a fine-tuned YOLOv8-Nano model for vehicle detection, achieving 97.2% mAP@0.5 with ultra-low inference latency (5.4 ms) on edge hardware.',
        'Optimized performance by 500x (<2ms latency) by replacing an LLM-based parser with a custom Regex NLP solution, maintaining 96% accuracy while drastically reducing compute costs.'
      ],
      link: 'https://github.com/hungkaihsin/Parking_lot_detection'
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
      title: 'AI-Powered Resume Analyzer',
      date: 'Jul. 2025',
      tech: 'Python, Flask, React, Pandas, Gemini API',
      bullets: [
        'Increased user engagement by 25% by developing a feedback system that aggregates job data from Adzuna and SerpApi.',
        'Integrated Generative AI (Gemini API) to provide personalized resume critiques, resulting in a 30% increase in average user session duration.'
      ],
      link: 'https://github.com/hungkaihsin/Resume-Analyzer'
    },
    {
      title: 'Time Series Forecasting of TSMC Stock Prices',
      date: 'Jun. 2025',
      tech: 'Python, Flask, React, TensorFlow, Docker, GCP, CI/CD',
      bullets: [
        'Architected a scalable full-stack platform, deploying a React frontend to Firebase Hosting and a Flask backend to Google Cloud Run.',
        'Ensured deployment reliability by containerizing the application with Docker and implementing a CI/CD pipeline via GitHub Actions for automated testing and building.',
        'Developed LSTM and GRU models for stock prediction and built a custom backtesting engine to simulate trading strategies and validate model performance.'
      ],
      link: 'https://github.com/hungkaihsin/Time-Series-Forecasting-of-TSMC-Stock-Prices-Using-RNNs-and-ConvNets'
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
              {project.tech && (
                <p className="project-tech">
                  <strong>Tech Stack:</strong> {project.tech}
                </p>
              )}
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
