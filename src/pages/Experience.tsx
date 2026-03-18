export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: 'Led development of multiple web applications, mentored junior developers, and implemented best practices for code quality and performance.',
      highlights: ['React & Node.js', 'Team Leadership', 'Code Review', 'Architecture Design']
    },
    {
      id: 2,
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: 'Developed and maintained web applications for various clients, implemented new features, and optimized application performance.',
      highlights: ['React', 'Express.js', 'MongoDB', 'AWS Deployment']
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'Creative Web Studios',
      period: '2018 - 2020',
      description: 'Built responsive user interfaces, worked on component design, and collaborated with UI/UX designers.',
      highlights: ['React', 'CSS/Tailwind', 'Responsive Design', 'Component Libraries']
    },
    {
      id: 4,
      title: 'Junior Web Developer',
      company: 'StartUp Hub',
      period: '2017 - 2018',
      description: 'Started my professional journey, worked on various projects, and learned industry best practices.',
      highlights: ['JavaScript', 'HTML/CSS', 'jQuery', 'API Integration']
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Experience
        </h1>
        <p className="text-gray-400 mb-12 text-lg">My professional journey in web development</p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-1 h-16 bg-gradient-to-b from-blue-400 to-transparent"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-16 h-16 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="ml-32 bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <span className="text-blue-400 font-semibold">{exp.period}</span>
                </div>

                <p className="text-purple-400 font-semibold mb-3">{exp.company}</p>
                <p className="text-gray-300 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="text-sm bg-gray-700 text-blue-300 px-3 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16 pt-12 border-t border-gray-700">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">Education</h2>

          <div className="space-y-6">
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-2">Bachelor of Science in Computer Science</h3>
              <p className="text-purple-400 font-semibold mb-2">University of Technology</p>
              <p className="text-gray-400">Graduated: 2016</p>
            </div>

            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-2">Advanced Web Development Certificate</h3>
              <p className="text-purple-400 font-semibold mb-2">Online Learning Platform</p>
              <p className="text-gray-400">Completed: 2018</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
