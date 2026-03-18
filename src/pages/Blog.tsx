import { FaAward, FaBookOpen, FaMedal } from 'react-icons/fa'

const publications = [
  {
    title: 'Classification of Urban Sound using Custom 1D and 2D CNN Architectures',
    status: 'Published on 7 Jun 2025',
    venue: 'International Journal for Research Trends and Innovation (IJRTI)',
    detail: 'DOI: 10.56975/ijrti.v10i6.204539',
  },
  {
    title: 'AI Incident Response Playbook Generator',
    status: 'Accepted',
    venue: 'IEEE IATMSI 2026',
    detail: 'Conference date: 12-14 Mar 2026',
  },
]

const achievements = [
  '4th place in 5 km marathon in Jalandhar, Punjab (2014)',
  '1st place in story telling competition (2015)',
  '1st place in story telling competition (2016)',
  'Received scholarship of INR 5000 for scoring 10 CGPA in class 10 (2016)',
  '2nd place in Kho Kho at Spandan 2024',
  '3rd place in Basketball, Volleyball, and Kabaddi at Spandan 2024',
  'Volunteered in IEEE PuneCon International Conference at DIAT Pune (2024)',
]

const hobbies = ['Running', 'Basketball', 'Lawn Tennis']

export default function Blog() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Publications</p>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Research, achievements, and beyond the classroom</h2>
          <p className="text-lg leading-8 text-slate-300">
            My academic journey includes published research, conference acceptance, competitive achievements, and active
            participation in sports and volunteering.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <div className="mb-6 flex items-center gap-3">
              <FaBookOpen className="text-2xl text-blue-300" />
              <h3 className="text-2xl font-bold text-white">Publications and Acceptance</h3>
            </div>
            <div className="space-y-4">
              {publications.map((item) => (
                <article key={item.title} className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-300">{item.status}</p>
                  <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                  <p className="mt-2 text-slate-300">{item.venue}</p>
                  <p className="mt-3 text-sm text-slate-400">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <div className="mb-6 flex items-center gap-3">
                <FaMedal className="text-2xl text-purple-300" />
                <h3 className="text-2xl font-bold text-white">Scholar Achievements</h3>
              </div>
              <ul className="space-y-3 text-slate-300">
                {achievements.map((achievement) => (
                  <li key={achievement} className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-amber-500/15 to-rose-500/10 p-6">
              <div className="mb-5 flex items-center gap-3">
                <FaAward className="text-2xl text-amber-300" />
                <h3 className="text-2xl font-bold text-white">Hobbies</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {hobbies.map((hobby) => (
                  <span
                    key={hobby}
                    className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm font-semibold text-slate-200"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
