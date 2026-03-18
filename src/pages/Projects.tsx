const projects = [
  {
    title: 'Sound Identification and Classification in Real Time',
    subtitle: 'M.Tech Final Year Project',
    period: 'Dec 2024',
    description:
      'Processes live CCTV, video, or audio input to detect a defined sound class and count how many times it occurs in the raw audio stream.',
    points: [
      'Built around the UrbanSound8K dataset with 8732 labeled sound clips across 10 urban sound classes.',
      'Focused on real-time inference for sound-event monitoring and analysis.',
      'Further enhancement under the supervision of Dr. Sunita Dhavale.',
    ],
    tags: ['Python', 'Deep Learning', 'UrbanSound8K', 'Audio Classification', 'AI'],
  },
  {
    title: 'SMACS IoT Project',
    subtitle: 'M.Tech 2nd Semester Mini Project',
    period: 'Apr 2024',
    description:
      'Created a Smart Monitoring and Control System using IoT for real-time monitoring and efficient device control.',
    points: [
      'Integrated ThingSpeak for live monitoring and visualization.',
      'Used Python, IoT sensors, and analytics workflows for data management.',
      'Designed for practical resource utilization and monitoring use cases.',
    ],
    tags: ['IoT', 'ThingSpeak', 'Python', 'Sensors', 'Data Visualization'],
  },
  {
    title: 'School Management System',
    subtitle: 'B.Tech Final Year Project',
    period: 'Apr 2024',
    description:
      'Developed a web platform to streamline administrative tasks for educational institutions.',
    points: [
      'Implemented student and teacher management, attendance tracking, and academic records.',
      'Built with HTML, CSS, JavaScript, Bootstrap, PHP, CodeIgniter3, and MySQL.',
      'Aligned closely with real institutional workflow needs.',
    ],
    tags: ['PHP', 'CodeIgniter3', 'MySQL', 'Bootstrap', 'Web Development'],
  },
]

export default function Projects() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Projects</p>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Selected projects from AI, IoT, and web development</h2>
          <p className="text-lg leading-8 text-slate-300">
            These projects reflect my work across real-time AI systems, connected devices, and full-stack software for
            practical use cases.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5"
            >
              <div className="bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-950/80">Project {index + 1}</p>
                <h3 className="mt-3 text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-2 text-sm text-blue-50">{project.subtitle}</p>
                <p className="mt-4 inline-flex rounded-full bg-slate-950/30 px-3 py-1 text-sm text-white">
                  {project.period}
                </p>
              </div>

              <div className="p-6">
                <p className="mb-5 leading-7 text-slate-300">{project.description}</p>

                <ul className="mb-6 space-y-3 text-sm leading-6 text-slate-400">
                  {project.points.map((point) => (
                    <li key={point} className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3">
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
