
import { useParams, useNavigate } from 'react-router-dom'
import './JobDetails.css'

const jobData = {
  'it-support-specialist': {
    icon: '🖥️',
    title: 'IT Support Specialist',
    description:
      'Help people solve computer, software, network, and technology problems.',
    responsibilities: [
      'Troubleshoot computer problems',
      'Install and update software',
      'Help users with technical issues',
      'Set up computers and devices',
      'Maintain basic network systems'
    ],
    skills: [
      'Troubleshooting',
      'Communication',
      'Computer Hardware',
      'Networking',
      'Problem Solving'
    ]
  },

  'network-administrator': {
    icon: '🌐',
    title: 'Network Administrator',
    description:
      'Manage and maintain computer networks so organizations can stay connected.',
    responsibilities: [
      'Maintain computer networks',
      'Configure routers and network devices',
      'Monitor network performance',
      'Troubleshoot connection problems',
      'Help protect network security'
    ],
    skills: [
      'Networking',
      'Troubleshooting',
      'Cybersecurity',
      'Communication',
      'Problem Solving'
    ]
  },

  'cybersecurity-analyst': {
    icon: '🔐',
    title: 'Cybersecurity Analyst',
    description:
      'Protect computer systems, networks, and information from security threats.',
    responsibilities: [
      'Monitor systems for security threats',
      'Investigate suspicious activity',
      'Help prevent cyber attacks',
      'Identify security weaknesses',
      'Support security policies'
    ],
    skills: [
      'Cybersecurity',
      'Network Security',
      'Risk Analysis',
      'Problem Solving',
      'Attention to Detail'
    ]
  },

  'systems-administrator': {
    icon: '⚙️',
    title: 'Systems Administrator',
    description:
      'Manage computer systems and servers that organizations depend on.',
    responsibilities: [
      'Manage servers and computer systems',
      'Create and manage user accounts',
      'Install system updates',
      'Monitor system performance',
      'Troubleshoot technical problems'
    ],
    skills: [
      'System Administration',
      'Networking',
      'Troubleshooting',
      'Security',
      'Problem Solving'
    ]
  },

  'cloud-support-specialist': {
    icon: '☁️',
    title: 'Cloud Support Specialist',
    description:
      'Help organizations manage and troubleshoot services that run in the cloud.',
    responsibilities: [
      'Support cloud-based systems',
      'Troubleshoot cloud services',
      'Monitor system performance',
      'Help users solve technical problems',
      'Maintain cloud resources'
    ],
    skills: [
      'Cloud Computing',
      'Networking',
      'Troubleshooting',
      'Security',
      'Communication'
    ]
  }
}

function JobDetails() {
  const { jobId } = useParams()
  const navigate = useNavigate()

  const job = jobData[jobId]

  if (!job) {
    return (
      <div className="job-details">
        <h1>Job not found</h1>

        <button onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>
    )
  }

  return (
    <div className="job-details">

      <button
        className="back-button"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="job-header">
        <div className="job-icon">{job.icon}</div>

        <h1>{job.title}</h1>

        <p>{job.description}</p>
      </div>

      <div className="job-info-grid">

        <div className="job-info-card">
          <h2>📋 What You’ll Do</h2>

          <ul>
            {job.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="job-info-card">
          <h2>🛠️ Skills You’ll Need</h2>

          <ul>
            {job.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  )
}

export default JobDetails