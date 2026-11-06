
"use client";

import { useState } from "react";
import Link from "next/link";

const topics = [
  {
    title: "Reflection of Light",
    detail:
      "Reflection is the bouncing back of light into the same medium after striking a surface. Laws: angle of incidence equals angle of reflection, and incident ray, reflected ray and normal lie in the same plane.",
  },
  {
    title: "Spherical Mirrors",
    detail:
      "Spherical mirrors have reflecting surfaces that form part of a sphere. Concave mirrors converge parallel rays, while convex mirrors diverge them.",
  },
  {
    title: "Mirror Formula and Magnification",
    detail:
      "The mirror formula relates object distance, image distance and focal length. Magnification tells us the size and nature of the image.",
  },
  {
    title: "Refraction of Light",
    detail:
      "Refraction is the change in direction of light when it passes from one transparent medium to another because its speed changes.",
  },
  {
    title: "Total Internal Reflection",
    detail:
      "When light travels from a denser to a rarer medium and the angle of incidence exceeds the critical angle, it is completely reflected back.",
  },
  {
    title: "Refraction at Spherical Surfaces",
    detail:
      "When light passes through a spherical refracting surface, the object distance, image distance, radius of curvature and refractive indices are related by a formula.",
  },
  {
    title: "Thin Lenses",
    detail:
      "A convex lens is converging and a concave lens is diverging. A lens forms images by refraction through its two surfaces.",
  },
  {
    title: "Lens Formula and Power",
    detail:
      "The lens formula relates object distance, image distance and focal length. Power measures the ability of a lens to converge or diverge light.",
  },
  {
    title: "Optical Instruments",
    detail:
      "A simple microscope, compound microscope and astronomical telescope use lenses to produce magnified images of objects.",
  },
];

const formulas = [
  {
    name: "Mirror Formula",
    formula: "1/f = 1/v + 1/u",
  },
  {
    name: "Mirror Magnification",
    formula: "m = -v/u = hᵢ/hₒ",
  },
  {
    name: "Snell's Law",
    formula: "n₁ sin i = n₂ sin r",
  },
  {
    name: "Refractive Index",
    formula: "n = c/v",
  },
  {
    name: "Critical Angle",
    formula: "sin C = 1/n (denser to air)",
  },
  {
    name: "Refraction at Spherical Surface",
    formula: "n₂/v - n₁/u = (n₂ - n₁)/R",
  },
  {
    name: "Lens Formula",
    formula: "1/f = 1/v - 1/u",
  },
  {
    name: "Lens Magnification",
    formula: "m = v/u = hᵢ/hₒ",
  },
  {
    name: "Power of Lens",
    formula: "P = 1/f (f in metres)",
  },
  {
    name: "Combination of Lenses",
    formula: "P = P₁ + P₂",
  },
  {
    name: "Magnifying Power of Telescope",
    formula: "M = fₒ/fₑ (normal adjustment)",
  },
];

const numericals = [
  {
    question:
      "A concave mirror has a focal length of 15 cm. Find its radius of curvature.",
    answer: "R = 2f = 2 × 15 = 30 cm.",
  },
  {
    question:
      "The speed of light in a medium is 2 × 10⁸ m/s. Find its refractive index.",
    answer:
      "n = c/v = (3 × 10⁸)/(2 × 10⁸) = 1.5.",
  },
  {
    question:
      "A convex lens has a focal length of 0.5 m. Find its power.",
    answer: "P = 1/f = 1/0.5 = +2 D.",
  },
  {
    question:
      "Two lenses have powers +2 D and +3 D. Find their combined power.",
    answer: "P = P₁ + P₂ = 2 + 3 = +5 D.",
  },
];

const boardQuestions = [
  "State the laws of reflection of light.",
  "Draw ray diagrams for image formation by a concave mirror.",
  "State Snell's law of refraction.",
  "Explain total internal reflection and write its two applications.",
  "Derive the relation between focal length and radius of curvature of a spherical mirror.",
  "Write the lens maker's formula and explain its terms.",
  "Define power of a lens. State its SI unit.",
  "Explain the working of an astronomical telescope with a ray diagram.",
];

