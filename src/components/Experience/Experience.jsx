import React from 'react';
import './Experience.css';

const Experience = () => {
  const experienceData = [
    {
      title: 'Software Intern',
      subtitle: 'Birthday Messaging, London, UK (Remote)',
      date: 'Mar. 2025 - May. 2025',
      description: `• Engineered a Flask scheduler ensuring 100% idempotency and accurate timezone handling for automated delivery.
• Built a mass data ingestion pipeline for parsing .VCF files, enabling bulk contact importing and validation.
• Implemented backend logic for real-time delivery status logging and automated email notifications.
• Optimized frontend architecture by developing interactive navigation components and responsive landing pages.`,
    },
    {
      title: 'Manufacturing Engineer Intern',
      subtitle: 'Formosa Plastics',
      date: 'Nov. 2021 - Sept. 2022',
      description: `• Organized and analyzed pipeline data for maintenance planning.
• Conducted ultrasound inspections to detect issues early.
• Reduced pipeline leaks by 15% through improved monitoring.`,
    },
    {
      title: 'Research Assistant Intern',
      subtitle: 'ITRI',
      date: 'Aug. 2021 - Nov. 2021',
      description: `• Operated equipment to evaluate solar cell chip quality.
• Calibrated testing machines to meet global standards.
• Reduced defect rates through optimized inspection processes.`,
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