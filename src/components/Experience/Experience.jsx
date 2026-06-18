import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experienceData = [
    {
      title: 'Software Engineer Intern',
      subtitle: 'BirthdayMessaging.io · London, UK (Remote)',
      date: 'Mar. 2025 – May 2025',
      bullets: [
        'Engineered a mass data ingestion pipeline and a custom .VCF file parser in Python to extract, transform, and load 1,000+ bulk contact records into the application database.',
        'Architected an idempotent, cron-based API task scheduler that queries time-sensitive database events and automates email dispatch, eliminating duplicate message deliveries.',
        'Implemented a transactional logging system that captures API response payloads and writes structured execution records to the database, enabling real-time observability of background job execution.',
      ],
      skills: ['Python', 'React.js', 'REST APIs', 'Flask'],
    },
    {
      title: 'Manufacturing Engineer Intern',
      subtitle: 'Formosa Plastics Group · Yunlin County, Taiwan (On-site)',
      date: 'Nov. 2021 – Sep. 2022',
      bullets: [
        'Organized and cleaned daily plant operational reports submitted by multiple teams, restructuring inconsistent hand-off data into reliable records that supported maintenance, scheduling, and capacity-planning decisions.',
        'Performed hands-on ultrasonic pipeline leak inspections alongside engineering staff in a high-volume production environment, supporting equipment reliability and preventive-maintenance workflows.',
        'Supported daily plant operations including record archiving, factory audit support, and maintenance data preparation.',
      ],
      skills: ['Data Wrangling', 'Manufacturing Operations'],
    },
    {
      title: 'Research Assistant Intern',
      subtitle: 'Industrial Technology Research Institute (ITRI) · Tainan City, Taiwan (On-site)',
      date: 'Sep. 2021 – Nov. 2021',
      bullets: [
        'Operated a Four-Point Probe to evaluate solar cell chips, improving quality control and reducing defect rates.',
        'Welded reference solar cells to the World PV Scale Standard battery to ensure precise solar test machine calibration.',
        'Manufactured the World PV Scale Standard battery for machining adjustments and performance corrections.',
        'Recreated solar silicon chips from used components to support material recycling and cost reduction.',
        'Prepared detailed summary reports documenting the manufacturing process of the World PV Scale Standard battery.',
      ],
      skills: ['Manufacturing Engineering', 'Quality Control'],
    },
  ];

  return (
    <div className="experience-container">
      <h2 className="section-title">Experience</h2>
      <div className="experience-list">
        {experienceData.map((item, index) => (
          <motion.div 
            className="experience-card" 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          >
            <div className="experience-header">
              <span className="experience-date">{item.date}</span>
              <h3 className="experience-title">{item.title}</h3>
              <h4 className="experience-subtitle">{item.subtitle}</h4>
            </div>
            <ul className="dash-bullets experience-bullets">
              {item.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            {item.skills && (
              <div className="experience-chips">
                {item.skills.map((skill, i) => (
                  <span key={i} className="exp-chip">{skill}</span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;