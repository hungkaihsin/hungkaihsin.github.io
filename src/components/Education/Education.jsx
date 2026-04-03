import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      title: 'University of the Pacific, Stockton, California',
      subtitle: 'Master of Science in Data Science, GPA: 3.95 / 4.00',
      date: 'Aug. 2024 – May 2026',
      description: 'Relevant Coursework: Relational Databases, Machine Learning, Natural Language Processing',
    },
    {
      title: 'Ming Chi University of Technology, New Taipei City, Taiwan',
      subtitle: 'Bachelor of Science in Materials Science and Engineering',
      date: 'Jun. 2023',
      description: 'Relevant Coursework: Thermal Dynamics of Materials, Engineering of Mathematics, Semiconductor Processing',
    },
  ];

  return (
    <div className="education-container">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {educationData.map((item, index) => (
          <motion.div 
            className="education-card" 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          >
            <span className="education-date">{item.date}</span>
            <h3 className="education-title">{item.title}</h3>
            <h4 className="education-subtitle">{item.subtitle}</h4>
            <p className="education-description">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;