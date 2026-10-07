import { useParams, useNavigate } from 'react-router-dom'
import './JobDetails.css'

const jobData = {
  // INFORMATION TECHNOLOGY
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
  },

  // BUSINESS
  'business-analyst': {
    icon: '📊',
    title: 'Business Analyst',
    description:
      'Help organizations understand problems, improve processes, and make better business decisions.',
    responsibilities: [
      'Analyze business needs and problems',
      'Collect and organize business information',
      'Recommend improvements to processes',
      'Work with teams and stakeholders',
      'Create reports and presentations'
    ],
    skills: [
      'Business Analysis',
      'Communication',
      'Problem Solving',
      'Data Analysis',
      'Critical Thinking'
    ]
  },

  'project-coordinator': {
    icon: '📋',
    title: 'Project Coordinator',
    description:
      'Help teams organize projects, schedules, tasks, and communication.',
    responsibilities: [
      'Track project tasks and deadlines',
      'Schedule meetings and activities',
      'Communicate with team members',
      'Prepare project documents',
      'Help keep projects organized'
    ],
    skills: [
      'Organization',
      'Communication',
      'Time Management',
      'Teamwork',
      'Problem Solving'
    ]
  },

  'operations-manager': {
    icon: '⚙️',
    title: 'Operations Manager',
    description:
      'Help organizations manage daily operations and improve how work gets done.',
    responsibilities: [
      'Manage daily business operations',
      'Improve workplace processes',
      'Coordinate employees and resources',
      'Monitor performance and goals',
      'Help solve operational problems'
    ],
    skills: [
      'Leadership',
      'Organization',
      'Communication',
      'Decision Making',
      'Problem Solving'
    ]
  },

  'financial-analyst': {
    icon: '💰',
    title: 'Financial Analyst',
    description:
      'Help organizations understand financial information and make better financial decisions.',
    responsibilities: [
      'Analyze financial data',
      'Prepare financial reports',
      'Study business costs and profits',
      'Help create budgets and forecasts',
      'Recommend financial decisions'
    ],
    skills: [
      'Financial Analysis',
      'Microsoft Excel',
      'Critical Thinking',
      'Communication',
      'Attention to Detail'
    ]
  },

  'entrepreneur': {
    icon: '🚀',
    title: 'Entrepreneur',
    description:
      'Create and manage a business by turning ideas into products or services.',
    responsibilities: [
      'Develop business ideas',
      'Create business plans',
      'Manage money and resources',
      'Promote products or services',
      'Make important business decisions'
    ],
    skills: [
      'Leadership',
      'Creativity',
      'Communication',
      'Financial Management',
      'Problem Solving'
    ]
   },

  // COMMUNICATION
  'public-relations-specialist': {
    icon: '📣',
    title: 'Public Relations Specialist',
    description:
      'Help organizations communicate with the public and build a positive reputation.',
    responsibilities: [
      'Write press releases and announcements',
      'Communicate with media organizations',
      'Help manage public events',
      'Create communication plans',
      'Build relationships with the public'
    ],
    skills: [
      'Communication',
      'Writing',
      'Public Speaking',
      'Media Relations',
      'Organization'
    ]
  },

  'journalist': {
    icon: '📰',
    title: 'Journalist',
    description:
      'Research and report stories that inform people about important events and topics.',
    responsibilities: [
      'Research news and information',
      'Interview people',
      'Write and edit stories',
      'Check facts and sources',
      'Report important events'
    ],
    skills: [
      'Writing',
      'Research',
      'Interviewing',
      'Communication',
      'Critical Thinking'
    ]
  },

  'content-creator': {
    icon: '🎥',
    title: 'Content Creator',
    description:
      'Create digital content that informs, entertains, or connects with an audience.',
    responsibilities: [
      'Create videos, photos, and written content',
      'Plan content ideas',
      'Edit digital content',
      'Publish content online',
      'Engage with audiences'
    ],
    skills: [
      'Creativity',
      'Communication',
      'Video Editing',
      'Social Media',
      'Storytelling'
    ]
  },

  'communications-specialist': {
    icon: '💬',
    title: 'Communications Specialist',
    description:
      'Help organizations share clear messages with employees, customers, and the public.',
    responsibilities: [
      'Write organizational messages',
      'Create communication materials',
      'Support communication campaigns',
      'Help manage websites and newsletters',
      'Communicate with different audiences'
    ],
    skills: [
      'Writing',
      'Communication',
      'Organization',
      'Digital Media',
      'Public Relations'
    ]
  },

  'social-media-coordinator': {
    icon: '📱',
    title: 'Social Media Coordinator',
    description:
      'Manage social media content and help organizations connect with their online audiences.',
    responsibilities: [
      'Create social media posts',
      'Schedule and publish content',
      'Respond to audience interactions',
      'Track social media performance',
      'Help plan social media campaigns'
    ],
    skills: [
      'Social Media',
      'Content Creation',
      'Communication',
      'Creativity',
      'Analytics'
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