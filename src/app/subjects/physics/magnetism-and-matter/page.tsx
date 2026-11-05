
"use client";

import Link from "next/link";
import { useState } from "react";

const topics = [
  {
    title: "1. Bar Magnet",
    content:
      "A bar magnet is a permanent magnet having two poles: North and South. Like poles repel and unlike poles attract.",
    formula: "Magnetic poles always exist in pairs",
  },
  {
    title: "2. Magnetic Field Lines",
    content:
      "Magnetic field lines represent the direction and strength of a magnetic field. Outside a magnet, they travel from North to South.",
    formula: "Magnetic field lines form closed curves",
  },
  {
    title: "3. Bar Magnet as a Magnetic Dipole",
    content:
      "A bar magnet behaves like a magnetic dipole. Its magnetic dipole moment depends on pole strength and magnetic length.",
    formula: "M = m × 2l",
  },
  {
    title: "4. Magnetic Dipole Moment",
    content:
      "Magnetic dipole moment measures the strength and orientation of a magnetic dipole.",
    formula: "M = Pole strength × Magnetic length",
  },
  {
    title: "5. Earth's Magnetism",
    content:
      "Earth behaves approximately like a giant magnet. Its magnetic field helps a compass point approximately towards the geographic north.",
    formula: "B_H = B cos δ",
  },
  {
    title: "6. Magnetic Declination",
    content:
      "The angle between the geographic meridian and magnetic meridian at a place is called magnetic declination.",
    formula: "Declination = Angle between two meridians",
  },
  {
    title: "7. Angle of Dip",
    content:
      "The angle made by Earth's total magnetic field with the horizontal direction is called angle of dip.",
    formula: "tan δ = B_V / B_H",
  },
  {
    title: "8. Magnetic Materials",
    content:
      "Materials are classified as diamagnetic, paramagnetic and ferromagnetic according to their magnetic behaviour.",
    formula: "χ = M / H",
  },
  {
    title: "9. Types of Magnetic Materials",
    content:
      "Diamagnetic materials are weakly repelled, paramagnetic materials are weakly attracted, and ferromagnetic materials are strongly attracted by magnetic fields.",
    formula: "μ_r = 1 + χ",
  },
];

const formulas = [
  ["Magnetic dipole moment", "M = m × 2l"],
  ["Magnetic field on axial line", "B = (μ₀/4π)(2M/r³)"],
  ["Magnetic field on equatorial line", "B = (μ₀/4π)(M/r³)"],
  ["Horizontal component", "B_H = B cos δ"],
  ["Vertical component", "B_V = B sin δ"],
  ["Angle of dip", "tan δ = B_V / B_H"],
  ["Magnetic susceptibility", "χ = M / H"],
  ["Relative permeability", "μ_r = 1 + χ"],
];

const questions = [
  {
    q: "A bar magnet has how many magnetic poles?",
    options: ["One", "Two", "Three", "Four"],
    answer: 1,
    explanation: "A bar magnet has two poles: North and South.",
  },
  {
    q: "Like magnetic poles:",
    options: ["Attract", "Repel", "Disappear", "Do not interact"],
    answer: 1,
    explanation: "Like poles repel each other.",
  },
  {
    q: "Outside a bar magnet, magnetic field lines move from:",
    options: [
      "South to North",
      "North to South",
      "East to West",
      "West to East",
    ],
    answer: 1,
    explanation: "Outside the magnet, field lines emerge from North and enter South.",
  },
  {
    q: "Which material is strongly attracted by a magnetic field?",
    options: ["Copper", "Bismuth", "Iron", "Water"],
    answer: 2,
    explanation: "Iron is a ferromagnetic material.",
  },
  {
    q: "Which material is weakly repelled by a magnetic field?",
    options: ["Diamagnetic", "Paramagnetic", "Ferromagnetic", "Iron"],
    answer: 0,
    explanation: "Diamagnetic materials are weakly repelled by magnetic fields.",
  },
  {
    q: "The angle of dip is the angle between Earth's magnetic field and:",
    options: [
      "Vertical direction",
      "Horizontal direction",
      "North direction",
      "South direction",
    ],
    answer: 1,
    explanation: "Angle of dip is measured from the horizontal.",
  },
  {
    q: "The SI unit of magnetic dipole moment is:",
    options: ["Tesla", "Ampere metre squared", "Weber", "Henry"],
    answer: 1,
    explanation: "Magnetic dipole moment has SI unit A m².",
  },
  {
    q: "Which material is strongly attracted by a magnet?",
    options: ["Diamagnetic", "Paramagnetic", "Ferromagnetic", "Non-magnetic"],
    answer: 2,
    explanation: "Ferromagnetic materials show strong attraction.",
  },
];

