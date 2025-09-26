import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './About.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="about-content">
        <img
          src="/images/photo2.jpeg"
          alt="Daniel Hung"
          className="about-photo"
        />
        <h1 className="about-title">Hi, I’m Daniel Hung</h1>
        <div className="about-subtitle">
          <Typewriter
            words={['Data Scientist', 'Software Engineer']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>
        <p className="about-description">
          A passionate data science graduate student with a knack for turning data into impactful real-world solutions. Experienced in machine learning, backend development, and bilingual in Mandarin and English.
        </p>
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="download-cv-button">
          Download CV
        </a>
        <div className="contact-icons">
          <a className="icon-button" href="https://github.com/hungkaihsin" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a className="icon-button" href="https://www.linkedin.com/in/kai-hsin-hung/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a className="icon-button" href="mailto:k_hung2@u.pacific.edu">
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
