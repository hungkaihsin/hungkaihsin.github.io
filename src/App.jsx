import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;