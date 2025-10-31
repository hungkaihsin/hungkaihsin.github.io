import React, { useState, useEffect } from 'react';
import './AdminPage.css';

const AdminPage = () => {
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  // This is the SHA-256 hash of the password "password".
  // You can change the password by changing this hash.
  // You can use an online SHA-256 generator to generate a new hash.
  const correctPasswordHash = '41bff0cb2e59b0d62da5900adfa230c7c3bb87aed16e03dde22daec8304a6a37';

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hashedPassword = await hashPassword(password);
    if (hashedPassword === correctPasswordHash) {
      setIsLoggedIn(true);
      sessionStorage.setItem('isLoggedIn', 'true');
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  const hashPassword = async (password) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  };

  useEffect(() => {
    const loggedIn = sessionStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  if (isLoggedIn) {
    return (
      <div className="admin-content">
        <h1>Admin Page</h1>
        <p>This is the private content.</p>
      </div>
    );
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Admin Login</h1>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter password"
        />
        <button type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default AdminPage;
