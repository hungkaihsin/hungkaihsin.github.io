import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ManagerPage.css'; 
import '../styles/shared.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      toast.error('Login failed. Check your email and password.', {
        position: 'top-center',
        autoClose: 3000,
      });
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
              <h1>Links</h1>
              <ul>
                <li><a href="https://csma777-my.sharepoint.com/:f:/g/personal/danielkai0802_csmatw_org/EpJVaSxM8CVMgPzONVtcpOIBLeJ32qXyZkkHEd7DEfOb0Q?e=tmP46h" target="_blank" rel="noopener noreferrer">Software</a></li>
                <li><a href="/2025_Spring.pdf" target="_blank" rel="noopener noreferrer">Transcript</a></li>
                
                
              </ul>
              <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ManagerPage;