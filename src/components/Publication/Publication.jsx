import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen } from 'react-icons/fa';
import './Publication.css';

const Publication = () => {
  return (
    <div className="publication-container">
      <h2 className="section-title">Publication</h2>
      <motion.div
        className="publication-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.01 }}
      >
        <div className="publication-icon-wrap">
          <FaBookOpen size={20} />
        </div>
        <div className="publication-content">
          <span className="publication-badge">Accepted — IntelliSys 2026</span>
          <h3 className="publication-title">
            GoPark: An AI-Powered Parking Recommendation System
          </h3>
          <p className="publication-authors">
            K. Hung, G. Phung, F. Lorenzino
          </p>
          <p className="publication-venue">
            Intelligent Systems Conference (IntelliSys) 2026, Springer Lecture Notes in Networks and Systems
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Publication;
