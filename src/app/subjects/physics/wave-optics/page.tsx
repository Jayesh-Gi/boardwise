
"use client";

import { useState } from "react";
import Link from "next/link";

const topics = [
  {
    title: "Wavefront",
    detail:
      "A wavefront is a surface on which all particles of a medium vibrate in the same phase. Rays are always perpendicular to the wavefront.",
  },
  {
    title: "Huygens' Principle",
    detail:
      "Every point on a wavefront acts as a source of secondary wavelets. The new wavefront is the forward envelope of these wavelets.",
  },
  {
    title: "Reflection of Plane Waves",
    detail:
      "Huygens' principle explains reflection. The angle of incidence is equal to the angle of reflection.",
  },
  {
    title: "Refraction of Plane Waves",
    detail:
      "When a wave enters another medium, its speed and wavelength change. Its frequency remains constant. This causes refraction.",
  },
  {
    title: "Coherent Sources",
    detail:
      "Two sources are coherent if they produce waves of the same frequency and maintain a constant phase difference.",
  },
  {
    title: "Interference of Light",
    detail:
      "Interference is the redistribution of light intensity due to the superposition of two coherent light waves. It produces bright and dark fringes.",
  },
  {
    title: "Young's Double Slit Experiment",
    detail:
      "In YDSE, light from two coherent slits overlaps on a screen and forms alternate bright and dark fringes.",
  },
  {
    title: "Diffraction of Light",
    detail:
      "Diffraction is the bending and spreading of light around obstacles or through narrow openings. It is significant when the opening is comparable to the wavelength.",
  },
  {
    title: "Polarisation",
    detail:
      "Polarisation restricts the vibrations of light to one direction. It shows that light is a transverse wave.",
  },
];

const formulas = [
  {
    name: "Path Difference",
    formula: "Δx = d sin θ",
  },
  {
    name: "Phase Difference",
    formula: "φ = 2πΔx / λ",
  },
  {
    name: "Bright Fringe Condition",
    formula: "Δx = nλ",
  },
  {
    name: "Dark Fringe Condition",
    formula: "Δx = (n + 1/2)λ",
  },
  {
    name: "Fringe Width",
    formula: "β = λD/d",
  },
  {
    name: "Position of Bright Fringe",
    formula: "yₙ = nλD/d",
  },
  {
    name: "Position of Dark Fringe",
    formula: "yₙ = (n + 1/2)λD/d",
  },
  {
    name: "Intensity of Two Waves",
    formula: "I = I₁ + I₂ + 2√(I₁I₂) cos φ",
  },
  {
    name: "Single Slit Diffraction Minima",
    formula: "a sin θ = nλ",
  },
  {
    name: "Malus' Law",
    formula: "I = I₀ cos² θ",
  },
];

const numericals = [
  {
    question:
      "In YDSE, λ = 600 nm, D = 2 m and d = 1 mm. Find the fringe width.",
    answer:
      "β = λD/d = (600 × 10⁻⁹ × 2)/(1 × 10⁻³) = 1.2 × 10⁻³ m = 1.2 mm.",
  },
  {
    question:
      "The path difference between two waves is λ/2. Find their phase difference.",
    answer:
      "φ = 2πΔx/λ = 2π(λ/2)/λ = π radians = 180°.",
  },
  {
    question:
      "If the fringe width is 2 mm, what is the distance between two consecutive bright fringes?",
    answer:
      "The distance between consecutive bright fringes is equal to fringe width. Therefore, distance = 2 mm.",
  },
  {
    question:
      "Unpolarised light of intensity 100 W/m² passes through an ideal polariser. Find the transmitted intensity.",
    answer:
      "For unpolarised light, I = I₀/2 = 100/2 = 50 W/m².",
  },
];

const boardQuestions = [
  "State Huygens' principle.",
  "Define wavefront. Explain spherical and plane wavefronts.",
  "Using Huygens' principle, explain the laws of reflection.",
  "What are coherent sources of light?",
  "Explain Young's double slit experiment and derive the expression for fringe width.",
  "Differentiate between constructive and destructive interference.",
  "What is diffraction of light? State the condition for observing diffraction.",
  "What is polarisation? How does it prove that light is a transverse wave?",
];

