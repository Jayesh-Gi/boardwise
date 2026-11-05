
"use client";

import Link from "next/link";
import { useState } from "react";

const topics = [
  {
    title: "1. Magnetic Flux",
    content:
      "Magnetic flux measures the total magnetic field passing through a given surface. It depends on magnetic field, area and the angle between them.",
    formula: "Φ = BA cosθ",
  },
  {
    title: "2. Electromagnetic Induction",
    content:
      "The phenomenon of producing an induced emf in a circuit due to a change in magnetic flux linked with it is called electromagnetic induction.",
    formula: "ε = -dΦ/dt",
  },
  {
    title: "3. Faraday's First Law",
    content:
      "Whenever the magnetic flux linked with a circuit changes, an emf is induced in the circuit.",
    formula: "Induced emf ∝ Change in magnetic flux",
  },
  {
    title: "4. Faraday's Second Law",
    content:
      "The magnitude of induced emf is equal to the rate of change of magnetic flux linked with the circuit.",
    formula: "ε = -N(dΦ/dt)",
  },
  {
    title: "5. Lenz's Law",
    content:
      "The direction of induced current is such that it opposes the change in magnetic flux that produces it.",
    formula: "ε = -N(dΦ/dt)",
  },
  {
    title: "6. Motional EMF",
    content:
      "When a conducting rod moves through a magnetic field, an emf is induced across its ends.",
    formula: "ε = Blv",
  },
  {
    title: "7. Eddy Currents",
    content:
      "Eddy currents are circulating currents induced in a bulk conductor when the magnetic flux through it changes.",
    formula: "Produced by changing magnetic flux",
  },
  {
    title: "8. Self Induction",
    content:
      "Self induction is the phenomenon in which a changing current in a coil induces an emf in the same coil.",
    formula: "ε = -L(dI/dt)",
  },
  {
    title: "9. Mutual Induction",
    content:
      "Mutual induction occurs when a changing current in one coil induces an emf in a nearby coil.",
    formula: "ε₂ = -M(dI₁/dt)",
  },
];

const formulas = [
  ["Magnetic flux", "Φ = BA cosθ"],
  ["Faraday's law", "ε = -N(dΦ/dt)"],
  ["Induced current", "I = ε/R"],
  ["Motional emf", "ε = Blv"],
  ["Motional emf with angle", "ε = Blv sinθ"],
  ["Self-induced emf", "ε = -L(dI/dt)"],
  ["Mutual induced emf", "ε₂ = -M(dI₁/dt)"],
  ["Energy stored in an inductor", "U = ½LI²"],
];

const questions = [
  {
    q: "The SI unit of magnetic flux is:",
    options: ["Tesla", "Weber", "Henry", "Ampere"],
    answer: 1,
    explanation: "The SI unit of magnetic flux is weber (Wb).",
  },
  {
    q: "Who discovered electromagnetic induction?",
    options: ["Newton", "Faraday", "Einstein", "Ohm"],
    answer: 1,
    explanation: "Michael Faraday discovered electromagnetic induction.",
  },
  {
    q: "Faraday's law gives the magnitude of:",
    options: [
      "Magnetic field",
      "Induced emf",
      "Resistance",
      "Electric charge",
    ],
    answer: 1,
    explanation: "Induced emf is proportional to the rate of change of magnetic flux.",
  },
  {
    q: "The negative sign in Faraday's law represents:",
    options: [
      "Ohm's law",
      "Lenz's law",
      "Newton's law",
      "Coulomb's law",
    ],
    answer: 1,
    explanation: "The negative sign represents Lenz's law.",
  },
  {
    q: "The formula for motional emf is:",
    options: ["ε = IR", "ε = Blv", "ε = qV", "ε = B/I"],
    answer: 1,
    explanation: "For perpendicular motion, motional emf is ε = Blv.",
  },
  {
    q: "Eddy currents are produced in:",
    options: [
      "Insulators only",
      "Bulk conductors",
      "Vacuum",
      "Non-conductors only",
    ],
    answer: 1,
    explanation: "Changing magnetic flux induces circulating currents in bulk conductors.",
  },
  {
    q: "The SI unit of self-inductance is:",
    options: ["Weber", "Tesla", "Henry", "Volt"],
    answer: 2,
    explanation: "The SI unit of inductance is henry (H).",
  },
  {
    q: "Self-induction takes place in:",
    options: [
      "The same coil",
      "Only two separate coils",
      "A battery only",
      "An open switch only",
    ],
    answer: 0,
    explanation: "A changing current induces emf in the same coil.",
  },
];

export default function ElectromagneticInductionPage() {
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

        <header className="mt-8 rounded-3xl border border-amber-400/20 bg-gradient-to-br from-amber-500/15 to-orange-500/5 p-7 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">
            Class 12 Physics · Chapter 06
          </p>

          <h1 className="mt-3 text-3xl font-bold sm:text-5xl">
            Electromagnetic Induction
          </h1>

          <p className="mt-4 leading-7 text-slate-300">
            Learn magnetic flux, Faraday's laws, Lenz's law,
            motional emf, eddy currents and inductance.
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
            Understand every concept and revise its formula.
          </p>

          <div className="mt-5 space-y-4">
            {topics.map((topic) => (
              <article
                key={topic.title}
                className="rounded-2xl border border-white/10 bg-[#111a2b] p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold text-amber-300">
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

                <p className="mt-2 font-mono text-sm text-amber-300">
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
            A coil of 100 turns experiences a change in magnetic flux
            from 0.02 Wb to 0.06 Wb in 0.2 seconds. Calculate the
            magnitude of induced emf.
          </p>

          <div className="mt-5 space-y-2 font-mono text-sm text-slate-300">
            <p>N = 100</p>
            <p>ΔΦ = 0.06 - 0.02 = 0.04 Wb</p>
            <p>Δt = 0.2 s</p>
            <p>|ε| = N × ΔΦ / Δt</p>
            <p>|ε| = 100 × 0.04 / 0.2</p>

            <p className="text-lg font-bold text-emerald-300">
              |ε| = 20 V
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Important Board Questions</h2>

          <div className="mt-5 space-y-4">
            {[
              "Define electromagnetic induction.",
              "State Faraday's laws of electromagnetic induction.",
              "Explain Lenz's law and its significance.",
              "What is magnetic flux? Write its SI unit.",
              "Explain the phenomenon of eddy currents and give two applications.",
              "Differentiate between self induction and mutual induction.",
              "Derive the expression for motional emf in a moving conductor.",
            ].map((question, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-[#111a2b] p-5"
              >
                <p className="text-sm font-semibold text-amber-300">
                  Question {index + 1}
                </p>

                <p className="mt-2 leading-7 text-slate-300">
                  {question}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-amber-400/20 bg-[#111a2b] p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold">Chapter Quiz</h2>

              <p className="mt-2 text-sm text-slate-400">
                Test your understanding with 8 MCQs.
              </p>
            </div>

            <span className="rounded-full bg-amber-400/10 px-4 py-2 text-sm text-amber-300">
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
                  <span className="text-amber-300">
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
                        "border-amber-400 bg-amber-400/10 text-amber-300";
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
              className="mt-6 w-full rounded-xl bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Submit Quiz
            </button>
          ) : (
            <div className="mt-7 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 text-center">
              <p className="text-sm text-slate-400">Your Final Score</p>

              <p className="mt-2 text-4xl font-bold text-amber-300">
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
                className="mt-5 rounded-xl bg-amber-400 px-6 py-3 font-semibold text-slate-950 hover:bg-amber-300"
              >
                Retry Quiz
              </button>
            </div>
          )}
        </section>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-7">
          <Link
            href="/subjects/physics/magnetism-and-matter"
            className="rounded-xl border border-white/10 px-5 py-3 text-sm text-slate-300 transition hover:border-amber-400 hover:text-amber-300"
          >
            ← Previous Chapter
          </Link>

          <Link
            href="/subjects/physics"
            className="rounded-xl bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            All Physics Chapters →
          </Link>
        </div>

      </div>
    </main>
  );
}
