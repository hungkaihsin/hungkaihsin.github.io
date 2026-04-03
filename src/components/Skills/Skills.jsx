import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillGroups = {
    'Languages': {
      skills: ['Python', 'SQL', 'JavaScript'],
      color: '#5eead4',
    },
    'Databases & Data': {
      skills: ['PostgreSQL', 'PostGIS', 'SQLAlchemy', 'Alembic', 'Pandas', 'NumPy', 'JSON/CSV Schema Design'],
      color: '#a78bfa',
    },
    'Cloud & DevOps': {
      skills: ['Docker', 'Docker Compose', 'Google Cloud (Cloud Run, Firebase)', 'GitHub Actions (CI/CD)', 'REST APIs'],
      color: '#60a5fa',
    },
    'Frameworks & Tools': {
      skills: ['FastAPI', 'Flask', 'Scikit-Learn', 'PyMuPDF', 'BeautifulSoup', 'Git'],
      color: '#fb7185',
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