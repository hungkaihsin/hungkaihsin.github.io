import React from 'react';
import Masthead, { RunHead } from '../../components/Masthead/Masthead';
import Background from '../../components/Background/Background';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import Footer from '../../components/Footer/Footer';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <RunHead />
      <div className="App-container">
        <Masthead />
        <main className="main-content">
          <Projects />
          <Background />
          <Skills />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default HomePage;
