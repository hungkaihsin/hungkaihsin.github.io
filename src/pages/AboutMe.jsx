import React from 'react'
import './AboutMe.css'
import '../styles/shared.css'


const AboutMe = () => {
  return (
    <div className="about-wrapper">
      <div className="nav-buttons fadeUp delay-1">
        <button className="nav-button active">About Me</button>
        <button className='nav-button'>Resume</button>
        <button className='nav-button'>Side Project</button>
      </div>

      <div className="about-container fadeUp delay-2">
        <div className="about-card">
          <section>
            <h2>Introduction</h2>
            <p>
                Hi! I’m a data science grad student at the University of the Pacific with a passion for turning data into real-world solutions. 
                I enjoy working on machine learning projects—especially time series forecasting with models like LSTM and ConvNets—and recently completed a remote software internship where I helped build backend APIs and worked with SQL databases.
            </p>
          </section>

          <section>
            <h2>Experience</h2>
            <div className="timeline">
              <div className="timeline-line" />
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <p>
                    <strong>Ming Chi University of Technology</strong><br />
                    Major in Material Science Engineering<br />
                    From 2019 to 2023<br />
                    Location: New Taipei City, Taiwan
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <p>
                    <strong>University of the Pacific</strong><br />
                    Master (2024 – Present)<br />
                    Data Science<br />
                    Location: Stockton, California
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2>Contact info</h2>
            <div className="contact-buttons">
              <button className="github">Github</button>
              <button className="linkedin">Linkedin</button>
              <button className="gmail">Gmail</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
