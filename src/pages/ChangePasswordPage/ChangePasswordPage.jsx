import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar';
import Footer from '../../components/Footer/Footer';
import './ChangePasswordPage.css';
import { db, doc, setDoc, getDoc } from '../../firebase';
import toast, { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ChangePasswordPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const loggedIn = sessionStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const hashPassword = async (password) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword) {
      const passwordDocRef = doc(db, 'admin', 'passwordHash');
      const passwordDoc = await getDoc(passwordDocRef);
      const newHashedPassword = await hashPassword(newPassword);

      if (passwordDoc.exists()) {
        const currentHashedPassword = passwordDoc.data().hash;
        if (newHashedPassword === currentHashedPassword) {
          toast.error('New password cannot be the same as the old one.');
        } else {
          await setDoc(passwordDocRef, { hash: newHashedPassword });
          setNewPassword('');
          toast.success('Password changed successfully!');
        }
      } else {
        // This case should ideally not happen if the user is logged in
        // but as a fallback, we set the password.
        await setDoc(passwordDocRef, { hash: newHashedPassword });
        setNewPassword('');
        toast.success('Password set successfully!');
      }
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <p>You must be logged in to change the password.</p>
        <Link to="/admin">Go to Login</Link>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <Toaster />
      <AdminNavbar handleLogout={handleLogout} />
      <div className="admin-content section-container">
        <h1>Change Password</h1>
        <div className="change-password-form">
          <form onSubmit={handleChangePassword}>
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="show-hide-button">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <button type="submit">Change</button>
          </form>
        </div>
        <Link to="/admin" className="back-link">Back to Admin</Link>
      </div>
      <Footer />
    </div>
  );
};

export default ChangePasswordPage;
