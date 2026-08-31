import React from 'react';
import './Publication.css';

/* Same two-column grid as Experience: status left, citation right. */

const Publication = () => (
  <div className="publication-container">
    <h2 className="section-title">Publication</h2>

    <article className="pub-row">
      <div className="pub-meta">
        <span className="record-status">
          <span className="status-mark" aria-hidden="true" />
          Accepted · IntelliSys 2026
        </span>
      </div>

      <div className="pub-detail">
        <h3 className="pub-title">
          GoPark: An AI-Powered Parking Recommendation System
        </h3>
        <p className="pub-authors">G. Phung, K. Hung, F. Lorenzino</p>
        <p className="pub-venue">
          Intelligent Systems Conference (IntelliSys) 2026, Springer Lecture
          Notes in Networks and Systems
        </p>
      </div>
    </article>
  </div>
);

export default Publication;
