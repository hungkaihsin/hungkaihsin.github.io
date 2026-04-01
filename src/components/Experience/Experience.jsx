import React from 'react';
import './Experience.css';

const Experience = () => {
  const experienceData = [
    {
      title: 'Data Scientist (Academic Capstone)',
      subtitle: 'Absentia Labs · Contract | Boston, MA (Remote)',
      date: 'Feb. 2026 - Present',
      description: `Selected for a university-sponsored capstone project in partnership with Absentia Labs to build AI-driven biomedical data pipelines.
• Architected an automated data curation pipeline to ingest, clean, and standardize multiple healthcare datasets (LIVERTOX, SIDER) into a unified JSON/CSV schema.
• Engineered API integration with PubChem and PubMed to programmatically extract compound synonyms and peer-reviewed reference metadata.
• Developed a scalable NLP workflow utilizing the Gemini API to parse unstructured medical abstracts, automatically verifying drug-induced hepatotoxicity labels.

Skills: Python, Gemini API`,
    },
    {
      title: 'Software Engineer Intern',
      subtitle: 'BIRTHDAYMESSAGING.IO | London Area, UK (Remote)',
      date: 'Mar. 2025 - May 2025',
      description: `• Engineered a mass data ingestion pipeline and a custom .VCF file parser in Python to synchronize 1,000+ bulk contacts.
• Architected an idempotent, cron-based API task scheduler, eliminating duplicate message deliveries.
• Implemented a transactional logging system to dynamically update database records via API responses, enabling real-time monitoring of background job execution statuses.

Skills: Python, React.js`,
    },
    {
      title: 'Manufacturing Engineer Intern',
      subtitle: 'Formosa Plastics Group | Yunlin County, Taiwan (On-site)',
      date: 'Nov. 2021 - Sep. 2022',
      description: `• Organized Low-Density Polyethylene (LDPE) factory pipeline data by material type, streamlining maintenance workflows and speeding up repairs.
• Conducted ultrasound pipeline analyses to verify repair completion and reduce defects, cutting leak incidents by 15%.
• Assisted with daily clerical operations, including record archiving, factory audit support, and maintenance data preparation.

Skills: Manufacturing Engineering`,
    },
    {
      title: 'Research Assistant Intern',
      subtitle: 'Industrial Technology Research Institute (ITRI) | Tainan City, Taiwan (On-site)',
      date: 'Sep. 2021 - Nov. 2021',
      description: `• Operated a Four-Point Probe to evaluate solar cell chips, improving quality control and reducing defect rates.
• Welded reference solar cells to the World PV Scale Standard battery to ensure precise solar test machine calibration.
• Manufactured the World PV Scale Standard battery for machining adjustments and performance corrections.
• Recreated solar silicon chips from used components to support material recycling and cost reduction.
• Prepared detailed summary reports documenting the manufacturing process of the World PV Scale Standard battery.

Skills: Manufacturing Engineering`,
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