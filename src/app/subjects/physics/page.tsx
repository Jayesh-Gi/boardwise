
const chapters = [
  { number: "01", name: "Electric Charges and Fields", topic: "Electrostatics", icon: "⚡", slug: "electric-charges-and-fields" },
  { number: "02", name: "Electrostatic Potential and Capacitance", topic: "Electrostatics", icon: "🔋", slug: "electrostatic-potential-and-capacitance" },
  { number: "03", name: "Current Electricity", topic: "Electricity", icon: "💡", slug: "current-electricity" },
  { number: "04", name: "Moving Charges and Magnetism", topic: "Magnetism", icon: "🧲", slug: "moving-charges-and-magnetism" },
  { number: "05", name: "Magnetism and Matter", topic: "Magnetism", icon: "🧭", slug: "magnetism-and-matter" },
  { number: "06", name: "Electromagnetic Induction", topic: "Electromagnetism", icon: "🔌", slug: "electromagnetic-induction" },
  { number: "07", name: "Alternating Current", topic: "Electromagnetism", icon: "〰️", slug: "alternating-current" },
  { number: "08", name: "Electromagnetic Waves", topic: "Waves", icon: "📡", slug: "electromagnetic-waves" },
  { number: "09", name: "Ray Optics and Optical Instruments", topic: "Optics", icon: "🔭", slug: "ray-optics-and-optical-instruments" },
  { number: "10", name: "Wave Optics", topic: "Optics", icon: "🌈", slug: "wave-optics" },
  { number: "11", name: "Dual Nature of Radiation and Matter", topic: "Modern Physics", icon: "☀️", slug: "dual-nature-of-radiation-and-matter" },
  { number: "12", name: "Atoms", topic: "Modern Physics", icon: "⚛️", slug: "atoms" },
  { number: "13", name: "Nuclei", topic: "Modern Physics", icon: "☢️", slug: "nuclei" },
  { number: "14", name: "Semiconductor Electronics", topic: "Electronics", icon: "💻", slug: "semiconductor-electronics" },
];

export default function PhysicsPage() {
  return (
    <main className="min-h-screen bg-[#080d19] px-6 py-8 text-white md:px-12">
      <div className="mx-auto max-w-6xl">
        <a href="/" className="text-sm text-cyan-300 hover:text-white">
          ← Back to BOARDWISE
        </a>

        <section className="mt-12 rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-blue-950 via-slate-900 to-[#080d19] p-8 md:p-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            CLASS 12 • CBSE
          </p>
          <h1 className="mt-5 text-4xl font-black md:text-6xl">
            Physics <span className="text-cyan-400">⚛️</span>
          </h1>
          <p className="mt-5 max-w-xl leading-7 text-slate-400">
            Understand the laws of nature. Explore concepts, master
            numericals and prepare confidently for your board examination.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#chapters" className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-300">
              Explore Chapters →
            </a>
            <a href="#resources" className="rounded-xl border border-slate-600 px-6 py-3 font-semibold hover:bg-slate-800">
              Study Resources
            </a>
          </div>
        </section>

        <section className="my-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["14", "Listed chapters"],
            ["Notes", "Study material"],
            ["MCQs", "Practice questions"],
            ["PYQs", "Past papers"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p className="text-2xl font-black text-cyan-300">{value}</p>
              <p className="mt-2 text-sm text-slate-400">{label}</p>
            </div>
          ))}
        </section>

        <section id="chapters" className="py-8">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            THE SYLLABUS
          </p>
          <h2 className="mt-3 text-3xl font-black">Explore Chapters</h2>
          <p className="mt-3 text-slate-400">
            Choose a chapter to begin your preparation.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {chapters.map((chapter) => (
              <a
                key={chapter.number}
                href={`/subjects/physics/${chapter.slug}`}
                className="group block rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/[0.05]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl">
                    {chapter.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-cyan-400">
                      CHAPTER {chapter.number}
                    </p>
                    <h3 className="mt-1 font-bold leading-6">
                      {chapter.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      {chapter.topic}
                    </p>
                  </div>
                  <span className="text-xl text-slate-500 transition group-hover:text-cyan-300">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>

          <p className="mt-5 text-xs text-slate-500">
            Chapter list is a starting structure. We will verify it against
            the applicable CBSE syllabus before adding study content.
          </p>
        </section>

        <section id="resources" className="my-12 rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-black">Your Study Toolkit</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ["📘", "Chapter Notes", "Understand every concept."],
              ["🧮", "Numerical Practice", "Improve problem-solving."],
              ["📝", "Mock Tests", "Prepare for the exam."],
            ].map(([icon, title, description]) => (
              <div key={title} className="rounded-xl bg-slate-800/60 p-5">
                <p className="text-3xl">{icon}</p>
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-2 text-sm text-slate-400">{description}</p>
                <p className="mt-4 text-xs text-cyan-300">Coming soon</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
          BOARDWISE. • Learn. Practice. Succeed.
        </footer>
      </div>
    </main>
  );
}
