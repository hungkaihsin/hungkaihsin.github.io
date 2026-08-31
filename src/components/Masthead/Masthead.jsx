import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Masthead.css';

/* The page is a technical document, so it opens like one: a running head that
   stays put, then a full-width title block. This replaces the sticky-rail
   portfolio archetype, which was the most template-shaped thing on the site.

   RunHead renders outside the page container so its rule spans the viewport;
   Masthead renders inside it, aligned to the content column. */

const sections = [
  ['work', 'Work'],
  ['background', 'Background'],
  ['skills', 'Skills'],
];

export const RunHead = () => (
  <div className="runhead">
    <div className="runhead-inner">
      <span className="runhead-name mono">Daniel Hung</span>
      <nav className="runhead-nav">
        {sections.map(([id, label]) => (
          <Link
            key={id}
            to={id}
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            activeClass="active"
            className="runhead-link"
          >
            {label}
          </Link>
        ))}
        <a
          href="/Kai-Hsin_Hung_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="runhead-link is-resume"
        >
          Resume ↗
        </a>
      </nav>
    </div>
  </div>
);

const Masthead = () => (
  <motion.header
    className="masthead"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="masthead-title">
      <h1 className="masthead-name">Daniel Hung</h1>
    </div>

    <h2 className="masthead-role">Data Scientist &amp; Data Engineer</h2>

    <p className="masthead-summary">
      M.S. Data Science with an engineering background. I build production data
      systems: relational schemas, ETL pipelines, LLM applications, and
      time-series forecasting.
    </p>

    <div className="masthead-meta">
      <span className="mono">United States or Taiwan</span>
      <div className="masthead-links">
        <a
          href="https://github.com/hungkaihsin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={19} />
        </a>
        <a
          href="https://www.linkedin.com/in/kai-hsin-hung/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={19} />
        </a>
        <a href="mailto:danielhung0802@gmail.com" aria-label="Email">
          <FaEnvelope size={19} />
        </a>
      </div>
    </div>
  </motion.header>
);

export default Masthead;
