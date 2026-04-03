import React from 'react';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Publication from '../Publication/Publication';

const Background = () => {
  return (
    <div id="background" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <Experience />
      <Publication />
      <Education />
    </div>
  );
};

export default Background;
