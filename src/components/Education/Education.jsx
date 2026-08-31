import React from 'react';
import './Education.css';

const educationData = [
  {
    school: 'University of the Pacific',
    place: 'Stockton, California',
    degree: 'M.S. Data Science',
    detail: 'GPA 3.96 / 4.00',
    date: 'Aug. 2024 – May 2026',
    coursework: 'Relational Databases · Machine Learning · Natural Language Processing',
  },
  {
    school: 'Ming Chi University of Technology',
    place: 'New Taipei City, Taiwan',
    degree: 'B.S. Materials Science and Engineering',
    detail: null,
    date: 'Jun. 2023',
    coursework: 'Thermodynamics of Materials · Engineering Mathematics · Semiconductor Processing',
  },
];

const Education = () => (
  <div className="education-container">
    <h2 className="section-title">Education</h2>
    <div className="edu-grid">
      {educationData.map((item) => (
        <article className="edu-item" key={item.school}>
          <span className="edu-date mono">{item.date}</span>
          <h3 className="edu-school">{item.school}</h3>
          <p className="edu-place mono">{item.place}</p>
          <p className="edu-degree">
            {item.degree}
            {item.detail && <span className="edu-detail"> · {item.detail}</span>}
          </p>
          <p className="edu-course">{item.coursework}</p>
        </article>
      ))}
    </div>
  </div>
);

export default Education;
