export default function About() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg">
              I'm a passionate developer with a love for creating elegant solutions to complex problems. With 5+ years of experience in web development, I've worked on diverse projects ranging from startups to enterprise applications.
            </p>

            <p className="text-gray-300 text-lg">
              My journey in tech started with a curiosity about how things work. I started learning to code and never looked back. I'm constantly learning new technologies and best practices to stay at the forefront of web development.
            </p>

            <p className="text-gray-300 text-lg">
              When I'm not coding, you can find me contributing to open-source projects, writing technical blog posts, or exploring new frameworks and tools.
            </p>

            <div className="pt-4">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Key Highlights</h3>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Full-stack web development</li>
                <li>✓ React & TypeScript expertise</li>
                <li>✓ RESTful API design</li>
                <li>✓ Database design & optimization</li>
                <li>✓ Cloud deployment (AWS, Vercel)</li>
                <li>✓ Team collaboration & mentoring</li>
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8 border border-gray-700 h-fit">
            <h3 className="text-2xl font-bold text-blue-400 mb-8">Stats</h3>
            
            <div className="space-y-6">
              <div>
                <div className="text-4xl font-bold text-blue-400">5+</div>
                <p className="text-gray-400">Years of Experience</p>
              </div>

              <div>
                <div className="text-4xl font-bold text-purple-400">20+</div>
                <p className="text-gray-400">Projects Completed</p>
              </div>

              <div>
                <div className="text-4xl font-bold text-green-400">10+</div>
                <p className="text-gray-400">Clients Worked With</p>
              </div>

              <div>
                <div className="text-4xl font-bold text-pink-400">100%</div>
                <p className="text-gray-400">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
