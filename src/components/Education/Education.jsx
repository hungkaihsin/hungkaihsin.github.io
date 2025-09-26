import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      title: 'University of the Pacific, Stockton, California',
      subtitle: 'Master of Science in Data Science, GPA: 3.92 / 4.0',
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