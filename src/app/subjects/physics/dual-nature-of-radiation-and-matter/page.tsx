
"use client";

import { useState } from "react";
import Link from "next/link";

const topics = [
  {
    title: "Dual Nature of Radiation",
    detail:
      "Light shows both wave-like and particle-like properties. It behaves as a wave in interference and diffraction, and as particles called photons in the photoelectric effect.",
  },
  {
    title: "Electron Emission",
    detail:
      "Electron emission is the process of releasing electrons from a material surface. It can happen through heating, light or an electric field.",
  },
  {
    title: "Photoelectric Effect",
    detail:
      "The photoelectric effect is the emission of electrons from a metal surface when light of suitable frequency falls on it. The emitted electrons are called photoelectrons.",
  },
  {
    title: "Experimental Observations",
    detail:
      "Photoelectric current depends on light intensity. Maximum kinetic energy depends on frequency, and emission occurs only when frequency is at least the threshold frequency.",
  },
  {
    title: "Einstein's Photoelectric Equation",
    detail:
      "Einstein explained the photoelectric effect using photons. The energy of a photon is used partly to overcome the work function and the rest becomes the maximum kinetic energy of the electron.",
  },
  {
    title: "Work Function and Threshold Frequency",
    detail:
      "Work function is the minimum energy needed to remove an electron from a metal surface. Threshold frequency is the minimum frequency required for photoelectric emission.",
  },
  {
    title: "Particle Nature of Light",
    detail:
      "Light consists of photons. Each photon has energy proportional to its frequency and momentum inversely proportional to its wavelength.",
  },
  {
    title: "Wave Nature of Matter",
    detail:
      "According to de Broglie, moving particles also have wave nature. The wavelength associated with a particle is called its de Broglie wavelength.",
  },
  {
    title: "Davisson-Germer Experiment",
    detail:
      "This experiment showed electron diffraction from a nickel crystal and provided experimental evidence for the wave nature of electrons.",
  },
];

const formulas = [
  { name: "Photon Energy", formula: "E = hν = hc/λ" },
  { name: "Photon Momentum", formula: "p = h/λ = E/c" },
  { name: "Work Function", formula: "φ₀ = hν₀" },
  { name: "Einstein's Photoelectric Equation", formula: "hν = φ₀ + Kmax" },
  { name: "Maximum Kinetic Energy", formula: "Kmax = 1/2 mvmax²" },
  { name: "Stopping Potential", formula: "Kmax = eV₀" },
  { name: "Threshold Wavelength", formula: "λ₀ = hc/φ₀" },
  { name: "de Broglie Wavelength", formula: "λ = h/p = h/mv" },
  { name: "Electron Accelerated Through V", formula: "λ = h/√(2meV)" },
];

const numericals = [
  {
    question:
      "Calculate the energy of a photon of frequency 6 × 10¹⁴ Hz. Take h = 6.63 × 10⁻³⁴ J s.",
    answer:
      "E = hν = 6.63 × 10⁻³⁴ × 6 × 10¹⁴ = 3.978 × 10⁻¹⁹ J.",
  },
  {
    question:
      "The work function of a metal is 2 eV. Find its threshold frequency. Take h = 4.14 × 10⁻¹⁵ eV s.",
    answer:
      "ν₀ = φ₀/h = 2/(4.14 × 10⁻¹⁵) ≈ 4.83 × 10¹⁴ Hz.",
  },
  {
    question:
      "A photon has wavelength 500 nm. Calculate its energy. Take hc = 1240 eV nm.",
    answer:
      "E = hc/λ = 1240/500 = 2.48 eV.",
  },
  {
    question:
      "An electron moves with momentum 6.63 × 10⁻²⁴ kg m/s. Find its de Broglie wavelength. Take h = 6.63 × 10⁻³⁴ J s.",
    answer:
      "λ = h/p = (6.63 × 10⁻³⁴)/(6.63 × 10⁻²⁴) = 1 × 10⁻¹⁰ m.",
  },
];

const boardQuestions = [
  "What is the photoelectric effect? State its important observations.",
  "Define work function and threshold frequency.",
  "Write Einstein's photoelectric equation and explain each term.",
  "Explain why photoelectric emission does not occur below threshold frequency.",
  "How does photoelectric current change with the intensity of incident light?",
  "What is stopping potential? How is it related to maximum kinetic energy?",
  "State de Broglie's hypothesis and write its wavelength formula.",
  "Explain the Davisson-Germer experiment and its conclusion.",
];

