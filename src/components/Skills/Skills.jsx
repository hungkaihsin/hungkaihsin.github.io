import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillGroups = {
    'Languages': ['Python', 'SQL', 'JavaScript', 'Swift'],
    'Frameworks': ['PyTorch', 'TensorFlow', 'YOLOv8', 'React', 'FastAPI', 'SwiftUI', 'Flask'],
    'DevOps & Cloud': ['Docker', 'GCP', 'GitHub Actions', 'Firebase'],
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