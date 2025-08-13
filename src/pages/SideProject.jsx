import React, { useEffect, useRef } from 'react';
import './IntroPage.css';
import '../styles/shared.css'
import './SideProject.css';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const SideProject = () => {
  const projects = [
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
      date: 'July. 2025',
      bullets: [
        'Implemented real-time resume parsing and keyword extraction pipelines (Pandas, Flask) to deliver instant skill-gap feedback for users',
        'Created an AI-powered resume analysis tool integrating Adzuna and SerpApi for real-time job trends and Coursera recommendations, increasing user engagement by 25%'
      ],
      link: 'https://github.com/hungkaihsin/Resume-Analyzer'
    },
    {
      title: 'Time Series Forecasting of TSMC Stock Prices Using RNNs and ConvNets',
      date: 'Jun. 2025',
      bullets: [
        'Built a stock forecasting app with Flask and React to predict TSMC’s next-day closing price using LSTM, GRU, Conv1D, and FFN models on Yahoo Finance data.',
        'Tuned and compared model performance, identifying GRU and FFN as top performers with test MAE around $4.2 (2.2%), demonstrating strong generalization.',
        'Deployed an interactive web app by integrating REST APIs with a React frontend, enabling users to trigger predictions and visualize model outputs in real time.'
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

  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="intro-wrapper">
      <div className="nav-buttons fadeUp delay-1">
        <Link className="nav-button" to="/">Home</Link>
        <button className="nav-button active">Side Projects</button>
        <a className="nav-button" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        
      </div>

      <h1 className="intro-title fadeUp delay-2">My Side Projects</h1>

      <div className="sideproject-container fadeUp delay-3">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            ref={el => (cardRefs.current[index] = el)}
            style={{ '--delay': `${index * 0.2}s` }}
          >
            <h3>{project.title}</h3>
            {project.date && <p className="project-date">{project.date}</p>}
            <ul>
              {project.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            <div className="project-link-container">
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>

      <footer className="intro-footer fadeUp delay-5">
        <div className="contact-icons">
          <a
            className="icon-button"
            href="https://github.com/hungkaihsin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            className="icon-button"
            href="https://www.linkedin.com/in/kai-hsin-hung/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a className="icon-button" href="mailto:k_hung2@u.pacific.edu">
            <FaEnvelope size={30} />
          </a>
        </div>
        <p className="copyright">© 2025 Daniel Hung. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SideProject;