const questions = [
  {
    q: "What is a photon?",
    options: [
      "A proton",
      "A packet of electromagnetic energy",
      "A neutron",
      "A sound wave",
    ],
    answer: 1,
    explanation:
      "A photon is a discrete packet or quantum of electromagnetic radiation.",
  },
  {
    q: "The energy of a photon is:",
    options: ["h/ν", "hν", "ν/h", "hcν"],
    answer: 1,
    explanation: "Photon energy is E = hν.",
  },
  {
    q: "Photoelectric emission occurs when incident light frequency is:",
    options: [
      "Always zero",
      "Below threshold frequency",
      "Equal to or greater than threshold frequency",
      "Independent of frequency",
    ],
    answer: 2,
    explanation:
      "The frequency must be at least the threshold frequency for emission.",
  },
  {
    q: "The minimum energy needed to remove an electron from a metal is called:",
    options: ["Kinetic energy", "Work function", "Potential energy", "Stopping energy"],
    answer: 1,
    explanation: "The minimum energy required is called the work function.",
  },
  {
    q: "Increasing light intensity above threshold frequency increases:",
    options: [
      "Maximum kinetic energy",
      "Photoelectric current",
      "Work function",
      "Threshold frequency",
    ],
    answer: 1,
    explanation:
      "Higher intensity means more photons per second, so more photoelectrons can be emitted.",
  },
  {
    q: "The maximum kinetic energy of photoelectrons depends on:",
    options: [
      "Intensity only",
      "Frequency of incident light",
      "Area of metal only",
      "Time only",
    ],
    answer: 1,
    explanation:
      "Maximum kinetic energy increases with the frequency of incident light.",
  },
  {
    q: "The de Broglie wavelength is:",
    options: ["λ = hp", "λ = h/p", "λ = p/h", "λ = h + p"],
    answer: 1,
    explanation: "De Broglie wavelength is λ = h/p.",
  },
  {
    q: "Which experiment confirmed the wave nature of electrons?",
    options: [
      "Young's experiment",
      "Davisson-Germer experiment",
      "Rutherford experiment",
      "Millikan experiment",
    ],
    answer: 1,
    explanation:
      "Electron diffraction in the Davisson-Germer experiment confirmed the wave nature of electrons.",
  },
  {
    q: "The SI unit of work function is:",
    options: ["Joule", "Watt", "Metre", "Tesla"],
    answer: 0,
    explanation:
      "Work function is energy, so its SI unit is joule. It is also commonly expressed in electron volts.",
  },
  {
    q: "If the momentum of a particle increases, its de Broglie wavelength:",
    options: ["Increases", "Decreases", "Remains the same", "Becomes infinite"],
    answer: 1,
    explanation:
      "Since λ = h/p, wavelength decreases when momentum increases.",
  },
];