const questions = [
  {
    q: "Which principle is used to explain the propagation of wavefronts?",
    options: ["Newton's law", "Huygens' principle", "Ohm's law", "Snell's law"],
    answer: 1,
    explanation:
      "Huygens' principle explains how a wavefront advances through secondary wavelets.",
  },
  {
    q: "What is the nature of light waves?",
    options: ["Longitudinal", "Transverse", "Mechanical only", "Stationary"],
    answer: 1,
    explanation:
      "Light is an electromagnetic transverse wave.",
  },
  {
    q: "Coherent sources have:",
    options: [
      "Different frequencies",
      "Random phase difference",
      "Same frequency and constant phase difference",
      "Different wavelengths always",
    ],
    answer: 2,
    explanation:
      "Coherent sources maintain the same frequency and a constant phase difference.",
  },
  {
    q: "In YDSE, the condition for a bright fringe is:",
    options: ["Δx = λ/2", "Δx = nλ", "Δx = (2n+1)λ", "Δx = 0 only"],
    answer: 1,
    explanation:
      "Constructive interference produces bright fringes when path difference is nλ.",
  },
  {
    q: "The condition for a dark fringe is:",
    options: ["Δx = nλ", "Δx = 2nλ", "Δx = (n+1/2)λ", "Δx = 0"],
    answer: 2,
    explanation:
      "Destructive interference occurs when path difference is an odd multiple of λ/2.",
  },
  {
    q: "The fringe width in YDSE is:",
    options: ["λd/D", "λD/d", "dD/λ", "D/(λd)"],
    answer: 1,
    explanation:
      "Fringe width β = λD/d, where D is screen distance and d is slit separation.",
  },
  {
    q: "If the wavelength increases, fringe width:",
    options: ["Increases", "Decreases", "Becomes zero", "Does not change"],
    answer: 0,
    explanation:
      "Since β is directly proportional to wavelength, fringe width increases.",
  },
  {
    q: "Diffraction is most noticeable when the slit width is:",
    options: [
      "Much larger than wavelength",
      "Comparable to wavelength",
      "Infinite",
      "Always zero",
    ],
    answer: 1,
    explanation:
      "Diffraction is significant when the size of the opening is comparable to wavelength.",
  },
  {
    q: "Polarisation proves that light is:",
    options: ["Longitudinal", "Transverse", "A sound wave", "A matter wave only"],
    answer: 1,
    explanation:
      "Only transverse waves can be polarised.",
  },
  {
    q: "Malus' law is:",
    options: [
      "I = I₀ sin θ",
      "I = I₀ cos θ",
      "I = I₀ cos² θ",
      "I = I₀ tan θ",
    ],
    answer: 2,
    explanation:
      "Malus' law states that transmitted intensity is I = I₀ cos² θ.",
  },
];

export default function WaveOpticsPage() {
  const [openNumerical, setOpenNumerical] = useState<number | null>(null);
  const [selected, setSelected] = useState<number[]>(Array(questions.length).fill(-1));
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
            Class 12 Physics • Chapter 10
          </p>
          <h1 className="text-3xl font-bold sm:text-5xl">Wave Optics</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Understand wavefronts, Huygens' principle, interference,
            diffraction and polarisation with simple notes and practice.
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
                <p className="text-sm leading-6 text-slate-300">{topic.detail}</p>
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
                <p className="font-medium">Q{index + 1}. {item.question}</p>
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
                <span className="mr-2 font-bold text-cyan-400">Q{index + 1}.</span>
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
            <h2 className="mt-2 text-2xl font-bold">Chapter 10 MCQ Quiz</h2>
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
                        onClick={() => selectAnswer(questionIndex, optionIndex)}
                        className={`rounded-xl border p-3 text-left text-sm transition ${optionStyle}`}
                      >
                        {String.fromCharCode(65 + optionIndex)}. {option}
                      </button>
                    );
                  })}
                </div>

                {submitted && (
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    <span className="font-semibold text-cyan-300">Explanation:</span>{" "}
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
            href="/subjects/physics/ray-optics-and-optical-instruments"
            className="rounded-xl border border-white/10 px-5 py-3 text-center text-sm text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300"
          >
            ← Previous: Ray Optics
          </Link>
          <Link
            href="/subjects/physics/dual-nature-of-radiation-and-matter"
            className="rounded-xl bg-cyan-500 px-5 py-3 text-center text-sm font-bold text-[#07111f] hover:bg-cyan-400"
          >
            Next: Dual Nature →
          </Link>
        </div>
      </div>
    </main>
  );
}
