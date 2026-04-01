import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillGroups = {
    'Languages': ['Python', 'SQL', 'JavaScript', 'Swift'],
    'AI & Machine Learning': ['PyTorch', 'TensorFlow', 'YOLOv8', 'NLP', 'Scikit-Learn', 'Gemini LLM'],
    'Web & Frameworks': ['React', 'FastAPI', 'Flask', 'Pandas'],
    'Cloud, DB & DevOps': ['Google Cloud (GCP)', 'Firebase', 'Docker', 'PostgreSQL', 'PostGIS', 'GitHub Actions'],
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
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