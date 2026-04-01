import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillGroups = {
    'Languages': ['Python', 'SQL', 'JavaScript', 'Swift'],
    'AI & Machine Learning': ['PyTorch', 'TensorFlow', 'YOLOv8', 'Scikit-Learn', 'Pandas', 'NumPy'],
    'Data & Cloud': ['PostgreSQL', 'Google Cloud (GCP)', 'Docker', 'GitHub Actions', 'Firebase'],
    'Frameworks & Tools': ['FastAPI', 'Flask', 'REST APIs', 'Git', 'React', 'ETL Pipelines'],
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skill-groups-container">
          {Object.entries(skillGroups).map(([group, skills], groupIndex) => (
            <motion.div 
              className="skill-group" 
              key={group}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.15 }}
            >
              <h3 className="skill-group-title">{group}</h3>
              <div className="skill-chips">
                {skills.map((skill, index) => (
                  <motion.span 
                    className="skill-chip" 
                    key={skill}
                    whileHover={{ scale: 1.05, backgroundColor: 'var(--primary-color)', color: '#fff' }}
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