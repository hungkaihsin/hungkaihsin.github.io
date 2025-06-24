import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ManagerPage.css'; // You'll create this
import '../styles/shared.css';

const BACKEND_URL = 'https://hungkaihsin-github-io.onrender.com'; // Replace if needed

const ManagerPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/auth/login`, {
        email,
        password,
      });

      const receivedToken = response.data.token;
      localStorage.setItem('token', receivedToken);
      setToken(receivedToken);
      setIsAuthenticated(true);
    } catch (err) {
      alert('Login failed. Check your email and password.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    }
  }, [token]);

  return (
    <div className="manager-wrapper">
      <div className="nav-buttons fadeUp delay-1">
        <button className="nav-button active">Manager</button>
        <a className="nav-button" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        <a className="nav-button" href="/">Back to Portfolio</a>
      </div>

      <div className="manager-container fadeUp delay-2">
        <div className="manager-card">
          {!isAuthenticated ? (
            <div className="login-form">
              <h2>Manager Login</h2>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleLogin}>Login</button>
            </div>
          ) : (
            <div className="resource-section">
              <h1>Welcome, Manager</h1>
              <button className="logout-button" onClick={handleLogout}>Logout</button>
              <ul>
                <li><a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">My Resume</a></li>
                <li><a href="https://example.com/secret1.pdf" target="_blank" rel="noopener noreferrer">Resource 1</a></li>
                {/* Add more secure links here */}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManagerPage;