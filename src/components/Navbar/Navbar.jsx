import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="about" smooth={true} duration={500} className="nav-link">About</Link>
        <Link to="background" smooth={true} duration={500} className="nav-link">Background</Link>
        <Link to="skills" smooth={true} duration={500} className="nav-link">Skills</Link>
        <Link to="projects" smooth={true} duration={500} className="nav-link">Projects</Link>
        <button className="theme-toggle-button" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
