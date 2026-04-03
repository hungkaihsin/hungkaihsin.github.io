import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <header className="sidebar">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="sidebar-name">Daniel Hung</h1>
        </motion.div>

        <motion.h2
          className="sidebar-role"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Typewriter
            words={[
              'Data Scientist',
              'ML Engineer',
              'Full-Stack Developer',
              'Cloud Architect',
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.h2>

        <motion.div
          className="status-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <span className="status-dot" />
          Open to Work — Summer 2026
        </motion.div>

        <motion.p
          className="sidebar-bio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Turning messy data into scalable, production-ready ML and engineering infrastructure.
        </motion.p>

        <motion.div 
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="https://github.com/hungkaihsin" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/kai-hsin-hung/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
          <a href="mailto:k_hung2@u.pacific.edu" aria-label="Email"><FaEnvelope size={24} /></a>
        </motion.div>
        
        <motion.a 
          href="/Kai-Hsin_Hung_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="resume-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
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
