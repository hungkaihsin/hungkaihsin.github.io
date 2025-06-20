import React from 'react'
import './AboutMe.css'
import '../styles/shared.css'
import { Link } from 'react-router-dom'

const AboutMe = () => {
  return (
    <div className="about-wrapper">
      <div className="nav-buttons fadeUp delay-1">
        <button className="nav-button active">About Me</button>
        <a
        className="nav-button"
        href="/Resume.pdf"
        target="_blank"
        rel="noopener noreferrer">
        Resume
        </a>
        
        <Link className="nav-button" to="/sideproject">Side Project</Link>
      </div>

      <div className="about-container fadeUp delay-2">
        <div className="about-card">
          <section>
            <h2>Introduction</h2>
            <p>
                I'm a data science graduate student passionate about turning data into real-world impact. I have experience in machine learning (LSTM, ConvNets), backend API development, and SQL databases. 
                Bilingual in Mandarin and English, I'm curious, collaborative, and driven to build smart, effective solutions.
            </p>
          </section>

          <section>
            <h2>Education</h2>
            <div className="timeline">
              <div className="timeline-line" />
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <p>
                    <strong>Ming Chi University of Technology</strong><br />
                    Material Science Engineering (2019 - 2023)<br />
                    Location: New Taipei City, Taiwan
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <p>
                    <strong>University of the Pacific</strong><br />
                    Data Science (2024 - present)<br />
                    Location: Stockton, California
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2>Contact info</h2>
            <div className="contact-buttons">
                <a className="github" href="https://github.com/hungkaihsin" target="_blank" rel="noopener noreferrer">Github</a>
                <a className="linkedin" href="https://www.linkedin.com/in/kai-hsin-hung/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                <a className="gmail" href="mailto:k_hung2@u.pacific.edu">Gmail</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
