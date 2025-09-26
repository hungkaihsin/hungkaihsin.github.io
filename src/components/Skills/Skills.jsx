import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillGroups = {
    'Programming': ['Python (Pandas, NumPy)', 'SQL', 'JavaScript'],
    'Data Engineering': ['ETL / ELT Pipelines', 'Data Cleaning & Transformation', 'API Integration', 'Workflow Automation'],
    'Frameworks & Libraries': ['Flask', 'React', 'TensorFlow', 'Keras', 'Scikit-learn', 'Plotly', 'Matplotlib'],
    'Databases & Tools': ['MySQL', 'SQLite', 'Git', 'REST APIs'],
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
