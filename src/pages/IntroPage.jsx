import React from 'react';
import './IntroPage.css';
import { useNavigate } from 'react-router-dom';

const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="intro-wrapper">
      <div className="nav-buttons fadeUp delay-1">
        <button className="nav-button" onClick={() => navigate('/')}>Home</button>
        <button className="nav-button" onClick={() => navigate('/sideproject')}>Side Projects</button>
      </div>

      <h1 className="intro-title fadeUp delay-2">Hi, I’m Daniel Hung</h1>

      <div className="photo-deck fadeUp delay-3">
        <div className="photo-card photo1">Photo 1</div>
        <div className="photo-card photo2">Photo 2</div>
        <div className="photo-card photo3">Photo 3</div>
      </div>

      <p className="intro-description fadeUp delay-4">
        I'm a data science graduate student passionate about turning data into real-world impact. I have experience in machine learning (LSTM, ConvNets), backend API development, and SQL databases. Bilingual in Mandarin and English, I'm curious, collaborative, and driven to build smart, effective solutions
      </p>

      <div className="contact-icons fadeUp delay-5">
        <a className="icon-button github" href="https://github.com/hungkaihsin" target="_blank" rel="noopener noreferrer">Github icon</a>
        <a className="icon-button linkedin" href="https://www.linkedin.com/in/kai-hsin-hung/" target="_blank" rel="noopener noreferrer">Linkedin icon</a>
        <a className="icon-button gmail" href="mailto:k_hung2@u.pacific.edu">Gmail icon</a>
      </div>
    </div>
  );
};

export default IntroPage;