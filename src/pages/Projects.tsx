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
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.18),_transparent_45%)]" />
              <div className="relative border-b border-white/10 bg-gradient-to-br from-slate-900 via-blue-950/60 to-purple-950/50 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <p className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                    Project {index + 1}
                  </p>
                  <p className="rounded-full border border-white/20 bg-slate-950/50 px-3 py-1 text-xs font-semibold text-slate-200">
                    {project.period}
                  </p>
                </div>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{project.subtitle}</p>
              </div>

              <div className="relative p-6">
                <p className="mb-5 leading-7 text-slate-300">{project.description}</p>

                <ul className="mb-6 space-y-3 text-sm leading-6 text-slate-400">
                  {project.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 transition group-hover:border-cyan-300/20"
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-100"
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
