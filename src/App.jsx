
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import AboutMe from './pages/AboutMe.jsx'
import SideProject from './pages/SideProject.jsx'
import IntroPage from './pages/IntroPage.jsx'
import './App.css'


function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Redirect root to /predict */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/landing" element={<LandingPage/>} />
        <Route path="/about" element={<AboutMe/>} />
        <Route path="/sideproject" element={<SideProject/>} />
        <Route path="/home" element={<IntroPage/>} />

        {/* later you can add more pages here */}
      </Routes>
    </HashRouter>
  )
}


export default App

