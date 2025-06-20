
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import AboutMe from './pages/AboutMe.jsx'
import SideProject from './pages/SideProject.jsx'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to /predict */}
        <Route path="/" element={<Navigate to="/landing" replace />} />
        <Route path="/landing" element={<LandingPage/>} />
        <Route path="/about" element={<AboutMe/>} />
        <Route path="/sideproject" element={<SideProject/>} />

        {/* later you can add more pages here */}
      </Routes>
    </BrowserRouter>
  )
}


export default App

