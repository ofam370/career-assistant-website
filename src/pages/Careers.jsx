import './Careers.css'
import { useNavigate } from 'react-router-dom'

function Careers() {
  const navigate = useNavigate()
  const careers = [
    {
      icon: '💻',
      title: 'Information Technology',
      description: 'Explore careers in IT, cybersecurity, networking, and technical support.'
    },
    {
      icon: '📊',
      title: 'Business',
      description: 'Discover careers in management, finance, entrepreneurship, and operations.'
    },
    {
      icon: '📣',
      title: 'Communication',
      description: 'Explore careers in media, public relations, journalism, and communication.'
    },
    {
      icon: '🎨',
      title: 'UX/UI Design',
      description: 'Discover careers creating useful and engaging digital experiences.'
    },
    {
      icon: '📈',
      title: 'Marketing',
      description: 'Explore careers in digital marketing, branding, advertising, and social media.'
    },
    {
      icon: '📉',
      title: 'Data Science',
      description: 'Discover careers using data, analytics, and technology to solve problems.'
    }
  ]

  return (
    <div className="careers-page">
      <section className="careers-header">
        <h1>Explore Career Pathways</h1>
        <p>
          Choose your area of interest to discover careers, skills,
          and opportunities.
        </p>
      </section>

      <section className="career-grid">
        {careers.map((career) => (
          <div className="career-card" key={career.title}>
            <div className="career-icon">{career.icon}</div>
            <h2>{career.title}</h2>
            <p>{career.description}</p>
         <button
            onClick={() =>
            navigate(`/careers/${career.title.toLowerCase().replaceAll(' ', '-')}`)
            }
>
  Explore →
        </button>
          </div>
        ))}  
      </section>
    </div>
  )
}

export default Careers