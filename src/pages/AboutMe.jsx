import React from 'react'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <>
      {/* Nav buttons outside the main content container */}
      <div className="nav-buttons">
        <button className="active">About Me</button>
        <button>Resume</button>
        <button>Side Project</button>
      </div>

      <div className="about-container">
        <div className="about-card">
          <section>
            <h2>Introduction</h2>
            <p>
              Hello! My name is Kai-Hsin, Hung, and I'm from Taiwan. I hold a Bachelor of Science in
              Material Science and Engineering and am currently pursuing a Master’s in Data Science.
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
    </>
  )
}

export default AboutMe
