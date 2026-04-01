import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      title: 'University of the Pacific, Stockton, California',
      subtitle: 'Master of Science in Data Science, GPA: 3.95 / 4.0',
      date: 'Aug. 2024 – May. 2026',
      description: 'Relevant Courseworks: Relational Databases, Machine Learning, Natural Language Processing',
    },
    {
      title: 'Ming Chi University of Technology, New Taipei City, Taiwan',
      subtitle: 'Bachelor of Science in Material Science and Engineering',
      date: 'Jun. 2023',
      description: 'Relevant Courseworks: Thermal Dynamics of Materials, Engineering of Mathematics, Semiconductor Processing',
    },
  ];

  return (
    <div className="education-container">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {educationData.map((item, index) => (
          <motion.div 
            className="timeline-item" 
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <motion.div 
              className="timeline-content"
              whileHover={{ scale: 1.02 }}
            >
              <span className="timeline-date">{item.date}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <h4 className="timeline-subtitle">{item.subtitle}</h4>
              <p className="timeline-description">{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;