const questions = [
  {
    q: "Which mirror is used as a rear-view mirror in vehicles?",
    options: ["Concave", "Convex", "Plane", "Cylindrical"],
    answer: 1,
    explanation:
      "A convex mirror gives a wider field of view and forms erect, diminished images.",
  },
  {
    q: "What is the SI unit of power of a lens?",
    options: ["Metre", "Watt", "Dioptre", "Newton"],
    answer: 2,
    explanation: "The SI unit of lens power is dioptre (D).",
  },
  {
    q: "The focal length of a plane mirror is:",
    options: ["Zero", "Infinite", "One metre", "Negative"],
    answer: 1,
    explanation: "A plane mirror has an infinite radius of curvature and focal length.",
  },
  {
    q: "Which lens is a converging lens?",
    options: ["Concave lens", "Convex lens", "Plane glass", "None"],
    answer: 1,
    explanation: "A convex lens converges parallel rays of light.",
  },
  {
    q: "What happens during total internal reflection?",
    options: [
      "Light is absorbed",
      "Light passes completely through",
      "Light is completely reflected back",
      "Light stops moving",
    ],
    answer: 2,
    explanation:
      "At an angle greater than the critical angle, light is completely reflected into the denser medium.",
  },
  {
    q: "The refractive index of a medium is given by:",
    options: ["v/c", "c/v", "c × v", "c + v"],
    answer: 1,
    explanation: "Absolute refractive index n = speed of light in vacuum / speed in medium.",
  },
  {
    q: "The radius of curvature of a spherical mirror is:",
    options: ["R = f", "R = 2f", "R = f/2", "R = 4f"],
    answer: 1,
    explanation: "For a spherical mirror, the radius of curvature is twice its focal length.",
  },
  {
    q: "Which phenomenon is used in optical fibres?",
    options: [
      "Reflection only",
      "Total internal reflection",
      "Diffraction",
      "Interference",
    ],
    answer: 1,
    explanation:
      "Optical fibres transmit light using repeated total internal reflection.",
  },
  {
    q: "A convex lens has positive or negative focal length?",
    options: ["Positive", "Negative", "Zero", "Infinite"],
    answer: 0,
    explanation:
      "According to the Cartesian sign convention, a convex lens has positive focal length.",
  },
  {
    q: "Which instrument is used to observe distant astronomical objects?",
    options: [
      "Simple microscope",
      "Compound microscope",
      "Astronomical telescope",
      "Periscope",
    ],
    answer: 2,
    explanation:
      "An astronomical telescope is used to observe distant celestial objects.",
  },
];

export default function RayOpticsPage() {
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
            Class 12 Physics • Chapter 09
          </p>
          <h1 className="text-3xl font-bold sm:text-5xl">
            Ray Optics and Optical Instruments
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Learn reflection, refraction, mirrors, lenses and optical
            instruments with simple notes, important formulas, solved
            numericals and practice questions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-cyan-100">
            <span className="rounded-full border border-cyan-400/30 px-4 py-2">
              Notes
            </span>
            <span className="rounded-full border border-cyan-400/30 px-4 py-2">
              Formula Sheet
            </span>
            <span className="rounded-full border border-cyan-400/30 px-4 py-2">
              Numericals
            </span>
            <span className="rounded-full border border-cyan-400/30 px-4 py-2">
              MCQ Quiz
            </span>
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
            <h2 className="mt-2 text-2xl font-bold">Chapter 9 MCQ Quiz</h2>
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
            href="/subjects/physics/electromagnetic-waves"
            className="rounded-xl border border-white/10 px-5 py-3 text-center text-sm text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300"
          >
            ← Previous: Electromagnetic Waves
          </Link>
          <Link
            href="/subjects/physics/wave-optics"
            className="rounded-xl bg-cyan-500 px-5 py-3 text-center text-sm font-bold text-[#07111f] hover:bg-cyan-400"
          >
            Next: Wave Optics →
          </Link>
        </div>
      </div>
    </main>
  );
}
