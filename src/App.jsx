import JobDetails from './pages/JobDetails'
import CareerDetails from './pages/CareerDetails'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Careers from './pages/Careers'
import './App.css'

function App() {
  return (
    <div className="website">

      {/* NAVIGATION */}
      <header className="navbar">
        <div className="brand">
          <div className="logo-circle">ACDC</div>

          <div>
            <h3>ASIAN COMMUNITY</h3>
            <p>DEVELOPMENT CENTER</p>
          </div>
        </div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/careers">Explore Careers</Link>
          <a href="#">Internships</a>
          <a href="#">Resources</a>
          <a href="#">Mentorship</a>
          <a href="#">Support</a>
        </nav>

        <div className="profile">👤</div>
      </header>

      {/* PAGES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:careerId" element={<CareerDetails />} />
        <Route path="/jobs/:jobId" element={<JobDetails />} />
      </Routes>

    </div>
  )
}

export default App