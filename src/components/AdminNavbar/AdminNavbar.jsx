import React, { useState, useEffect } from 'react';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2';
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
          {theme === 'light' ? <HiOutlineMoon size={24} /> : <HiOutlineSun size={24} />}
        </button>
        <Link to="/change-password" className="admin-nav-button nav-button">Change Password</Link>
        <button onClick={handleLogout} className="admin-nav-button logout-button">Logout</button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
