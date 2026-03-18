import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { SiHackerrank } from 'react-icons/si'

const links = [
  { label: 'GitHub', href: 'https://github.com/shivamsengar135', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivamsengar135/', icon: FaLinkedin },
  { label: 'HackerRank', href: 'https://www.hackerrank.com/profile/shivamswngar4321', icon: SiHackerrank },
]

export default function Contact() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Contact</p>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Let&apos;s connect</h2>
          <p className="text-lg leading-8 text-slate-300">
            I&apos;m open to AI, ML, research, academic, and software development opportunities. You can reach me by
            phone, email, or through my coding profiles.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-xl text-blue-300">
              <FaPhone />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Phone</h3>
            <p className="text-slate-300">+91 7599245115</p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/15 text-xl text-purple-300">
              <FaEnvelope />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Email</h3>
            <a href="mailto:shivamswngar4321@gmail.com" className="text-slate-300 transition hover:text-blue-300">
              shivamswngar4321@gmail.com
            </a>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-xl text-emerald-300">
              <FaMapMarkerAlt />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Location</h3>
            <p className="text-slate-300">Aligarh, Uttar Pradesh</p>
          </div>
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
          <h3 className="mb-6 text-2xl font-bold text-white">Profiles</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {links.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-slate-200 transition hover:border-blue-400 hover:text-blue-300"
              >
                <Icon className="text-xl" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
