import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManagerPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const BACKEND_URL = 'https://hungkaihsin-github-io.onrender.com'; // Replace with your actual Render URL

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/auth/login`, {
        email,
        password
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

  if (!isAuthenticated) {
    return (
      <div>
        <h2>Manager Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, Manager</h1>
      <button onClick={handleLogout}>Logout</button>
      <ul>
        <li><a href="/Resume.pdf" target="_blank">My Resume</a></li>
        <li><a href="https://example.com/secret1.pdf" target="_blank">Resource 1</a></li>
        {/* Add more protected files or links here */}
      </ul>
    </div>
  );
};

export default ManagerPage;
