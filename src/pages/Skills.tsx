export default function Skills() {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'State Management']
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'SQL', 'RESTful APIs']
    },
    {
      name: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub Actions']
    },
    {
      name: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Redis', 'GraphQL']
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Skills & Expertise
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">{category.name}</h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">Proficiency Levels</h2>
          
          <div className="space-y-6">
            {[
              { name: 'React & TypeScript', level: 95 },
              { name: 'JavaScript', level: 95 },
              { name: 'Tailwind CSS', level: 90 },
              { name: 'Node.js & Express', level: 85 },
              { name: 'Database Design', level: 85 },
              { name: 'DevOps & Deployment', level: 80 }
            ].map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-300">{skill.name}</span>
                  <span className="text-blue-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
