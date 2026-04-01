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

        <nav className="nav-links">
          <Link to="about" smooth={true} duration={500} offset={-50} spy={true} activeClass="active" className="nav-link">About</Link>
          <Link to="background" smooth={true} duration={500} offset={-50} spy={true} activeClass="active" className="nav-link">Background</Link>
          <Link to="skills" smooth={true} duration={500} offset={-50} spy={true} activeClass="active" className="nav-link">Skills</Link>
          <Link to="projects" smooth={true} duration={500} offset={-50} spy={true} activeClass="active" className="nav-link">Projects</Link>
        </nav>
      </div>

      <div className="social-links">
        <a href="https://github.com/hungkaihsin" target="_blank" rel="noopener noreferrer"><FaGithub size={28} /></a>
        <a href="https://www.linkedin.com/in/kai-hsin-hung/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={28} /></a>
        <a href="mailto:k_hung2@u.pacific.edu"><FaEnvelope size={28} /></a>
      </div>
    </header>
  );
};

export default Sidebar;
