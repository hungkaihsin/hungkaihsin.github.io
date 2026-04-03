import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../../components/Sidebar/Sidebar';
import Background from '../../components/Background/Background';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import StatsBar from '../../components/StatsBar/StatsBar';
import Footer from '../../components/Footer/Footer';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="App-container">
      <Sidebar />
      <main className="main-content">
        <section id="about" className="section text-section">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I am an M.S. Data Science student at the University of the Pacific (graduating May 2026), specializing in data engineering and machine learning infrastructure. I love turning messy data into scalable, production-ready systems.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Recently, I have been building AI-driven biomedical data pipelines in partnership with Absentia Labs, and I recently co-authored a published paper on real-time computer vision (YOLOv8) for edge devices.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <strong>Core Tech:</strong> Python, SQL, Docker, GCP, FastAPI, and PostgreSQL.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <strong>Currently Seeking:</strong> Full-time Data Engineering, ML Infrastructure, or Software Engineering roles starting Summer 2026.
          </motion.p>
        </section>

        <StatsBar />
        <Background />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
