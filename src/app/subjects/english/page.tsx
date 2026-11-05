
const chapters = [
  { number: "01", name: "The Last Lesson", topic: "Flamingo", icon: "📖" },
  { number: "02", name: "Lost Spring", topic: "Flamingo", icon: "🌱" },
  { number: "03", name: "Deep Water", topic: "Flamingo", icon: "🌊" },
  { number: "04", name: "The Rattrap", topic: "Flamingo", icon: "🐀" },
  { number: "05", name: "Indigo", topic: "Flamingo", icon: "🪻" },
  { number: "06", name: "Poets and Pancakes", topic: "Flamingo", icon: "🎬" },
  { number: "07", name: "The Interview", topic: "Flamingo", icon: "🎙️" },
  { number: "08", name: "Going Places", topic: "Flamingo", icon: "🚀" },
  { number: "09", name: "My Mother at Sixty-Six", topic: "Poetry", icon: "🌸" },
  { number: "10", name: "Keeping Quiet", topic: "Poetry", icon: "🤫" },
  { number: "11", name: "A Thing of Beauty", topic: "Poetry", icon: "🌻" },
  { number: "12", name: "A Roadside Stand", topic: "Poetry", icon: "🛣️" },
  { number: "13", name: "Aunt Jennifer's Tigers", topic: "Poetry", icon: "🐅" },
  { number: "14", name: "The Third Level", topic: "Vistas", icon: "⏳" },
  { number: "15", name: "The Tiger King", topic: "Vistas", icon: "👑" },
  { number: "16", name: "Journey to the End of the Earth", topic: "Vistas", icon: "🌍" },
  { number: "17", name: "The Enemy", topic: "Vistas", icon: "⚔️" },
  { number: "18", name: "On the Face of It", topic: "Vistas", icon: "🎭" },
  { number: "19", name: "Memories of Childhood", topic: "Vistas", icon: "🧒" },
];

export default function EnglishPage() {
  return (
    <main className="min-h-screen bg-[#080d19] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <a href="/" className="text-cyan-400 hover:text-cyan-300 text-sm">
          ← Back to Boardwise
        </a>

        <section className="mt-10 mb-12">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            Class 12 · CBSE · English Core
          </p>
          <h1 className="text-5xl font-bold mt-4">
            Master <span className="text-cyan-400">English.</span>
          </h1>
          <p className="text-slate-400 mt-4 max-w-2xl leading-7">
            Improve your reading, writing and literature skills with chapter-wise
            study material, practice questions and revision resources.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            ["19", "Literature entries"],
            ["3", "Main sections"],
            ["100%", "Learning focus"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-3xl font-bold text-cyan-400">{value}</p>
              <p className="text-sm text-slate-400 mt-2">{label}</p>
            </div>
          ))}
        </section>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <p className="text-cyan-400 text-xs uppercase tracking-widest">Your syllabus</p>
            <h2 className="text-2xl font-bold mt-2">Explore Literature</h2>
          </div>
          <p className="text-sm text-slate-500">Flamingo · Poetry · Vistas</p>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {chapters.map((chapter) => (
            <div
              key={chapter.number}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:border-cyan-400/50 hover:bg-cyan-400/[0.05] transition"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{chapter.icon}</span>
                <span className="text-xs text-slate-500">{chapter.number}</span>
              </div>
              <p className="text-xs text-cyan-400 mt-5">{chapter.topic}</p>
              <h3 className="font-semibold mt-2 group-hover:text-cyan-300 transition">
                {chapter.name}
              </h3>
              <p className="text-xs text-slate-500 mt-3">Study material coming soon</p>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.05] p-8">
          <p className="text-cyan-400 text-xs uppercase tracking-widest">Board preparation</p>
          <h2 className="text-2xl font-bold mt-3">Prepare beyond the chapters.</h2>
          <p className="text-slate-400 mt-3 leading-7">
            Writing skills, reading comprehension, sample papers and timed practice
            will be added to your English learning toolkit.
          </p>
        </section>
      </div>
    </main>
  );
}
