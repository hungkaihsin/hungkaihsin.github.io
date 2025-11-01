import React, { useState, useEffect } from 'react';
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar';
import Footer from '../../components/Footer/Footer';
import './AdminPage.css';
import { db, collection, onSnapshot, addDoc, deleteDoc, doc, getDoc, setDoc, updateDoc } from '../../firebase';
import toast, { Toaster } from 'react-hot-toast';

const AdminPage = () => {
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const [quickAccessLinks, setQuickAccessLinks] = useState([]);
  const [entertainmentLinks, setEntertainmentLinks] = useState([]);

  const [newQuickAccessLink, setNewQuickAccessLink] = useState({ description: '', link: '' });
  const [newEntertainmentLink, setNewEntertainmentLink] = useState({ description: '', link: '' });
  const [editingLink, setEditingLink] = useState(null);

  // Fetch Quick Access Links from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'quickAccess'), (snapshot) => {
      setQuickAccessLinks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return () => unsubscribe();
  }, []);

  // Fetch Entertainment Links from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'entertainment'), (snapshot) => {
      setEntertainmentLinks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return () => unsubscribe();
  }, []);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordDocRef = doc(db, 'admin', 'passwordHash');
    const passwordDoc = await getDoc(passwordDocRef);
    const hashedPassword = await hashPassword(password);

    if (passwordDoc.exists()) {
      const correctPasswordHash = passwordDoc.data().hash;
      if (hashedPassword === correctPasswordHash) {
        setIsLoggedIn(true);
        sessionStorage.setItem('isLoggedIn', 'true');
        setError('');
      } else {
        setError('Incorrect password');
      }
    } else {
      // If password doesn't exist, this is the first login, so set the password
      await setDoc(passwordDocRef, { hash: hashedPassword });
      setIsLoggedIn(true);
      sessionStorage.setItem('isLoggedIn', 'true');
      setError('');
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

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setPassword('');
  };

  useEffect(() => {
    const loggedIn = sessionStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleAddLink = async (type) => {
    if (type === 'quickAccess') {
      if (newQuickAccessLink.description && newQuickAccessLink.link) {
        await addDoc(collection(db, 'quickAccess'), newQuickAccessLink);
        setNewQuickAccessLink({ description: '', link: '' });
      }
    } else if (type === 'entertainment') {
      if (newEntertainmentLink.description && newEntertainmentLink.link) {
        await addDoc(collection(db, 'entertainment'), newEntertainmentLink);
        setNewEntertainmentLink({ description: '', link: '' });
      }
    }
  };

  const handleDeleteLink = async (type, id) => {
    if (type === 'quickAccess') {
      await deleteDoc(doc(db, 'quickAccess', id));
    } else if (type === 'entertainment') {
      await deleteDoc(doc(db, 'entertainment', id));
    }
  };

  const handleEditLink = (link) => {
    setEditingLink({ ...link });
  };

  const handleUpdateLink = async (type) => {
    if (editingLink) {
      const linkDocRef = doc(db, type, editingLink.id);
      await updateDoc(linkDocRef, { description: editingLink.description, link: editingLink.link });
      setEditingLink(null);
      toast.success('Link updated successfully!');
    }
  };

  const handleCancelEdit = () => {
    setEditingLink(null);
  };

  if (isLoggedIn) {
    return (
      <div className="admin-page">
        <Toaster />
        <AdminNavbar handleLogout={handleLogout} />
        <div className="admin-content section-container">
          <h1>Admin Page</h1>
          <details open>
            <summary>Quick Access</summary>
            <div className="table-container">
              <table className="links-table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Link</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {quickAccessLinks.map((link) => (
                    <tr key={link.id}>
                      {editingLink && editingLink.id === link.id ? (
                        <>
                          <td><input type="text" value={editingLink.description} onChange={(e) => setEditingLink({ ...editingLink, description: e.target.value })} /></td>
                          <td><input type="text" value={editingLink.link} onChange={(e) => setEditingLink({ ...editingLink, link: e.target.value })} /></td>
                          <td>
                            <button onClick={() => handleUpdateLink('quickAccess')} className="save-button">Save</button>
                            <button onClick={handleCancelEdit} className="cancel-button">Cancel</button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td>{link.description}</td>
                          <td><a href={link.link} target="_blank" rel="noopener noreferrer">{link.link}</a></td>
                          <td>
                            <button onClick={() => handleEditLink(link)} className="edit-button">Edit</button>
                            <button onClick={() => handleDeleteLink('quickAccess', link.id)} className="delete-button">Delete</button>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="add-link-form">
              <input
                type="text"
                placeholder="Description"
                value={newQuickAccessLink.description}
                onChange={(e) => setNewQuickAccessLink({ ...newQuickAccessLink, description: e.target.value })}
              />
              <input
                type="text"
                placeholder="Link"
                value={newQuickAccessLink.link}
                onChange={(e) => setNewQuickAccessLink({ ...newQuickAccessLink, link: e.target.value })}
              />
              <button onClick={() => handleAddLink('quickAccess')}>Add Link</button>
            </div>
          </details>
          <details>
            <summary>Entertainment</summary>
            <div className="table-container">
              <table className="links-table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Link</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {entertainmentLinks.map((link) => (
                    <tr key={link.id}>
                      {editingLink && editingLink.id === link.id ? (
                        <>
                          <td><input type="text" value={editingLink.description} onChange={(e) => setEditingLink({ ...editingLink, description: e.target.value })} /></td>
                          <td><input type="text" value={editingLink.link} onChange={(e) => setEditingLink({ ...editingLink, link: e.target.value })} /></td>
                          <td>
                            <button onClick={() => handleUpdateLink('entertainment')} className="save-button">Save</button>
                            <button onClick={handleCancelEdit} className="cancel-button">Cancel</button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td>{link.description}</td>
                          <td><a href={link.link} target="_blank" rel="noopener noreferrer">{link.link}</a></td>
                          <td>
                            <button onClick={() => handleEditLink(link)} className="edit-button">Edit</button>
                            <button onClick={() => handleDeleteLink('entertainment', link.id)} className="delete-button">Delete</button>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="add-link-form">
              <input
                type="text"
                placeholder="Description"
                value={newEntertainmentLink.description}
                onChange={(e) => setNewEntertainmentLink({ ...newEntertainmentLink, description: e.target.value })}
              />
              <input
                type="text"
                placeholder="Link"
                value={newEntertainmentLink.link}
                onChange={(e) => setNewEntertainmentLink({ ...newEntertainmentLink, link: e.target.value })}
              />
              <button onClick={() => handleAddLink('entertainment')}>Add Link</button>
            </div>
          </details>
        </div>
        <Footer />
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