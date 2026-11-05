
const chapters = [
  { number: "01", name: "Relations and Functions", topic: "Algebra", icon: "🔗" },
  { number: "02", name: "Inverse Trigonometric Functions", topic: "Algebra", icon: "📐" },
  { number: "03", name: "Matrices", topic: "Algebra", icon: "🔢" },
  { number: "04", name: "Determinants", topic: "Algebra", icon: "➗" },
  { number: "05", name: "Continuity and Differentiability", topic: "Calculus", icon: "📈" },
  { number: "06", name: "Applications of Derivatives", topic: "Calculus", icon: "📊" },
  { number: "07", name: "Integrals", topic: "Calculus", icon: "∫" },
  { number: "08", name: "Applications of Integrals", topic: "Calculus", icon: "📉" },
  { number: "09", name: "Differential Equations", topic: "Calculus", icon: "🧮" },
  { number: "10", name: "Vector Algebra", topic: "Vectors and 3D Geometry", icon: "➡️" },
  { number: "11", name: "Three Dimensional Geometry", topic: "Vectors and 3D Geometry", icon: "📦" },
  { number: "12", name: "Linear Programming", topic: "Linear Programming", icon: "📋" },
  { number: "13", name: "Probability", topic: "Probability", icon: "🎲" },
];

export default function MathematicsPage() {
  return (
    <main className="min-h-screen bg-[#080d19] px-6 py-8 text-white md:px-12">
      <div className="mx-auto max-w-6xl">
        <a href="/" className="text-sm text-cyan-300 hover:text-white">
          ← Back to BOARDWISE
        </a>

        <section className="mt-12 rounded-3xl border border-orange-400/20 bg-gradient-to-br from-orange-950 via-slate-900 to-[#080d19] p-8 md:p-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
            CLASS 12 • CBSE
          </p>
          <h1 className="mt-5 text-4xl font-black md:text-6xl">
            Mathematics <span className="text-orange-400">📐</span>
          </h1>
          <p className="mt-5 max-w-xl leading-7 text-slate-400">
            Build mathematical confidence through formulas, concepts
            and problem-solving. Practice step by step and prepare
            for your board examination.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#chapters" className="rounded-xl bg-orange-400 px-6 py-3 font-bold text-slate-950 hover:bg-orange-300">
              Explore Chapters →
            </a>
            <a href="#resources" className="rounded-xl border border-slate-600 px-6 py-3 font-semibold hover:bg-slate-800">
              Study Resources
            </a>
          </div>
        </section>

        <section className="my-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["13", "Listed chapters"],
            ["Notes", "Study material"],
            ["MCQs", "Practice questions"],
            ["PYQs", "Past papers"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p className="text-2xl font-black text-orange-300">{value}</p>
              <p className="mt-2 text-sm text-slate-400">{label}</p>
            </div>
          ))}
        </section>

        <section id="chapters" className="py-8">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-400">
            THE SYLLABUS
          </p>
          <h2 className="mt-3 text-3xl font-black">Explore Chapters</h2>
          <p className="mt-3 text-slate-400">
            Choose a chapter to begin your preparation.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {chapters.map((chapter) => (
              <div key={chapter.number} className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-orange-400/50">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-400/10 text-2xl">
                    {chapter.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-orange-400">
                      CHAPTER {chapter.number}
                    </p>
                    <h3 className="mt-1 font-bold leading-6">
                      {chapter.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      {chapter.topic}
                    </p>
                  </div>
                  <span className="text-xl text-slate-500 group-hover:text-orange-300">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-slate-500">
            This is a starting chapter list. We will verify it against
            the applicable CBSE syllabus before publishing.
          </p>
        </section>

        <section id="resources" className="my-12 rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-black">Your Study Toolkit</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ["📘", "Formula Sheets", "Revise important formulas."],
              ["🧮", "Problem Practice", "Solve step-by-step questions."],
              ["📝", "Mock Tests", "Prepare for your board exam."],
            ].map(([icon, title, description]) => (
              <div key={title} className="rounded-xl bg-slate-800/60 p-5">
                <p className="text-3xl">{icon}</p>
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-2 text-sm text-slate-400">{description}</p>
                <p className="mt-4 text-xs text-orange-300">Coming soon</p>
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
