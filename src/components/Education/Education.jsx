import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      title: 'University of the Pacific',
      subtitle: 'M.S. in Data Science',
      date: '2024 – Present',
      description: 'Relevant Courses: Relational Databases, Machine Learning, Natural Language Processing.',
    },
    {
      title: 'Ming Chi University of Technology',
      subtitle: 'B.S. in Materials Science & Engineering',
      date: '2019 – 2023',
      description: 'Relevant Courses: Thermal Dynamics of Materials, Engineering of Mathematics, Semiconductor Processing.',
    },
  ];

  return (
    <div className="education-container">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {educationData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-content">
              <span className="timeline-date">{item.date}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <h4 className="timeline-subtitle">{item.subtitle}</h4>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;