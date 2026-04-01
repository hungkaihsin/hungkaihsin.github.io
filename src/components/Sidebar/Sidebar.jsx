import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <header className="sidebar">
      <div>
        <h1>Daniel Hung</h1>
        <h2>M.S. Data Science Student</h2>
        <p>Turning messy data into scalable, production-ready ML and engineering infrastructure.</p>

        <div className="social-links">
          <a href="https://github.com/hungkaihsin" target="_blank" rel="noopener noreferrer"><FaGithub size={28} /></a>
          <a href="https://www.linkedin.com/in/kai-hsin-hung/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={28} /></a>
          <a href="mailto:k_hung2@u.pacific.edu"><FaEnvelope size={28} /></a>
        </div>
        
        <a href="/Kai-Hsin_Hung_Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
          View Full Resume
        </a>

        <nav className="nav-links">
          <Link to="about" smooth={true} duration={500} offset={-50} spy={true} activeClass="active" className="nav-link">About</Link>
          <Link to="background" smooth={true} duration={500} offset={-50} spy={true} activeClass="active" className="nav-link">Background</Link>
          <Link to="skills" smooth={true} duration={500} offset={-50} spy={true} activeClass="active" className="nav-link">Skills</Link>
          <Link to="projects" smooth={true} duration={500} offset={-50} spy={true} activeClass="active" className="nav-link">Projects</Link>
        </nav>
      </div>
    </header>
  );
};

export default Sidebar;
