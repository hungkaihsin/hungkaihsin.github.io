import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillGroups = {
    'Programming & Analytics': ['Python', 'SQL', 'JavaScript', 'Statistical Testing (t-tests, ANOVA)', 'Power BI', 'Tableau'],
    'Frameworks & Libraries': ['Flask', 'React', 'Vite', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Keras', 'Matplotlib', 'Plotly'],
    'Databases & DevOps': ['MySQL', 'SQLite', 'Git', 'REST APIs', 'Render'],
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
