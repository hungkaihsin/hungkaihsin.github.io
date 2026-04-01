import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="about" smooth={true} duration={500} className="nav-link">About</Link>
        <Link to="background" smooth={true} duration={500} className="nav-link">Background</Link>
        <Link to="skills" smooth={true} duration={500} className="nav-link">Technical Skills</Link>
        <Link to="projects" smooth={true} duration={500} className="nav-link">Projects</Link>
      </div>
    </nav>
  );
};

export default Navbar;
