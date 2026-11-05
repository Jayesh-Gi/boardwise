
"use client";

import Link from "next/link";
import { useState } from "react";

const topics = [
  {
    title: "1. Magnetic Force on a Moving Charge",
    content:
      "A moving charged particle experiences magnetic force when it moves through a magnetic field. The force depends on charge, speed, magnetic field and angle.",
    formula: "F = |q|vB sinθ",
  },
  {
    title: "2. Lorentz Force",
    content:
      "When electric and magnetic fields are both present, the total force on a moving charge is called Lorentz force.",
    formula: "F = q(E + v × B)",
  },
  {
    title: "3. Motion in a Uniform Magnetic Field",
    content:
      "When a charged particle enters a uniform magnetic field perpendicular to its velocity, it moves in a circular path.",
    formula: "r = mv / |q|B",
  },
  {
    title: "4. Time Period and Angular Frequency",
    content:
      "The time taken by a charged particle to complete one circular revolution is its time period.",
    formula: "T = 2πm / |q|B",
  },
  {
    title: "5. Force on a Current-Carrying Conductor",
    content:
      "A conductor carrying current in a magnetic field experiences a force. Its direction is given by Fleming's left-hand rule.",
    formula: "F = BIL sinθ",
  },
  {
    title: "6. Force Between Two Parallel Currents",
    content:
      "Parallel wires carrying currents in the same direction attract, while opposite currents repel.",
    formula: "F/L = μ₀I₁I₂ / 2πd",
  },
  {
    title: "7. Torque on a Current Loop",
    content:
      "A current-carrying loop in a uniform magnetic field experiences torque.",
    formula: "τ = NIAB sinθ",
  },
  {
    title: "8. Magnetic Dipole Moment",
    content: "A current loop behaves like a magnetic dipole.",
    formula: "m = NIA",
  },
  {
    title: "9. Moving Coil Galvanometer",
    content:
      "A galvanometer detects small electric currents. A shunt converts it into an ammeter, while a high series resistance converts it into a voltmeter.",
    formula: "I = kθ",
  },
];

const formulas = [
  ["Magnetic force", "F = |q|vB sinθ"],
  ["Lorentz force", "F = q(E + v × B)"],
  ["Radius", "r = mv / |q|B"],
  ["Time period", "T = 2πm / |q|B"],
  ["Angular frequency", "ω = |q|B / m"],
  ["Force on conductor", "F = BIL sinθ"],
  ["Force per unit length", "F/L = μ₀I₁I₂ / 2πd"],
  ["Torque on coil", "τ = NIAB sinθ"],
  ["Magnetic dipole moment", "m = NIA"],
];

const questions = [
  {
    q: "A charged particle moves parallel to a magnetic field. The force is:",
    options: ["Maximum", "Zero", "Half maximum", "Infinite"],
    answer: 1,
    explanation: "F = qvB sinθ. At 0°, sin 0° = 0.",
  },
  {
    q: "The SI unit of magnetic field is:",
    options: ["Tesla", "Weber", "Henry", "Coulomb"],
    answer: 0,
    explanation: "The SI unit of magnetic field is tesla (T).",
  },
  {
    q: "A charged particle enters a uniform magnetic field perpendicular to it. Its path is:",
    options: ["Straight", "Parabolic", "Circular", "Random"],
    answer: 2,
    explanation: "Magnetic force acts as centripetal force.",
  },
  {
    q: "The radius of the circular path is:",
    options: ["|q|B/mv", "mv/|q|B", "|q|B/mv²", "mB/|q|v"],
    answer: 1,
    explanation: "r = mv/|q|B.",
  },
  {
    q: "Two parallel wires carrying currents in the same direction:",
    options: ["Repel", "Attract", "Do not interact", "Rotate"],
    answer: 1,
    explanation: "Parallel currents in the same direction attract.",
  },
  {
    q: "Magnetic force on a current-carrying conductor is maximum at:",
    options: ["0°", "30°", "45°", "90°"],
    answer: 3,
    explanation: "F = BIL sinθ is maximum at 90°.",
  },
  {
    q: "The magnetic dipole moment of a coil is:",
    options: ["NI/A", "NIA", "IA/N", "N/I"],
    answer: 1,
    explanation: "Magnetic dipole moment = NIA.",
  },
  {
    q: "A galvanometer is converted into an ammeter using:",
    options: [
      "High resistance in series",
      "Low resistance in parallel",
      "High resistance in parallel",
      "Capacitor in series",
    ],
    answer: 1,
    explanation: "A low resistance called a shunt is connected in parallel.",
  },
];

