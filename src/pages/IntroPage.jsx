import React from 'react';
import './IntroPage.css';
import { useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="intro-wrapper">
      <nav className="nav-buttons fadeUp delay-1" aria-label="Primary">
        <button className="nav-button" onClick={() => navigate('/')}>Home</button>
        <button className="nav-button" onClick={() => navigate('/sideproject')}>Side Projects</button>
        <a
          className="nav-button"
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </nav>

      <h1 className="intro-title fadeUp delay-2">Hi, I’m Daniel Hung</h1>

      <div className="typing-text fadeUp delay-2" aria-live="polite">
        <h2>
          <Typewriter
            words={['Data Scientist', 'Software Engineer']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
      </div>

      <div className="intro-content fadeUp delay-3">
        <img
          src="/images/photo2.jpeg"
          alt="Daniel Hung"
          className="photo-card photo2"
          loading="lazy"
          decoding="async"
        />
        <p className="intro-description">
          I'm a data science graduate student passionate about turning data into real-world impact.
          I have experience in machine learning (LSTM, ConvNets), backend API development, and SQL databases.
          Bilingual in Mandarin and English, I'm curious, collaborative, and driven to build smart, effective solutions.
        </p>
      </div>

      <div className="sections-container fadeUp delay-4">
        {/* Left: Education */}
        <div className="education-section">
          <h2 className="section-title">Education</h2>

          <div className="education-item">
            <p>
              <strong>University of the Pacific</strong><br />
              M.S. in Data Science (2024 – Present) <br/>Stockton, CA<br />
              <span className="edu-meta">{/* GPA: 3.92/4.0 (optional to show) */}</span>
            </p>

            <h3 className="sub-section">Relevant Courses</h3>
            <ul className="course-list compact">
              <li>Relational Databases</li>
              <li>Machine Learning</li>
              <li>Natural Language Processing</li>
            </ul>
          </div>

          <div className="education-item">
            <p>
              <strong>Ming Chi University of Technology</strong><br />
              B.S. in Materials Science &amp; Engineering (2019 – 2023) <br/> New Taipei City, Taiwan
            </p>

            <h3 className="sub-section">Relevant Courses</h3>
            <ul className="course-list compact">
              <li>Thermal Dynamics of Materials</li>
              <li>Engineering of Mathematics</li>
              <li>Semiconductor Processing</li>
            </ul>
          </div>
        </div>

        {/* Right: Experience */}
        <div className="experience-section">
          <h2 className="section-title">Experience</h2>

          <div className="experience-item">
            <p>
              <strong>Software Developer Intern (Full-Stack)</strong><br />
              Birthday Messaging (Mar. 2025 – May. 2025)
            </p>
            <ul className="exp-bullets">
              <li>Built timezone-aware email scheduling with Flask and APScheduler.</li>
              <li>Streamlined contact imports via CSV/VCF upload support.</li>
              <li>Enhanced UI with a responsive page and timezone dropdown in React.</li>
            </ul>
          </div>

          <div className="experience-item">
            <p>
              <strong>Manufacturing Engineer Intern</strong><br />
              Formosa Plastics (Nov. 2021 – Sept. 2022)
            </p>
            <ul className="exp-bullets">
              <li>Organized and analyzed pipeline data for maintenance planning.</li>
              <li>Conducted ultrasound inspections to detect issues early.</li>
              <li>Reduced pipeline leaks by 15% through improved monitoring.</li>
            </ul>
          </div>

          <div className="experience-item">
            <p>
              <strong>Research Assistant Intern</strong><br />
              Industrial Technology Research Institute (Aug. 2021 – Nov. 2021)
            </p>
            <ul className="exp-bullets">
              <li>Operated equipment to evaluate solar cell chip quality.</li>
              <li>Calibrated testing machines to meet global standards.</li>
              <li>Reduced defect rates through optimized inspection processes.</li>
            </ul>
          </div>
        </div>

        {/* Bottom: Skills (spans full width and centered) */}
        <div className="skills-section">
          <h2 className="section-title">Skills</h2>

          <div className="skill-groups">
            <div className="skill-group">
              <p className="skill-heading">Programming</p>
              <ul className="skill-chips">
                <li>Python (Pandas, NumPy)</li>
                <li>SQL</li>
                <li>JavaScript</li>
              </ul>
            </div>

            <div className="skill-group">
              <p className="skill-heading">Data Engineering</p>
              <ul className="skill-chips">
                <li>ETL / ELT Pipelines</li>
                <li>Data Cleaning &amp; Transformation</li>
                <li>API Integration</li>
                <li>Workflow Automation</li>
              </ul>
            </div>

            <div className="skill-group">
              <p className="skill-heading">Frameworks &amp; Libraries</p>
              <ul className="skill-chips">
                <li>Flask</li>
                <li>React</li>
                <li>TensorFlow</li>
                <li>Keras</li>
                <li>Scikit-learn</li>
                <li>Plotly</li>
                <li>Matplotlib</li>
              </ul>
            </div>

            <div className="skill-group">
              <p className="skill-heading">Databases &amp; Tools</p>
              <ul className="skill-chips">
                <li>MySQL</li>
                <li>SQLite</li>
                <li>Git</li>
                <li>REST APIs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer className="intro-footer fadeUp delay-5">
        <div className="contact-icons">
          <a className="icon-button" href="https://github.com/hungkaihsin" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a className="icon-button" href="https://www.linkedin.com/in/kai-hsin-hung/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a className="icon-button" href="mailto:k_hung2@u.pacific.edu">
            <FaEnvelope size={30} />
          </a>
        </div>

        <p className="copyright">© 2025 Daniel Hung. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default IntroPage;