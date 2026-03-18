import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce platform with product catalog, shopping cart, and payment integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'Shop',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team collaboration features.',
      tags: ['React', 'Firebase', 'Tailwind', 'WebSockets'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'Task',
    },
    {
      id: 3,
      title: 'AI Chat Assistant',
      description: 'Intelligent chat assistant powered by OpenAI API with conversation memory and custom prompts.',
      tags: ['React', 'Node.js', 'OpenAI', 'Express'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'AI',
    },
    {
      id: 4,
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard with real-time data visualization and analytics for business metrics.',
      tags: ['React', 'D3.js', 'TypeScript', 'Redux'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'Data',
    },
    {
      id: 5,
      title: 'Weather App',
      description: 'Real-time weather application with location-based forecasts and beautiful UI.',
      tags: ['React', 'OpenWeather API', 'Tailwind'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'Weather',
    },
    {
      id: 6,
      title: 'Social Media Feed',
      description: 'Social media platform with posts, comments, likes, and user profiles.',
      tags: ['React', 'Firebase', 'Authentication'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'Social',
    },
  ]

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          My Projects
        </h1>
        <p className="mb-12 text-lg text-gray-400">Explore some of my recent work and side projects</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-lg border border-gray-700 bg-gray-800/50 transition hover:border-blue-400"
            >
              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 text-4xl font-bold group-hover:scale-110 transition">
                {project.image}
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
                <p className="mb-4 text-sm text-gray-400">{project.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded bg-gray-700 px-2 py-1 text-xs text-blue-400">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 transition hover:text-blue-400"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 transition hover:text-blue-400"
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
