const education = [
  {
    qualification: 'M.Tech CSE (Artificial Intelligence)',
    institute: 'Defence Institute of Advanced Technology, Pune, Maharashtra',
    year: '2023-25',
    score: '8.18 CGPA',
  },
  {
    qualification: 'B.Tech CSE',
    institute: 'KMCLU, Lucknow, Uttar Pradesh',
    year: '2019-23',
    score: '9.24 CGPA',
  },
  {
    qualification: '12th',
    institute: 'Kendriya Vidyalaya, Aligarh, Uttar Pradesh',
    year: '2018',
    score: '72.2%',
  },
  {
    qualification: '10th',
    institute: 'Kendriya Vidyalaya, Lalgarh Jattan, Shriganganagar, Rajasthan',
    year: '2016',
    score: '10 CGPA',
  },
]

export default function About() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">About</p>
          <h2 className="mb-5 text-4xl font-bold text-white md:text-5xl">Academic foundation with applied AI experience</h2>
          <p className="text-lg leading-8 text-slate-300">
            I am pursuing my M.Tech in Computer Science and Engineering with a specialization in Artificial
            Intelligence at DIAT Pune, an autonomous institution under DU and DRDO. My work blends academic research,
            practical engineering, teaching, and product development across AI, machine learning, backend systems,
            and IoT.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="mb-6 text-2xl font-bold text-white">Education</h3>
            <div className="space-y-4">
              {education.map((item) => (
                <div key={item.qualification} className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-white">{item.qualification}</h4>
                      <p className="text-slate-300">{item.institute}</p>
                    </div>
                    <div className="text-sm text-slate-400 md:text-right">
                      <p>{item.year}</p>
                      <p className="font-semibold text-blue-300">{item.score}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-white/10 bg-blue-500/10 p-6">
              <h3 className="mb-4 text-2xl font-bold text-white">Current Focus</h3>
              <ul className="space-y-3 text-slate-200">
                <li>Real-time sound identification and classification</li>
                <li>Computer vision systems for detection and monitoring</li>
                <li>AI incident response and automation workflows</li>
                <li>Applied machine learning for research and deployment</li>
              </ul>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 text-2xl font-bold text-white">Highlights</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-950/70 p-4">
                  <div className="text-3xl font-bold text-blue-300">8.18</div>
                  <p className="mt-1 text-slate-400">M.Tech CGPA</p>
                </div>
                <div className="rounded-2xl bg-slate-950/70 p-4">
                  <div className="text-3xl font-bold text-purple-300">9.24</div>
                  <p className="mt-1 text-slate-400">B.Tech CGPA</p>
                </div>
                <div className="rounded-2xl bg-slate-950/70 p-4">
                  <div className="text-3xl font-bold text-emerald-300">1</div>
                  <p className="mt-1 text-slate-400">Journal Publication</p>
                </div>
                <div className="rounded-2xl bg-slate-950/70 p-4">
                  <div className="text-3xl font-bold text-amber-300">1</div>
                  <p className="mt-1 text-slate-400">Conference Acceptance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
