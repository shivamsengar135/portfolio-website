const skillCategories = [
  {
    name: 'AI Skills',
    skills: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision', 'TensorFlow', 'Keras', 'Pandas', 'NumPy', 'Matplotlib', 'RAG', 'LangChain'],
  },
  {
    name: 'Programming Languages',
    skills: ['Python', 'Tkinter', 'PIL', 'CSV Handling', 'R', 'C++'],
  },
  {
    name: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Django', 'CodeIgniter4'],
  },
  {
    name: 'Tools, Database, and Platforms',
    skills: ['MySQL', 'Visual Studio Code', 'RStudio', 'PyCharm', 'Jupyter Notebook', 'IoT', 'Unity (VR/AR)', 'Blockchain', 'Solidity', 'Ganache'],
  },
]

const courses = [
  'Artificial Intelligence',
  'Machine Learning',
  'Deep Learning',
  'Computer Vision',
  'Natural Language Processing',
  'Big Data',
  'Software Engineering and System Modelling',
  'IoT',
  'Virtual Reality',
  'Blockchain',
  'Network and Cloud Security',
  'C Programming',
  'DSA',
  'Engineering Mathematics',
  'Digital Logic',
  'Computer Organization and Architecture',
  'Algorithms',
  'Compiler Design',
  'Programming and Data Structures',
  'Databases',
  'Discrete Mathematics',
  'Operating Systems',
  'Computer Networks',
  'Software Engineering',
  'Networking Technologies',
  'Computer Graphics',
  'Cloud Computing',
  'Digital Image Processing',
  'Cryptography',
]

export default function Skills() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Skills</p>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Technical stack built through research and delivery</h2>
          <p className="text-lg leading-8 text-slate-300">
            My work spans AI, backend development, data analysis, and academic problem solving. I am most comfortable
            building with Python-based ML workflows while also developing web systems and data-driven applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.name} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <h3 className="mb-5 text-2xl font-bold text-white">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
          <h3 className="mb-5 text-2xl font-bold text-white">Academic Courses</h3>
          <div className="flex flex-wrap gap-3">
            {courses.map((course) => (
              <span
                key={course}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
