export default function About() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          About Me
        </h1>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              I&apos;m a passionate developer with a love for creating elegant solutions to complex problems. With 5+
              years of experience in web development, I&apos;ve worked on diverse projects ranging from startups to
              enterprise applications.
            </p>

            <p className="text-lg text-gray-300">
              My journey in tech started with a curiosity about how things work. I started learning to code and never
              looked back. I&apos;m constantly learning new technologies and best practices to stay at the forefront of
              web development.
            </p>

            <p className="text-lg text-gray-300">
              When I&apos;m not coding, you can find me contributing to open-source projects, writing technical blog
              posts, or exploring new frameworks and tools.
            </p>

            <div className="pt-4">
              <h3 className="mb-4 text-2xl font-bold text-blue-400">Key Highlights</h3>
              <ul className="space-y-2 text-gray-400">
                <li>[+] Full-stack web development</li>
                <li>[+] React and TypeScript expertise</li>
                <li>[+] RESTful API design</li>
                <li>[+] Database design and optimization</li>
                <li>[+] Cloud deployment with AWS and Vercel</li>
                <li>[+] Team collaboration and mentoring</li>
              </ul>
            </div>
          </div>

          <div className="h-fit rounded-lg border border-gray-700 bg-gray-800/50 p-8">
            <h3 className="mb-8 text-2xl font-bold text-blue-400">Stats</h3>

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