export default function MagnetismMatterPage() {
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = questions.reduce((total, question, index) => {
    return total + (selected[index] === question.answer ? 1 : 0);
  }, 0);

  function retryQuiz() {
    setSelected({});
    setSubmitted(false);
  }

  return (
    <main className="min-h-screen bg-[#080d19] px-5 py-8 text-white sm:px-8">
      <div className="mx-auto max-w-5xl">

        <Link
          href="/subjects/physics"
          className="text-sm text-cyan-300 hover:text-white"
        >
          ← Back to Physics
        </Link>

        <header className="mt-8 rounded-3xl border border-purple-400/20 bg-gradient-to-br from-purple-500/15 to-blue-500/5 p-7 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-300">
            Class 12 Physics · Chapter 05
          </p>

          <h1 className="mt-3 text-3xl font-bold sm:text-5xl">
            Magnetism and Matter
          </h1>

          <p className="mt-4 leading-7 text-slate-300">
            Understand bar magnets, magnetic field lines, Earth's magnetism
            and different types of magnetic materials.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full bg-white/10 px-4 py-2">
              9 Topics
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2">
              8 Formulas
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2">
              8 MCQs
            </span>
          </div>
        </header>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Chapter Topics</h2>

          <p className="mt-2 text-sm text-slate-400">
            Read the concepts and understand their important formulas.
          </p>

          <div className="mt-5 space-y-4">
            {topics.map((topic) => (
              <article
                key={topic.title}
                className="rounded-2xl border border-white/10 bg-[#111a2b] p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold text-purple-300">
                  {topic.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {topic.content}
                </p>

                <div className="mt-4 rounded-xl bg-black/30 p-4">
                  <p className="text-xs font-semibold uppercase text-slate-400">
                    Important Formula
                  </p>

                  <p className="mt-2 break-words font-mono text-sm text-emerald-300">
                    {topic.formula}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Formula Sheet</h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {formulas.map(([name, formula]) => (
              <div
                key={name}
                className="rounded-xl border border-white/10 bg-[#111a2b] p-4"
              >
                <p className="text-sm text-slate-400">{name}</p>
                <p className="mt-2 font-mono text-sm text-purple-300">
                  {formula}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <h2 className="text-2xl font-bold text-emerald-300">
            Solved Numerical
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            A magnetic dipole has pole strength 2 A m and magnetic length
            10 cm. Calculate its magnetic dipole moment.
          </p>

          <div className="mt-5 space-y-2 font-mono text-sm text-slate-300">
            <p>m = 2 A m</p>
            <p>2l = 10 cm = 0.1 m</p>
            <p>M = m × 2l</p>
            <p>M = 2 × 0.1</p>
            <p className="text-lg font-bold text-emerald-300">
              M = 0.2 A m²
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Important Board Questions</h2>

          <div className="mt-5 space-y-4">
            {[
              "Define magnetic dipole moment and write its SI unit.",
              "Explain the properties of magnetic field lines.",
              "What is magnetic declination?",
              "Define angle of dip and horizontal component of Earth's magnetic field.",
              "Differentiate between diamagnetic, paramagnetic and ferromagnetic materials.",
              "Explain why magnetic field lines form closed curves.",
            ].map((question, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-[#111a2b] p-5"
              >
                <p className="text-sm font-semibold text-purple-300">
                  Question {index + 1}
                </p>
                <p className="mt-2 leading-7 text-slate-300">
                  {question}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-purple-400/20 bg-[#111a2b] p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold">Chapter Quiz</h2>
              <p className="mt-2 text-sm text-slate-400">
                Test your understanding with 8 MCQs.
              </p>
            </div>

            <span className="rounded-full bg-purple-400/10 px-4 py-2 text-sm text-purple-300">
              {Object.keys(selected).length}/8 Attempted
            </span>
          </div>

          <div className="mt-7 space-y-7">
            {questions.map((question, index) => (
              <div
                key={index}
                className="border-b border-white/10 pb-6 last:border-0"
              >
                <h3 className="font-semibold leading-7">
                  <span className="text-purple-300">
                    Q{index + 1}.
                  </span>{" "}
                  {question.q}
                </h3>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {question.options.map((option, optionIndex) => {
                    const isSelected = selected[index] === optionIndex;
                    const isCorrect = question.answer === optionIndex;

                    let optionStyle = "border-white/10 bg-white/5";

                    if (submitted && isCorrect) {
                      optionStyle =
                        "border-emerald-400 bg-emerald-400/10 text-emerald-300";
                    } else if (submitted && isSelected && !isCorrect) {
                      optionStyle =
                        "border-red-400 bg-red-400/10 text-red-300";
                    } else if (isSelected) {
                      optionStyle =
                        "border-purple-400 bg-purple-400/10 text-purple-300";
                    }

                    return (
                      <button
                        key={optionIndex}
                        type="button"
                        disabled={submitted}
                        onClick={() =>
                          setSelected((previous) => ({
                            ...previous,
                            [index]: optionIndex,
                          }))
                        }
                        className={`rounded-xl border p-3 text-left text-sm transition ${optionStyle} disabled:cursor-default`}
                      >
                        {String.fromCharCode(65 + optionIndex)}. {option}
                      </button>
                    );
                  })}
                </div>

                {submitted && (
                  <div className="mt-3 rounded-xl bg-black/20 p-4 text-sm">
                    <p className="font-semibold text-emerald-300">
                      Correct Answer: {question.options[question.answer]}
                    </p>
                    <p className="mt-2 leading-6 text-slate-300">
                      {question.explanation}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {!submitted ? (
            <button
              type="button"
              onClick={() => setSubmitted(true)}
              disabled={Object.keys(selected).length !== questions.length}
              className="mt-6 w-full rounded-xl bg-purple-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-purple-300 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Submit Quiz
            </button>
          ) : (
            <div className="mt-7 rounded-2xl border border-purple-400/20 bg-purple-400/5 p-6 text-center">
              <p className="text-sm text-slate-400">Your Final Score</p>

              <p className="mt-2 text-4xl font-bold text-purple-300">
                {score} / {questions.length}
              </p>

              <p className="mt-2 text-slate-300">
                {score === 8
                  ? "Excellent! Perfect score!"
                  : score >= 5
                    ? "Good work! Keep revising."
                    : "Keep practising. You can improve!"}
              </p>

              <button
                type="button"
                onClick={retryQuiz}
                className="mt-5 rounded-xl bg-purple-400 px-6 py-3 font-semibold text-slate-950 hover:bg-purple-300"
              >
                Retry Quiz
              </button>
            </div>
          )}
        </section>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-7">
          <Link
            href="/subjects/physics/moving-charges-and-magnetism"
            className="rounded-xl border border-white/10 px-5 py-3 text-sm text-slate-300 transition hover:border-purple-400 hover:text-purple-300"
          >
            ← Previous Chapter
          </Link>

          <Link
            href="/subjects/physics"
            className="rounded-xl bg-purple-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-purple-300"
          >
            All Physics Chapters →
          </Link>
        </div>

      </div>
    </main>
  );
}
