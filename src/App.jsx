import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

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