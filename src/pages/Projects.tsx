import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const defaultProjectLink = 'https://github.com/shivamsengar135?tab=repositories'

const projects = [
  {
    title: 'Object Detection using YOLO with Django',
    subtitle: 'Deployed Full-Stack AI Web Application',
    period: '2025',
    description:
      'Developed and deployed a production-ready Django application on Render for object detection workflows.',
    points: [
      'Implemented core backend functionalities including routing, request handling, and web integration.',
      'Designed live detection workflow with time-bound access behavior for practical demo use.',
      'Source code is publicly available for collaboration and reference.',
    ],
    tags: ['Django', 'YOLO', 'Computer Vision', 'Render', 'Python'],
    link: 'https://object-detection-using-yolo-with-django.onrender.com/',
    githubLink: 'https://github.com/shivamsengar135/Object-Detection-using-YOLO-with-Django',
  },
  {
    title: 'Local RAG Pipeline',
    subtitle: 'Retrieval-Augmented Generation with LangChain',
    period: '2025',
    description:
      'Implemented a local Retrieval-Augmented Generation pipeline using LangChain for document-grounded responses.',
    points: [
      'Built retrieval and response generation flow for local knowledge sources.',
      'Focused on practical RAG architecture and reliable context retrieval.',
      'Code is available publicly on GitHub for extension and reuse.',
    ],
    tags: ['RAG', 'LangChain', 'LLM', 'Python', 'NLP'],
    link: 'https://github.com/shivamsengar135/Local-RAG-Pipeline',
    githubLink: 'https://github.com/shivamsengar135/Local-RAG-Pipeline',
  },
  {
    title: 'Sound Identification and Classification in Real Time',
    subtitle: 'M.Tech Final Year AI Project',
    period: '2025',
    description:
      'Processes live CCTV, video, or audio input to detect a defined sound class and count how many times it occurs in the raw audio stream.',
    points: [
      'Built around the UrbanSound8K dataset with 8732 labeled sound clips across 10 urban sound classes.',
      'Focused on real-time inference for sound-event monitoring and analysis.',
      'Further enhancement under the supervision of Dr. Sunita Dhavale.',
    ],
    tags: ['Audio AI', 'Deep Learning', 'UrbanSound8K', 'Real-Time Inference', 'CCTV'],
    link: 'https://doi.org/10.56975/ijrti.v10i6.204539',
    githubLink: '',
  },
]

export default function Projects() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Projects</p>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Selected projects across AI deployment and research</h2>
          <p className="text-lg leading-8 text-slate-300">
            These projects reflect my work on real-world AI applications, including deployed computer vision systems,
            LLM pipelines, and research-focused sound intelligence.
          </p>
          <a
            href={defaultProjectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-400/20"
          >
            View All Project Links <FaExternalLinkAlt />
          </a>
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

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-400/20"
                  >
                    Live Demo <FaExternalLinkAlt />
                  </a>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300/30 bg-slate-500/10 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-200 hover:bg-slate-500/20"
                    >
                      GitHub <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
