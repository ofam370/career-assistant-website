import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* HERO */}
      <main>
        <section className="hero">
          <div className="hero-text">
            <h1>
              YOUR PATH.<br />
              OUR SUPPORT.<br />
              <span>A BRIGHTER FUTURE.</span>
            </h1>

            <p>
              Explore career pathways, find opportunities, access resources,
              and connect with mentors — all in one place.
            </p>

            <Link to="/careers">
              <button className="get-started">
                Get Started →
              </button>
            </Link>
          </div>

          <div className="hero-art">
            <div className="student-icon">🎓</div>
            <h2>Build Your Future</h2>
            <p>Discover opportunities made for you.</p>
          </div>
        </section>

        {/* FEATURE CARDS */}
        <section className="features">

          <div className="feature-card">
            <div className="icon">💼</div>
            <h3>Career Pathways</h3>
            <p>Explore careers that match your interests and major.</p>
          </div>

          <div className="feature-card">
            <div className="icon">📄</div>
            <h3>Internships</h3>
            <p>Find opportunities to gain real-world experience.</p>
          </div>

          <div className="feature-card">
            <div className="icon">📚</div>
            <h3>Learning Resources</h3>
            <p>Build skills and prepare for your future career.</p>
          </div>

          <div className="feature-card">
            <div className="icon">👥</div>
            <h3>Mentorship</h3>
            <p>Connect with mentors for guidance and support.</p>
          </div>

          <div className="feature-card">
            <div className="icon">♥</div>
            <h3>Student Support</h3>
            <p>Find services and resources when you need help.</p>
          </div>

        </section>
      </main>
    </>
  )
}

export default Home