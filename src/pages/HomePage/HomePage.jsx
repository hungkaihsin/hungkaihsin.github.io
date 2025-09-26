import React from 'react';
import About from '../../components/About/About';
import Background from '../../components/Background/Background'; // Import Background
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <About />
      <Background /> {/* Use Background component */}
      <Skills />
      <Projects />
    </div>
  );
};

export default HomePage;
