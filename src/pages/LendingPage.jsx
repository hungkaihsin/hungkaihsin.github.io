import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LandingPage.css'

const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div className="landing-container">
      <div className="name-pill">Kai-Hsin, Hung</div>
      <div className="subtitle-pill">Data Science | Material Science and Engineering</div>
      <div className="button-group">
        <button onClick={() => navigate('/intro')}>About Me</button>
        <button onClick={() => window.open('/Resume.pdf')}>Resume</button>
        <button onClick={() => navigate('/predict')}>Side Project</button>
      </div>
    </div>
  )
}

export default LandingPage