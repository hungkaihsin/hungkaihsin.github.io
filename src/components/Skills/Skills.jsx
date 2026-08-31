import React from 'react';
import './Skills.css';

const Skills = () => {
  // Ordered by how central each group is to the work, not alphabetically.
  const skillGroups = [
    ['Languages', ['Python', 'SQL', 'JavaScript', 'Swift']],
    [
      'ML & AI',
      ['PyTorch', 'TensorFlow / Keras', 'Scikit-Learn', 'YOLOv8', 'Gemini API'],
    ],
    [
      'Data & visualization',
      ['Pandas', 'NumPy', 'Power BI', 'Plotly', 'Matplotlib', 'Streamlit', 'Jupyter'],
    ],
    ['Databases', ['PostgreSQL', 'PostGIS', 'SQLAlchemy', 'Alembic', 'Schema design']],
    [
      'Cloud & DevOps',
      ['Docker', 'Docker Compose', 'Google Cloud Run', 'Firebase', 'GitHub Actions'],
    ],
    ['Frameworks & tools', ['FastAPI', 'Flask', 'React', 'PyMuPDF', 'Git']],
  ];

  return (
    <section id="skills" className="section skills-section">
      <h2 className="section-title">Technical skills</h2>
      <dl
        className="skill-table"
      >
        {skillGroups.map(([group, skills]) => (
          <div className="skill-row" key={group}>
            <dt className="field-label skill-group-label">{group}</dt>
            <dd className="skill-values">{skills.join('  ·  ')}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Skills;
