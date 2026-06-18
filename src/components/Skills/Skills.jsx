import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillGroups = {
    'Languages': {
      skills: ['Python', 'SQL', 'JavaScript', 'Swift'],
      color: '#0f766e',
    },
    'ML & AI': {
      skills: ['PyTorch', 'TensorFlow / Keras', 'Scikit-Learn', 'YOLOv8', 'spaCy', 'Google Gemini API'],
      color: '#6d28d9',
    },
    'Data & Visualization': {
      skills: ['Pandas', 'NumPy', 'Power BI', 'Plotly', 'Matplotlib', 'Streamlit', 'Jupyter'],
      color: '#b45309',
    },
    'Databases': {
      skills: ['PostgreSQL', 'PostGIS', 'SQLAlchemy', 'Alembic', 'JSON/CSV Schema Design'],
      color: '#1d4ed8',
    },
    'Cloud & DevOps': {
      skills: ['Docker', 'Docker Compose', 'Google Cloud (Cloud Run, Firebase)', 'GitHub Actions (CI/CD)', 'REST APIs'],
      color: '#be123c',
    },
    'Frameworks & Tools': {
      skills: ['FastAPI', 'Flask', 'React', 'PyMuPDF', 'BeautifulSoup', 'Git'],
      color: '#15803d',
    },
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skill-groups-container">
          {Object.entries(skillGroups).map(([group, { skills, color }], groupIndex) => (
            <motion.div 
              className="skill-group" 
              key={group}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.12 }}
            >
              <h3 className="skill-group-title" style={{ color }}>
                {group}
              </h3>
              <div className="skill-chips">
                {skills.map((skill) => (
                  <motion.span 
                    className="skill-chip" 
                    key={skill}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: `${color}20`,
                    }}
                    style={{ '--chip-color': color }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;