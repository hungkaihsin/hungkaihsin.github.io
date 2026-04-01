import React from 'react';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';

const Background = () => {
  return (
    <div id="background" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      <Experience />
      <Education />
    </div>
  );
};

export default Background;
