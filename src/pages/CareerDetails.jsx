import './CareerDetails.css'
import { useParams, useNavigate } from 'react-router-dom'

const careerData = {
  'information-technology': {
    icon: '💻',
    title: 'Information Technology',
    description:
      'Build and support the technology that organizations use every day.',
    jobs: [
      'IT Support Specialist',
      'Network Administrator',
      'Cybersecurity Analyst',
      'Systems Administrator',
      'Cloud Support Specialist'
    ],
    skills: [
      'Troubleshooting',
      'Networking',
      'Cybersecurity',
      'Communication',
      'Problem Solving'
    ]
  },

  business: {
    icon: '📊',
    title: 'Business',
    description:
      'Learn how organizations operate, grow, manage people, and make decisions.',
    jobs: [
      'Business Analyst',
      'Project Coordinator',
      'Operations Manager',
      'Financial Analyst',
      'Entrepreneur'
    ],
    skills: [
      'Leadership',
      'Communication',
      'Planning',
      'Teamwork',
      'Problem Solving'
    ]
  },

  communication: {
    icon: '📣',
    title: 'Communication',
    description:
      'Build skills for careers in media, public relations, journalism, and communication.',
    jobs: [
      'Public Relations Specialist',
      'Journalist',
      'Content Creator',
      'Communications Specialist',
      'Social Media Coordinator'
    ],
    skills: [
      'Writing',
      'Public Speaking',
      'Storytelling',
      'Research',
      'Digital Media'
    ]
  },

  'ux/ui-design': {
    icon: '🎨',
    title: 'UX/UI Design',
    description:
      'Design digital products that are useful, accessible, and easy to use.',
    jobs: [
      'UX Designer',
      'UI Designer',
      'Product Designer',
      'UX Researcher',
      'Web Designer'
    ],
    skills: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Visual Design',
      'Problem Solving'
    ]
  },

  marketing: {
    icon: '📈',
    title: 'Marketing',
    description:
      'Help organizations connect with audiences and promote products and services.',
    jobs: [
      'Marketing Specialist',
      'Digital Marketer',
      'Brand Coordinator',
      'Social Media Manager',
      'Market Research Analyst'
    ],
    skills: [
      'Communication',
      'Content Creation',
      'Analytics',
      'Branding',
      'Social Media'
    ]
  },

  'data-science': {
    icon: '📉',
    title: 'Data Science',
    description:
      'Use data and technology to discover patterns and help organizations make decisions.',
    jobs: [
      'Data Analyst',
      'Data Scientist',
      'Business Intelligence Analyst',
      'Database Analyst',
      'Analytics Specialist'
    ],
    skills: [
      'Data Analysis',
      'Statistics',
      'Programming',
      'Data Visualization',
      'Problem Solving'
    ]
  }
}

function CareerDetails() {
  const { careerId } = useParams()
  const navigate = useNavigate()

  const career = careerData[careerId]

  if (!career) {
    return (
      <div>
        <h1>Career not found</h1>
        <button onClick={() => navigate('/careers')}>
          Back to Careers
        </button>
      </div>
    )
  }

  return (
    <div className="career-details">
      <button onClick={() => navigate('/careers')}>
        ← Back to Careers
      </button>

      <div className="career-details-header">
        <div>{career.icon}</div>
        <h1>{career.title}</h1>
        <p>{career.description}</p>
      </div>

      <div className="details-card">
       <h2>💼 Career Options</h2>

        <ul>
        {career.jobs.map((job) => (
           <li
              key={job}
              className="job-item"
              onClick={() =>
              navigate(`/jobs/${job.toLowerCase().replaceAll(' ', '-')}`)
          }
  >
           {job} →
          </li>
))}
       </ul>
      </div>

      <div className="details-card">
        <h2>🛠️ Skills to Build</h2>
        <ul>
          {career.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CareerDetails