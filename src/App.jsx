import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from '../pages/LandingPage.jsx'
import AboutMe from '../pages/AboutMe.jsx'
import SideProject from '../pages/SideProject.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/landing" replace />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/sideproject" element={<SideProject />} />
      </Routes>
    </Router>
  )
}
export default App