export default function DualNaturePage() {
  const [openNumerical, setOpenNumerical] = useState<number | null>(null);
  const [selected, setSelected] = useState<number[]>(
    Array(questions.length).fill(-1)
  );
  const [submitted, setSubmitted] = useState(false);

  const score = questions.reduce(
    (total, question, index) =>
      total + (selected[index] === question.answer ? 1 : 0),
    0
  );

  function selectAnswer(questionIndex: number, optionIndex: number) {
    if (submitted) return;
    setSelected((previous) =>
      previous.map((answer, index) =>
        index === questionIndex ? optionIndex : answer
      )
    );
  }

  function resetQuiz() {
    setSelected(Array(questions.length).fill(-1));
    setSubmitted(false);
  }

  return (
    <main className="min-h-screen bg-[#070b16] px-4 py-8 text-white sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/subjects/physics"
          className="mb-6 inline-block text-sm text-cyan-400 hover:text-cyan-300"
        >
          ← Back to Physics
        </Link>

        <section className="mb-10 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-[#10253d] to-[#101426] p-6 sm:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Class 12 Physics • Chapter 11
          </p>
          <h1 className="text-3xl font-bold sm:text-5xl">
            Dual Nature of Radiation and Matter
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Learn about photons, the photoelectric effect, Einstein's equation
            and de Broglie waves with simple notes and practice questions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-cyan-100">
            <span className="rounded-full border border-cyan-400/30 px-4 py-2">Notes</span>
            <span className="rounded-full border border-cyan-400/30 px-4 py-2">Formula Sheet</span>
            <span className="rounded-full border border-cyan-400/30 px-4 py-2">Numericals</span>
            <span className="rounded-full border border-cyan-400/30 px-4 py-2">MCQ Quiz</span>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-5 text-2xl font-bold">📘 Chapter Notes</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {topics.map((topic, index) => (
              <article
                key={topic.title}
                className="rounded-2xl border border-white/10 bg-[#111827] p-5 transition hover:border-cyan-400/40"
              >
                <h3 className="mb-2 font-semibold text-cyan-300">
                  {index + 1}. {topic.title}
                </h3>
                <p className="text-sm leading-6 text-slate-300">
                  {topic.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-5 text-2xl font-bold">⚡ Important Formulas</h2>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            {formulas.map((item, index) => (
              <div
                key={item.name}
                className="flex flex-col gap-2 border-b border-white/10 bg-[#111827] p-4 last:border-0 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-sm text-slate-300">
                  {index + 1}. {item.name}
                </span>
                <code className="rounded-lg bg-cyan-950/60 px-3 py-2 text-sm text-cyan-300">
                  {item.formula}
                </code>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-5 text-2xl font-bold">🧮 Solved Numericals</h2>
          <div className="space-y-3">
            {numericals.map((item, index) => (
              <article
                key={index}
                className="rounded-2xl border border-white/10 bg-[#111827] p-5"
              >
                <p className="font-medium">
                  Q{index + 1}. {item.question}
                </p>
                <button
                  onClick={() =>
                    setOpenNumerical(openNumerical === index ? null : index)
                  }
                  className="mt-4 rounded-lg bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-cyan-500/20"
                >
                  {openNumerical === index ? "Hide Solution" : "Show Solution"}
                </button>
                {openNumerical === index && (
                  <p className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-950/30 p-4 text-sm leading-6 text-cyan-100">
                    {item.answer}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-5 text-2xl font-bold">📝 Important Board Questions</h2>
          <div className="space-y-3">
            {boardQuestions.map((question, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-[#111827] p-4 text-sm leading-6 text-slate-200"
              >
                <span className="mr-2 font-bold text-cyan-400">
                  Q{index + 1}.
                </span>
                {question}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-3xl border border-cyan-500/20 bg-[#101827] p-5 sm:p-8">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Test Yourself
            </p>
            <h2 className="mt-2 text-2xl font-bold">Chapter 11 MCQ Quiz</h2>
            <p className="mt-2 text-sm text-slate-400">
              10 questions • 10 marks • Select one answer for each question.
            </p>
          </div>

          <div className="space-y-6">
            {questions.map((question, questionIndex) => (
              <div
                key={questionIndex}
                className="rounded-2xl border border-white/10 bg-[#0b1220] p-5"
              >
                <h3 className="mb-4 font-semibold">
                  {questionIndex + 1}. {question.q}
                </h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  {question.options.map((option, optionIndex) => {
                    const isSelected = selected[questionIndex] === optionIndex;
                    const isCorrect = question.answer === optionIndex;

                    let optionStyle =
                      "border-white/10 bg-white/5 hover:border-cyan-400/40";

                    if (!submitted && isSelected) {
                      optionStyle =
                        "border-cyan-400 bg-cyan-500/10 text-cyan-200";
                    }

                    if (submitted && isCorrect) {
                      optionStyle =
                        "border-green-500 bg-green-500/10 text-green-300";
                    } else if (submitted && isSelected && !isCorrect) {
                      optionStyle =
                        "border-red-500 bg-red-500/10 text-red-300";
                    }

                    return (
                      <button
                        key={optionIndex}
                        disabled={submitted}
                        onClick={() =>
                          selectAnswer(questionIndex, optionIndex)
                        }
                        className={`rounded-xl border p-3 text-left text-sm transition ${optionStyle}`}
                      >
                        {String.fromCharCode(65 + optionIndex)}. {option}
                      </button>
                    );
                  })}
                </div>

                {submitted && (
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    <span className="font-semibold text-cyan-300">
                      Explanation:
                    </span>{" "}
                    {question.explanation}
                  </p>
                )}
              </div>
            ))}
          </div>

          {!submitted ? (
            <button
              onClick={() => setSubmitted(true)}
              disabled={selected.some((answer) => answer === -1)}
              className="mt-6 w-full rounded-xl bg-cyan-500 px-6 py-3 font-bold text-[#07111f] transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Submit Quiz
            </button>
          ) : (
            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-950/30 p-6 text-center">
              <p className="text-sm text-cyan-300">Your Final Score</p>
              <p className="my-2 text-4xl font-bold">
                {score} / {questions.length}
              </p>
              <p className="text-sm text-slate-300">
                {score >= 8
                  ? "Excellent work! Keep revising."
                  : score >= 5
                    ? "Good effort! Revise the incorrect answers."
                    : "Keep practising. You can improve!"}
              </p>
              <button
                onClick={resetQuiz}
                className="mt-5 rounded-xl bg-cyan-500 px-6 py-3 font-bold text-[#07111f] hover:bg-cyan-400"
              >
                Try Again
              </button>
            </div>
          )}
        </section>

        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <Link
            href="/subjects/physics/wave-optics"
            className="rounded-xl border border-white/10 px-5 py-3 text-center text-sm text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300"
          >
            ← Previous: Wave Optics
          </Link>
          <Link
            href="/subjects/physics/atoms"
            className="rounded-xl bg-cyan-500 px-5 py-3 text-center text-sm font-bold text-[#07111f] hover:bg-cyan-400"
          >
            Next: Atoms →
          </Link>
        </div>
      </div>
    </main>
  );
}
