import React from 'react';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import './Background.css';

const Background = () => {
  return (
    <section id="background" className="section background-section">
      <div className="container">
        <div className="background-grid">
          <div className="grid-item">
            <Experience />
          </div>
          <div className="grid-item">
            <Education />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;
