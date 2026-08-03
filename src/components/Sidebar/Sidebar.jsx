import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <header className="sidebar">
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="sidebar-name">Daniel Hung</h1>
        </motion.div>

        <motion.h2
          className="sidebar-role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          Data Scientist &amp; Data Engineer
        </motion.h2>

        <motion.p
          className="sidebar-bio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          I clean messy data, build and evaluate models, and ship them into
          systems people actually use.
        </motion.p>

        <motion.div 
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          <a href="https://github.com/hungkaihsin" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/kai-hsin-hung/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
          <a href="mailto:danielhung0802@gmail.com" aria-label="Email"><FaEnvelope size={24} /></a>
        </motion.div>
        
        <motion.a 
          href="/Kai-Hsin_Hung_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="resume-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
                  >
          View Full Resume
        </motion.a>

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
