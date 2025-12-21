import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillGroups = {
    'Languages & Core': ['Python', 'SQL', 'Regex', 'JavaScript (React)'],
    'Data Science & ML': ['PyTorch', 'TensorFlow', 'Keras', 'YOLOv8 (Computer Vision)', 'Scikit-learn', 'Pandas', 'NumPy', 'NLP (LLMs/GenAI)'],
    'Backend & Web': ['FastAPI', 'Flask', 'React', 'SQLAlchemy', 'REST APIs', 'Nginx'],
    'Cloud & DevOps': ['Docker', 'Kubernetes', 'Google Cloud Platform (GCP - Cloud Run)', 'CI/CD (GitHub Actions)', 'Firebase'],
    'Databases': ['PostgreSQL', 'PostGIS (Spatial Data)', 'MySQL', 'SQLite'],
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skill-groups-container">
          {Object.entries(skillGroups).map(([group, skills]) => (
            <div className="skill-group" key={group}>
              <h3 className="skill-group-title">{group}</h3>
              <div className="skill-chips">
                {skills.map(skill => (
                  <span className="skill-chip" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
