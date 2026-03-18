import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce platform with product catalog, shopping cart, and payment integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: '🛍️'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team collaboration features.',
      tags: ['React', 'Firebase', 'Tailwind', 'WebSockets'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: '✓'
    },
    {
      id: 3,
      title: 'AI Chat Assistant',
      description: 'Intelligent chat assistant powered by OpenAI API with conversation memory and custom prompts.',
      tags: ['React', 'Node.js', 'OpenAI', 'Express'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: '💬'
    },
    {
      id: 4,
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard with real-time data visualization and analytics for business metrics.',
      tags: ['React', 'D3.js', 'TypeScript', 'Redux'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: '📊'
    },
    {
      id: 5,
      title: 'Weather App',
      description: 'Real-time weather application with location-based forecasts and beautiful UI.',
      tags: ['React', 'OpenWeather API', 'Tailwind'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: '🌤️'
    },
    {
      id: 6,
      title: 'Social Media Feed',
      description: 'Social media platform with posts, comments, likes, and user profiles.',
      tags: ['React', 'Firebase', 'Authentication'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: '📱'
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="text-gray-400 mb-12 text-lg">Explore some of my recent work and side projects</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-400 transition group"
            >
              {/* Project Image/Icon */}
              <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-6xl group-hover:scale-110 transition">
                {project.image}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-700 text-blue-400 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
