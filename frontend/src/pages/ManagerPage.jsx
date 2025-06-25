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

  const [links, setLinks] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newUrl, setNewUrl] = useState('');

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

  const fetchLinks = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/api/links`, {
        headers: { Authorization: token },
      });
      setLinks(res.data);
    } catch (err) {
      toast.error('Failed to fetch links.');
    }
  };

  const handleAddLink = async () => {
    if (!newTitle || !newUrl) {
      toast.warn('Please fill in both fields');
      return;
    }
    try {
      await axios.post(`${BACKEND_URL}/api/links`, {
        title: newTitle,
        url: newUrl,
      }, {
        headers: { Authorization: token },
      });
      setNewTitle('');
      setNewUrl('');
      fetchLinks();
    } catch (err) {
      toast.error('Failed to add link.');
    }
  };

  const handleDeleteLink = async (id) => {
    try {
      await axios.delete(`${BACKEND_URL}/api/links/${id}`, {
        headers: { Authorization: token },
      });
      fetchLinks();
    } catch (err) {
      toast.error('Failed to delete link.');
    }
  };

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    }
  }, [token]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchLinks();
    }
  }, [isAuthenticated]);

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
                {links.map((link, index) => (
                  <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
                    <button onClick={() => handleDeleteLink(link.id)} style={{ marginLeft: '10px' }}>Delete</button>
                  </li>
                ))}
              </ul>

              <div className="link-form">
                <input
                  type="text"
                  placeholder="Link Title"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Link URL"
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                />
                <button onClick={handleAddLink}>Add Link</button>
              </div>

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