import profilePhoto from '../assets/photo.jpg'
import resumePdf from '../assets/Shivam_DIAT_Resume_7_April_26.pdf'
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-16">
      <div className="w-full max-w-6xl">
        <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-blue-950/20 backdrop-blur md:grid-cols-[1.3fr_0.9fr] md:p-12">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              M.Tech CSE (Artificial Intelligence)
            </p>
            <h1 className="mb-5 pb-2 leading-[1.08] bg-gradient-to-r from-white via-blue-100 to-purple-300 bg-clip-text text-5xl font-black tracking-tight text-transparent md:text-7xl">
              Shivam Sengar
            </h1>
            <p className="mb-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              AI/ML engineer and educator with hands-on experience in computer vision, RAG pipelines, and real-time
              sound analytics. I combine research, teaching, and deployment-focused development to build practical AI
              systems for production and academic use.
            </p>

            <div className="mb-8 flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-2">
                Defence Institute of Advanced Technology, Pune
              </span>
              <span className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-2">
                CGPA 8.18
              </span>
              <span className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-2">
                AI | ML | RAG | Computer Vision
              </span>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-7 py-3 font-semibold text-white transition hover:bg-blue-400"
              >
                View Projects
              </a>
              <a
                href={resumePdf}
                download="Shivam_DIAT_Resume_7_April_26.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-500/10 px-7 py-3 font-semibold text-emerald-200 transition hover:bg-emerald-500/20"
              >
                <FaDownload /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-blue-300/40 px-7 py-3 font-semibold text-blue-200 transition hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-6">
            <div className="mb-6 rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-4">
              <div className="mx-auto w-fit rounded-full bg-gradient-to-br from-blue-500/40 via-cyan-400/20 to-purple-500/30 p-2 shadow-[0_0_60px_rgba(56,189,248,0.25)]">
                <div className="overflow-hidden rounded-full border border-white/20">
                  <img
                    src={profilePhoto}
                    alt="Portrait of Shivam Sengar"
                    className="h-64 w-64 object-cover object-top md:h-72 md:w-72"
                  />
                </div>
              </div>
            </div>
            <div className="mb-6 overflow-hidden rounded-2xl border border-emerald-300/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
              Tip: use the Resume button to download my latest profile.
            </div>
            <h2 className="mb-6 text-2xl font-bold text-white">Quick Profile</h2>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-start gap-3">
                <FaPhone className="mt-1 text-blue-300" />
                <div>
                  <p className="text-sm uppercase tracking-wide text-slate-500">Phone</p>
                  <p>+91 7599245115</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-blue-300" />
                <div>
                  <p className="text-sm uppercase tracking-wide text-slate-500">Email</p>
                  <p>shivamswngar4321@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-300" />
                <div>
                  <p className="text-sm uppercase tracking-wide text-slate-500">Location</p>
                  <p>Aligarh, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <a
                href="https://github.com/shivamsengar135"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition hover:border-blue-400 hover:text-blue-300"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/shivamsengar135/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition hover:border-blue-400 hover:text-blue-300"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl bg-blue-500/10 px-4 py-4">
                <div className="text-3xl font-bold text-blue-300">4+</div>
                <p className="mt-1 text-sm text-slate-400">Core Roles</p>
              </div>
              <div className="rounded-2xl bg-purple-500/10 px-4 py-4">
                <div className="text-3xl font-bold text-purple-300">3</div>
                <p className="mt-1 text-sm text-slate-400">Highlighted Projects</p>
              </div>
              <div className="rounded-2xl bg-emerald-500/10 px-4 py-4">
                <div className="text-3xl font-bold text-emerald-300">2</div>
                <p className="mt-1 text-sm text-slate-400">Research Milestones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