export default function MovingChargesPage() {
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

        <header className="mt-8 rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/15 to-blue-500/5 p-7 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Class 12 Physics · Chapter 04
          </p>

          <h1 className="mt-3 text-3xl font-bold sm:text-5xl">
            Moving Charges and Magnetism
          </h1>

          <p className="mt-4 leading-7 text-slate-300">
            Learn magnetic forces, motion of charged particles,
            current-carrying conductors and moving-coil galvanometers.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full bg-white/10 px-4 py-2">
              9 Topics
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2">
              9 Formulas
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2">
              8 MCQs
            </span>
          </div>
        </header>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Chapter Topics</h2>

          <p className="mt-2 text-sm text-slate-400">
            Read each concept and revise its important formula.
          </p>

          <div className="mt-5 space-y-4">
            {topics.map((topic) => (
              <article
                key={topic.title}
                className="rounded-2xl border border-white/10 bg-[#111a2b] p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold text-cyan-300">
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

                <p className="mt-2 font-mono text-sm text-cyan-300">
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

          <p className="mt-4 text-slate-300">
            A charge of 2 μC moves at 3 × 10⁵ m/s perpendicular
            to a magnetic field of 0.2 T. Calculate the magnetic force.
          </p>

          <div className="mt-5 space-y-2 font-mono text-sm text-slate-300">
            <p>q = 2 × 10⁻⁶ C</p>
            <p>v = 3 × 10⁵ m/s</p>
            <p>B = 0.2 T</p>
            <p>F = qvB sin 90°</p>
            <p>F = (2 × 10⁻⁶)(3 × 10⁵)(0.2)</p>

            <p className="text-lg font-bold text-emerald-300">
              F = 0.12 N
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Important Board Questions</h2>

          <div className="mt-5 space-y-4">
            {[
              "State the expression for magnetic force on a moving charge. When is this force maximum and minimum?",
              "Explain the motion of a charged particle in a uniform magnetic field.",
              "Derive the expression for the radius of the circular path of a charged particle.",
              "State the force between two long parallel current-carrying conductors.",
              "Explain the principle and working of a moving coil galvanometer.",
              "How can a galvanometer be converted into an ammeter and a voltmeter?",
            ].map((question, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-[#111a2b] p-5"
              >
                <p className="text-sm font-semibold text-cyan-300">
                  Question {index + 1}
                </p>
                <p className="mt-2 leading-7 text-slate-300">
                  {question}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-cyan-400/20 bg-[#111a2b] p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold">Chapter Quiz</h2>
              <p className="mt-2 text-sm text-slate-400">
                Test your understanding with 8 MCQs.
              </p>
            </div>

            <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
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
                  <span className="text-cyan-300">
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
                        "border-cyan-400 bg-cyan-400/10 text-cyan-300";
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
              className="mt-6 w-full rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Submit Quiz
            </button>
          ) : (
            <div className="mt-7 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6 text-center">
              <p className="text-sm text-slate-400">Your Final Score</p>

              <p className="mt-2 text-4xl font-bold text-cyan-300">
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
                className="mt-5 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
              >
                Retry Quiz
              </button>
            </div>
          )}
        </section>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-7">
          <Link
            href="/subjects/physics/current-electricity"
            className="rounded-xl border border-white/10 px-5 py-3 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
          >
            ← Previous Chapter
          </Link>

          <Link
            href="/subjects/physics"
            className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            All Physics Chapters →
          </Link>
        </div>

      </div>
    </main>
  );
}
