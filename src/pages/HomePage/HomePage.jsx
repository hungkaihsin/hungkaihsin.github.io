import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Background from '../../components/Background/Background';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import Footer from '../../components/Footer/Footer';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="App-container">
      <Sidebar />
      <main className="main-content">
        <section id="about" className="section text-section">
          <p>
            I am an M.S. Data Science student at the University of the Pacific (graduating May 2026), specializing in data engineering and machine learning infrastructure. I love turning messy data into scalable, production-ready systems.
          </p>
          <p>
            Recently, I have been building AI-driven biomedical data pipelines in partnership with Absentia Labs, and I recently co-authored a published paper on real-time computer vision (YOLOv8) for edge devices.
          </p>
          <p>
            <strong>Core Tech:</strong> Python, SQL, Docker, GCP, PyTorch, and FastAPI.
          </p>
          <p>
            <strong>Currently Seeking:</strong> Full-time Data Engineering, ML Infrastructure, or Software Engineering roles starting in Summer 2026.
          </p>
        </section>

        <Background />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
