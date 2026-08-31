import React from 'react';
import './Experience.css';

/* Two-column entries: role and dates on the left, detail on the right.
   Matches the work spread above so Background reads as the same document. */

const experienceData = [
  {
    title: 'Software Engineer Intern',
    org: 'BirthdayMessaging.io',
    place: 'London, UK (Remote)',
    date: 'Mar. 2025 – May 2025',
    bullets: [
      'Engineered a mass data ingestion pipeline and a custom .VCF parser in Python, loading 1,000+ bulk contact records into the application database.',
      'Architected an idempotent, cron-based task scheduler that queries time-sensitive events and automates email dispatch, eliminating duplicate deliveries.',
      'Implemented transactional logging of API response payloads, giving real-time observability of background job execution.',
    ],
    skills: ['Python', 'React.js', 'REST APIs', 'Flask'],
  },
  {
    title: 'Manufacturing Engineer Intern',
    org: 'Formosa Plastics Group',
    place: 'Yunlin County, Taiwan (On-site)',
    date: 'Nov. 2021 – Sep. 2022',
    bullets: [
      'Organized and cleaned daily plant operational reports from multiple teams, restructuring inconsistent hand-off data into reliable records for maintenance and capacity planning.',
      'Performed hands-on ultrasonic pipeline leak inspections alongside engineering staff in a high-volume production environment.',
      'Supported daily plant operations including record archiving, audit support, and maintenance data preparation.',
    ],
    skills: ['Data Wrangling', 'Manufacturing Operations'],
  },
  {
    title: 'Research Assistant Intern',
    org: 'Industrial Technology Research Institute (ITRI)',
    place: 'Tainan City, Taiwan (On-site)',
    date: 'Sep. 2021 – Nov. 2021',
    bullets: [
      'Operated a Four-Point Probe to characterize and evaluate solar cell chips as part of photovoltaic performance testing.',
      'Welded reference solar cells to the World PV Scale Standard to support precise calibration of solar test equipment.',
      'Reconstructed solar silicon chips from used components to support material recycling, and documented the reference-cell manufacturing process.',
    ],
    skills: ['PV Characterization', 'Lab Instrumentation'],
  },
];

const Experience = () => (
  <div className="experience-container">
    <h2 className="section-title">Experience</h2>
    <div className="experience-list">
      {experienceData.map((item) => (
        <article className="exp-row" key={item.org}>
          <div className="exp-meta">
            <span className="exp-date mono">{item.date}</span>
            <h3 className="exp-title">{item.title}</h3>
            <p className="exp-org">{item.org}</p>
            <p className="exp-place mono">{item.place}</p>
          </div>

          <div className="exp-detail">
            <ul className="dash-bullets">
              {item.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            <div className="exp-chips">
              {item.skills.map((skill) => (
                <span key={skill} className="exp-chip mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default Experience;
