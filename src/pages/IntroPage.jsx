import React from 'react';
import './IntroPage.css';
import { useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="intro-wrapper">
      <div className="nav-buttons fadeUp delay-1">
        <button className="nav-button" onClick={() => navigate('/')}>Home</button>
        <button className="nav-button" onClick={() => navigate('/sideproject')}>Side Projects</button>
      </div>

      <h1 className="intro-title fadeUp delay-2">Hi, I’m Daniel Hung</h1>
      
      <div className="typing-text fadeUp delay-2">
        <h2>
          <Typewriter
            words={['Data Scientist', 'Software Engineer']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
      </div>

      <div className="photo-deck fadeUp delay-3">
          <img src="/images/photo1.jpeg" alt="Photo 1" className="photo-card photo1" />
          <img src="/images/photo2.jpeg" alt="Photo 2" className="photo-card photo2" />
          <img src="/images/photo3.jpeg" alt="Photo 3" className="photo-card photo3" />
      </div>

      <p className="intro-description fadeUp delay-4">
        I'm a data science graduate student passionate about turning data into real-world impact. I have experience in machine learning (LSTM, ConvNets), backend API development, and SQL databases. Bilingual in Mandarin and English, I'm curious, collaborative, and driven to build smart, effective solutions.
      </p>

      <div className="timeline fadeUp delay-4">
        <div className="timeline-line" />
        <div className="timeline-item">
          <div className="timeline-dot1" />
          <div className="timeline-content">
            <p>
              <strong>Ming Chi University of Technology</strong><br />
              Material Science Engineering (2019 - 2023)<br />
              Location: New Taipei City, Taiwan
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot2" />
          <div className="timeline-content">
            <p>
              <strong>University of the Pacific</strong><br />
              Data Science (2024 - present)<br />
              Location: Stockton, California
            </p>
          </div>
        </div>
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
          <a
            className="icon-button"
            href="mailto:k_hung2@u.pacific.edu"
          >
            <FaEnvelope size={30} />
          </a>
        </div>

        <p className="copyright">© 2025 Daniel Hung. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default IntroPage;
