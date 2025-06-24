// src/pages/ManagerPage.jsx
import React, { useState } from 'react';

const ManagerPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Very basic password check (not secure for production!)
    if (password === import.meta.env.VITE_MANAGER_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Wrong password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div>
        <h2>Enter Password to Access Manager Page</h2>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, Manager</h1>
      <ul>
        <li><a href="https://example.com/resource1.pdf" target="_blank">Resource 1</a></li>
        <li><a href="https://example.com/resource2.pdf" target="_blank">Resource 2</a></li>
        <li><a href="/Resume.pdf" target="_blank">My Resume</a></li>
        {/* Add more files or links here */}
      </ul>
    </div>
  );
};

export default ManagerPage;