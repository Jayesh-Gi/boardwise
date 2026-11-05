
const subjects = [
  {
    name: "English",
    subtitle: "Literature, Reading & Writing",
    icon: "📖",
    color: "from-blue-500/20 to-cyan-500/5",
    chapters: "12 Chapters",
    link: "/subjects/english",
  },
  {
    name: "Physics",
    subtitle: "Concepts, Numericals & Derivations",
    icon: "⚛️",
    color: "from-violet-500/20 to-purple-500/5",
    chapters: "14 Chapters",
    link: "/subjects/physics",
  },
  {
    name: "Chemistry",
    subtitle: "Organic, Inorganic & Physical",
    icon: "🧪",
    color: "from-emerald-500/20 to-green-500/5",
    chapters: "10 Chapters",
    link: "/subjects/chemistry",
  },
  {
    name: "Mathematics",
    subtitle: "Calculus, Algebra & Probability",
    icon: "📐",
    color: "from-orange-500/20 to-amber-500/5",
    chapters: "13 Chapters",
    link: "/subjects/mathematics",
  },
  {
    name: "Physical Education",
    subtitle: "Sports, Fitness & Training",
    icon: "🏅",
    color: "from-pink-500/20 to-rose-500/5",
    chapters: "10 Chapters",
    link: "/subjects/phe",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080d19] text-white">
      {/* NAVBAR */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <h1 className="text-2xl font-black tracking-tight">
          BOARD<span className="text-cyan-400">WISE.</span>
        </h1>

        <div className="hidden gap-8 text-sm text-slate-400 md:flex">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#subjects" className="hover:text-white">Subjects</a>
          <a href="#about" className="hover:text-white">About</a>
        </div>

        <a
          href="#subjects"
          className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          Start Learning →
        </a>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="mx-auto max-w-7xl px-6 pb-20 pt-20 md:pt-28"
      >
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            ✦ YOUR CLASS 12 BOARD EXAM COMPANION
          </div>

          <h2 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Prepare smarter.
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Score higher.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
            Everything you need for your CBSE Class 12 board exams.
            Learn concepts, practice questions and track your progress
            — all in one place.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#subjects"
              className="rounded-xl bg-cyan-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Explore Subjects →
            </a>

            <a
              href="#about"
              className="rounded-xl border border-slate-700 px-7 py-4 font-semibold text-white transition hover:bg-slate-800"
            >
              Discover More
            </a>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-20 grid grid-cols-2 gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:grid-cols-4">
          {[
            ["05", "Subjects"],
            ["50+", "Chapters*"],
            ["MCQs", "Practice Tests"],
            ["24/7", "Learn Anytime"],
          ].map(([number, label]) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-black text-cyan-300">{number}</p>
              <p className="mt-2 text-sm text-slate-400">{label}</p>
            </div>
          ))}
        </div>

        <p className="mt-2 text-right text-xs text-slate-500">
          *Illustrative counts; chapter lists will be aligned with the official syllabus.
        </p>
      </section>

      {/* SUBJECTS SECTION */}
      <section id="subjects" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            YOUR LEARNING SPACE
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Explore your subjects.
          </h2>

          <p className="mt-3 text-slate-400">
            Choose a subject and start preparing for your boards.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => (
            <div
              key={subject.name}
              className={`group rounded-2xl border border-slate-800 bg-gradient-to-br ${subject.color} p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40`}
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl">{subject.icon}</span>

                <span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-400">
                  {subject.chapters}
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                {subject.name}
              </h3>

              <p className="mt-2 min-h-12 text-sm leading-6 text-slate-400">
                {subject.subtitle}
              </p>

              {/* UPDATED SUBJECT LINK */}
              <a
                href={subject.link}
                className="mt-6 inline-block font-semibold text-cyan-300 transition group-hover:text-white"
              >
                Explore Subject →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="mx-auto max-w-7xl px-6 pb-20 pt-12">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center md:p-14">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            YOUR GOAL STARTS HERE
          </p>

          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            Your boards. Your preparation. Your success.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Build confidence one chapter at a time with organised
            study material and focused exam practice.
          </p>

          <a
            href="#subjects"
            className="mt-8 inline-block rounded-xl bg-cyan-400 px-7 py-4 font-bold text-slate-950 hover:bg-cyan-300"
          >
            Start Exploring →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 BOARDWISE. Built for Class 12 learners.
      </footer>
    </main>
  );
}
