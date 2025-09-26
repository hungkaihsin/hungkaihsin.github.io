import React from 'react';
import './Experience.css';

const Experience = () => {
  const experienceData = [
    {
      title: 'Software Developer Intern (Full-Stack)',
      subtitle: 'Birthday Messaging, London, UK (Remote)',
      date: 'Mar. 2025 – May. 2025',
      description: `• Implemented a timezone-aware Flask + APScheduler system for 100% accurate cross-time-zone birthday email scheduling.
• Engineered a file upload pipeline (StringIO + datetime) to reduce manual contact entry from hours to seconds, processing 1,000+ contacts.
• Designed a responsive React/Vite overview page and timezone dropdown, boosting usability scores by 25%.`,
    },
  ];

  return (
    <div className="experience-container">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experienceData.map((item, index) => (
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

export default Experience;
