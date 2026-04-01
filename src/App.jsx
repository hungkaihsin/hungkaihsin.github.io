import React, { useEffect } from 'react';
import HomePage from './pages/HomePage/HomePage';
import './App.css';

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="App">
      <div className="mouse-light"></div>
      <HomePage />
    </div>
  );
}

export default App;