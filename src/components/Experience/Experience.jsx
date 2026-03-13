import React from 'react';
import './Experience.css';

const Experience = () => {
  const experienceData = [
    {
      title: 'Software Engineer Intern',
      subtitle: 'Birthday Messaging, London, UK (Remote)',
      date: 'Mar. 2025 - May. 2025',
      description: `• Synchronized 1,000+ bulk contacts by engineering a mass data ingestion pipeline and a custom .VCF file parser in Python.
• Eliminated duplicate message deliveries by architecting an idempotent, cron-based API task scheduler.
• Monitored background job execution statuses by implementing a transactional logging system that dynamically updates database records via API responses.`,
    },
    {
      title: 'Manufacturing Engineer Intern',
      subtitle: 'Formosa Plastics, Yunlin County, Taiwan',
      date: 'Nov. 2021 - Sept. 2022',
      description: `• Organized and analyzed pipeline data for maintenance planning.
• Conducted ultrasound inspections to detect issues early.
• Reduced pipeline leaks by 15% through improved monitoring.`,
    },
    {
      title: 'Research Assistant Intern',
      subtitle: 'Industrial Technology Research Institute, Guiren District, Tainan City, Taiwan',
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