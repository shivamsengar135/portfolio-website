const experiences = [
  {
    title: 'ML Engineer Trainee',
    company: 'Upscalers Technology, Nasik, Maharashtra, India',
    period: '12 Jan 2026 - Present',
    description: 'Working on machine learning engineering tasks with a focus on applied AI workflows and model-driven solutions.',
  },
  {
    title: 'Assistant Professor Grade 1',
    company: 'Presidency University, Bangalore, Karnataka',
    period: '29 Jul 2025 - 10 Jan 2026',
    description: 'Worked in the School of Computer Science and Engineering and taught subjects including Python, Machine Learning, and Data Science.',
  },
  {
    title: 'AI Intern',
    company: 'Defence Institute of Psychological Research, DRDO, New Delhi',
    period: 'Jul 2024 - Dec 2025',
    description: 'Worked on an LSRB-sponsored project involving banner detection, fire detection, face detection, head count, and collaboration with senior DRDO scientists.',
  },
  {
    title: 'Backend Developer',
    company: 'Founder Code Technology Pvt Ltd',
    period: 'Dec 2022 - May 2023',
    description: 'Built a school management system website to streamline student and teacher management, attendance tracking, and academic records.',
  },
]

const responsibilities = [
  {
    title: 'Volunteered Various Social Service Activities',
    organization: 'NSS',
    period: 'Oct 2023',
    detail: 'Participated in cleanliness drives, elderly support, and interaction with village school children.',
  },
  {
    title: 'Athletics Sports Coordinator',
    organization: 'Spandan Annual Sports and Cultural Events',
    period: 'Feb 2024',
    detail: 'Oversaw track and field events including 100m, 200m, 400m, 4x100 relay, and 5 km marathon.',
  },
  {
    title: 'Management Team Volunteer',
    organization: 'IEEE PuneCon 2024 International Conference',
    period: 'Feb 2024',
    detail: 'Supported event management and conference operations at DIAT Pune.',
  },
]

export default function Experience() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Experience</p>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Industry, research, and teaching experience</h2>
          <p className="text-lg leading-8 text-slate-300">
            My professional journey combines AI research, teaching, backend engineering, and hands-on project work in
            academic and industry settings.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <div
              key={experience.title}
              className="grid gap-5 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 md:grid-cols-[80px_1fr]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-2xl font-bold text-white">
                {index + 1}
              </div>
              <div>
                <div className="mb-2 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
                    <p className="text-blue-300">{experience.company}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 text-sm text-slate-300">
                    {experience.period}
                  </span>
                </div>
                <p className="leading-7 text-slate-300">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
          <h3 className="mb-6 text-2xl font-bold text-white">Positions of Responsibility</h3>
          <div className="grid gap-5 md:grid-cols-3">
            {responsibilities.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-300">{item.period}</p>
                <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-slate-300">{item.organization}</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
