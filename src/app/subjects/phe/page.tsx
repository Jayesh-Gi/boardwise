
const chapters = [
  { number: "01", name: "Management of Sporting Events", topic: "Sports Management", icon: "🏆" },
  { number: "02", name: "Children and Women in Sports", topic: "Sports & Society", icon: "🤸" },
  { number: "03", name: "Yoga as a Preventive Measure", topic: "Yoga", icon: "🧘" },
  { number: "04", name: "Physical Education and Sports for CWSN", topic: "Inclusive Sports", icon: "♿" },
  { number: "05", name: "Sports and Nutrition", topic: "Health & Nutrition", icon: "🥗" },
  { number: "06", name: "Test and Measurement in Sports", topic: "Sports Science", icon: "📏" },
  { number: "07", name: "Physiology and Injuries in Sports", topic: "Sports Science", icon: "🫀" },
  { number: "08", name: "Biomechanics and Sports", topic: "Sports Science", icon: "⚙️" },
  { number: "09", name: "Psychology and Sports", topic: "Sports Psychology", icon: "🧠" },
  { number: "10", name: "Training in Sports", topic: "Sports Training", icon: "🏃" },
];

export default function PHEPage() {
  return (
    <main className="min-h-screen bg-[#080d19] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <a href="/" className="text-cyan-400 hover:text-cyan-300 text-sm">
          ← Back to Boardwise
        </a>

        <section className="mt-10 mb-12">
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">
            Class 12 · CBSE · Physical Education
          </p>
          <h1 className="text-5xl font-bold mt-4">
            Master <span className="text-emerald-400">Physical Education.</span>
          </h1>
          <p className="text-slate-400 mt-4 max-w-2xl leading-7">
            Learn sports science, training methods, yoga, nutrition and the
            principles of physical fitness with chapter-wise resources.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            ["10", "Chapter entries"],
            ["5", "Learning areas"],
            ["100%", "Learning focus"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-3xl font-bold text-emerald-400">{value}</p>
              <p className="text-sm text-slate-400 mt-2">{label}</p>
            </div>
          ))}
        </section>

        <div className="mb-6">
          <p className="text-emerald-400 text-xs uppercase tracking-widest">Your syllabus</p>
          <h2 className="text-2xl font-bold mt-2">Explore Chapters</h2>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {chapters.map((chapter) => (
            <div
              key={chapter.number}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:border-emerald-400/50 hover:bg-emerald-400/[0.05] transition"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{chapter.icon}</span>
                <span className="text-xs text-slate-500">{chapter.number}</span>
              </div>
              <p className="text-xs text-emerald-400 mt-5">{chapter.topic}</p>
              <h3 className="font-semibold mt-2 group-hover:text-emerald-300 transition">
                {chapter.name}
              </h3>
              <p className="text-xs text-slate-500 mt-3">Study material coming soon</p>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/[0.05] p-8">
          <p className="text-emerald-400 text-xs uppercase tracking-widest">Board preparation</p>
          <h2 className="text-2xl font-bold mt-3">Train your knowledge.</h2>
          <p className="text-slate-400 mt-3 leading-7">
            Revision notes, important questions, practical preparation and mock
            tests will be added to your Physical Education toolkit.
          </p>
        </section>
      </div>
    </main>
  );
}
