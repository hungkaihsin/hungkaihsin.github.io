import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './AdminNavbar.css';

const AdminNavbar = ({ handleLogout }) => {
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
        <button className="admin-nav-button theme-toggle-button" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>
        <Link to="/change-password" className="admin-nav-button nav-button">Change Password</Link>
        <button onClick={handleLogout} className="admin-nav-button logout-button">Logout</button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
