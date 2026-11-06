
"use client";

import { useState } from "react";
import Link from "next/link";

const topics = [
  {
    title: "1. Energy Bands in Solids",
    points: [
      "In solids, closely spaced energy levels form energy bands.",
      "The valence band contains valence electrons.",
      "The conduction band contains electrons that can conduct electricity.",
      "The forbidden energy gap separates the valence band and conduction band.",
    ],
  },
  {
    title: "2. Conductors, Insulators and Semiconductors",
    points: [
      "Conductors have overlapping valence and conduction bands.",
      "Insulators have a large forbidden energy gap.",
      "Semiconductors have a small forbidden energy gap.",
      "The conductivity of semiconductors increases with temperature.",
    ],
  },
  {
    title: "3. Intrinsic Semiconductors",
    points: [
      "A pure semiconductor is called an intrinsic semiconductor.",
      "Examples are pure silicon and germanium.",
      "In an intrinsic semiconductor, the number of electrons equals the number of holes.",
      "Thermal energy can create electron-hole pairs.",
    ],
  },
  {
    title: "4. Extrinsic Semiconductors",
    points: [
      "An extrinsic semiconductor is formed by adding a small amount of impurity.",
      "This process is called doping.",
      "Doping increases the electrical conductivity of a semiconductor.",
      "There are two types: n-type and p-type.",
    ],
  },
  {
    title: "5. n-Type Semiconductor",
    points: [
      "It is formed by doping silicon or germanium with a pentavalent impurity.",
      "Examples of impurities are phosphorus, arsenic and antimony.",
      "Electrons are the majority charge carriers.",
      "Holes are the minority charge carriers.",
    ],
  },
  {
    title: "6. p-Type Semiconductor",
    points: [
      "It is formed by doping silicon or germanium with a trivalent impurity.",
      "Examples include boron, aluminium and gallium.",
      "Holes are the majority charge carriers.",
      "Electrons are the minority charge carriers.",
    ],
  },
  {
    title: "7. p-n Junction Diode",
    points: [
      "A p-n junction is formed by joining p-type and n-type semiconductors.",
      "A depletion region forms near the junction.",
      "A potential barrier is created across the depletion region.",
      "A diode allows current mainly in one direction.",
    ],
  },
  {
    title: "8. Forward and Reverse Bias",
    points: [
      "In forward bias, the p-side is connected to the positive terminal and the n-side to the negative terminal.",
      "Forward bias reduces the potential barrier and allows significant current.",
      "In reverse bias, the p-side is connected to the negative terminal and the n-side to the positive terminal.",
      "Reverse bias increases the potential barrier and only a very small current flows.",
    ],
  },
  {
    title: "9. Diode as a Rectifier",
    points: [
      "A rectifier converts alternating current (AC) into direct current (DC).",
      "A half-wave rectifier uses one diode.",
      "A full-wave rectifier uses both halves of the AC input cycle.",
      "A filter capacitor can help smooth the rectified output.",
    ],
  },
  {
    title: "10. Special Purpose Diodes",
    points: [
      "A Zener diode is designed to operate in reverse breakdown.",
      "It is used for voltage regulation.",
      "An LED emits light when forward biased.",
      "A photodiode detects light and is generally operated in reverse bias.",
      "A solar cell converts light energy into electrical energy.",
    ],
  },
];

const formulas = [
  {
    name: "Energy of a photon",
    formula: "E = hν = hc/λ",
  },
  {
    name: "Conductivity",
    formula: "σ = 1/ρ",
  },
  {
    name: "Current",
    formula: "I = Q/t",
  },
  {
    name: "Ohm's law",
    formula: "V = IR",
  },
  {
    name: "Diode current (basic relation)",
    formula: "I = I₀ (e^(eV/ηkT) - 1)",
  },
  {
    name: "Energy gap",
    formula: "E₉ = E꜀ - Eᵥ",
  },
];

const numericals = [
  {
    question: "A charge of 20 C passes through a conductor in 5 seconds. Find the current.",
    solution:
      "Given:\nQ = 20 C\n t = 5 s\n\nI = Q/t\nI = 20/5\nI = 4 A",
  },
  {
    question: "A diode has a voltage of 0.7 V across it and current of 10 mA. Find its resistance using R = V/I.",
    solution:
      "Given:\nV = 0.7 V\nI = 10 mA = 0.01 A\n\nR = V/I\nR = 0.7/0.01\nR = 70 Ω",
  },
  {
    question: "Find the energy of a photon of frequency 5 × 10¹⁴ Hz. Take h = 6.63 × 10⁻³⁴ J s.",
    solution:
      "E = hν\nE = 6.63 × 10⁻³⁴ × 5 × 10¹⁴\nE = 33.15 × 10⁻²⁰ J\nE = 3.315 × 10⁻¹⁹ J",
  },
  {
    question: "A semiconductor has resistivity 2 Ω m. Find its conductivity.",
    solution:
      "Given:\nρ = 2 Ω m\n\nσ = 1/ρ\nσ = 1/2\nσ = 0.5 S/m",
  },
];

const boardQuestions = [
  "Explain the formation of energy bands in solids.",
  "Differentiate between conductors, insulators and semiconductors.",
  "What is an intrinsic semiconductor?",
  "Explain the formation of n-type and p-type semiconductors.",
  "What is a depletion region in a p-n junction?",
  "Explain forward bias and reverse bias of a p-n junction diode.",
  "Explain the working of a p-n junction diode as a rectifier.",
  "Write two uses each of LED, photodiode and Zener diode.",
];

const mcqs = [
  {
    question: "A pure semiconductor is called:",
    options: ["Extrinsic", "Intrinsic", "Conducting", "Insulating"],
    answer: 1,
    explanation: "A pure semiconductor without added impurities is called an intrinsic semiconductor.",
  },
  {
    question: "Which of the following is a semiconductor?",
    options: ["Copper", "Silicon", "Rubber", "Wood"],
    answer: 1,
    explanation: "Silicon is a commonly used semiconductor.",
  },
  {
    question: "An n-type semiconductor is formed by adding:",
    options: ["Trivalent impurity", "Pentavalent impurity", "Divalent impurity", "No impurity"],
    answer: 1,
    explanation: "Pentavalent impurities provide extra electrons and form n-type semiconductors.",
  },
  {
    question: "The majority charge carriers in a p-type semiconductor are:",
    options: ["Electrons", "Protons", "Holes", "Neutrons"],
    answer: 2,
    explanation: "Holes are the majority charge carriers in p-type semiconductors.",
  },
  {
    question: "The majority charge carriers in an n-type semiconductor are:",
    options: ["Holes", "Electrons", "Protons", "Neutrons"],
    answer: 1,
    explanation: "Electrons are the majority charge carriers in n-type semiconductors.",
  },
  {
    question: "The depletion region is formed near:",
    options: ["The p-n junction", "The battery", "The switch", "The resistor"],
    answer: 0,
    explanation: "The depletion region forms near the boundary of the p-type and n-type regions.",
  },
  {
    question: "In forward bias, the p-side is connected to:",
    options: ["Negative terminal", "Positive terminal", "Ground only", "No terminal"],
    answer: 1,
    explanation: "In forward bias, the p-side connects to positive and the n-side to negative.",
  },
  {
    question: "A rectifier converts:",
    options: ["DC into AC", "AC into DC", "Heat into light", "Light into sound"],
    answer: 1,
    explanation: "A rectifier converts alternating current into direct current.",
  },
  {
    question: "A Zener diode is mainly used for:",
    options: ["Voltage regulation", "Producing sound", "Storing data", "Increasing resistance"],
    answer: 0,
    explanation: "A Zener diode is commonly used to maintain a nearly constant output voltage.",
  },
  {
    question: "An LED emits light when it is:",
    options: ["Reverse biased", "Forward biased", "Disconnected", "Broken"],
    answer: 1,
    explanation: "An LED emits light when forward biased and current flows through it.",
  },
];

export default function SemiconductorElectronicsPage() {
  const [openNumerical, setOpenNumerical] = useState<number | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const score = mcqs.reduce(
    (total, question, index) =>
      total + (selectedAnswers[index] === question.answer ? 1 : 0),
    0
  );

  function handleAnswer(questionIndex: number, optionIndex: number) {
    if (submitted) return;

    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(updatedAnswers);
  }

  function retryQuiz() {
    setSelectedAnswers([]);
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

        <section className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/60 to-blue-950/30 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Class 12 Physics · Chapter 14
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-5xl">
            Semiconductor Electronics
          </h1>
          <p className="mt-4 max-w-2xl text-gray-300">
            Learn about semiconductors, p-n junction diodes, rectifiers and
            special purpose diodes through notes, formulas, numericals and
            MCQ practice.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-cyan-300">
              Chapter Notes
            </span>
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-cyan-300">
              Formula Sheet
            </span>
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-cyan-300">
              MCQ Quiz
            </span>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-5 text-2xl font-bold">Chapter Topics</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="rounded-2xl border border-white/10 bg-[#111827] p-5"
              >
                <h3 className="mb-3 font-semibold text-cyan-300">
                  {topic.title}
                </h3>
                <ul className="space-y-2 text-sm leading-6 text-gray-300">
                  {topic.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-5 text-2xl font-bold">Important Formulas</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {formulas.map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-cyan-500/20 bg-[#111827] p-4"
              >
                <p className="text-sm text-gray-400">{item.name}</p>
                <p className="mt-2 font-mono text-lg text-cyan-300">
                  {item.formula}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-gray-400">
            Note: These are useful basic relations. The diode current
            equation uses I₀ as reverse saturation current, η as ideality
            factor, k as Boltzmann constant and T as absolute temperature.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-5 text-2xl font-bold">Solved Numericals</h2>
          <div className="space-y-4">
            {numericals.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-[#111827] p-5"
              >
                <h3 className="font-semibold">
                  Q{index + 1}. {item.question}
                </h3>
                <button
                  onClick={() =>
                    setOpenNumerical(
                      openNumerical === index ? null : index
                    )
                  }
                  className="mt-4 rounded-lg bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-cyan-500/25"
                >
                  {openNumerical === index ? "Hide Solution" : "Show Solution"}
                </button>
                {openNumerical === index && (
                  <pre className="mt-4 whitespace-pre-wrap rounded-xl bg-black/30 p-4 text-sm leading-7 text-gray-300">
                    {item.solution}
                  </pre>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-5 text-2xl font-bold">
            Important Board Questions
          </h2>
          <div className="rounded-2xl border border-white/10 bg-[#111827] p-5">
            <ol className="list-decimal space-y-4 pl-5 text-gray-300">
              {boardQuestions.map((question, index) => (
                <li key={index}>{question}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-cyan-500/20 bg-[#111827] p-5 sm:p-8">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Test Your Knowledge
            </p>
            <h2 className="mt-2 text-2xl font-bold">
              Chapter 14 MCQ Quiz
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              10 questions · 1 mark each
            </p>
          </div>

          <div className="space-y-7">
            {mcqs.map((question, questionIndex) => (
              <div
                key={questionIndex}
                className="border-b border-white/10 pb-6 last:border-0"
              >
                <h3 className="font-semibold">
                  Q{questionIndex + 1}. {question.question}
                </h3>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {question.options.map((option, optionIndex) => {
                    const isSelected =
                      selectedAnswers[questionIndex] === optionIndex;
                    const isCorrect = question.answer === optionIndex;

                    let optionStyle =
                      "border-white/10 bg-white/5 hover:border-cyan-400/50";

                    if (submitted && isCorrect) {
                      optionStyle =
                        "border-green-500 bg-green-500/10 text-green-300";
                    } else if (submitted && isSelected && !isCorrect) {
                      optionStyle =
                        "border-red-500 bg-red-500/10 text-red-300";
                    } else if (isSelected) {
                      optionStyle =
                        "border-cyan-400 bg-cyan-500/10 text-cyan-300";
                    }

                    return (
                      <button
                        key={optionIndex}
                        onClick={() =>
                          handleAnswer(questionIndex, optionIndex)
                        }
                        disabled={submitted}
                        className={`rounded-xl border p-3 text-left text-sm transition ${optionStyle}`}
                      >
                        {String.fromCharCode(65 + optionIndex)}. {option}
                      </button>
                    );
                  })}
                </div>

                {submitted && (
                  <p className="mt-3 text-sm leading-6 text-gray-400">
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
              disabled={
                selectedAnswers.length !== mcqs.length ||
                selectedAnswers.some((a) => a === undefined)
              }
              className="mt-6 w-full rounded-xl bg-cyan-500 px-6 py-3 font-bold text-[#07111f] transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Submit Quiz
            </button>
          ) : (
            <div className="mt-8 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-6 text-center">
              <p className="text-sm uppercase tracking-widest text-cyan-300">
                Your Final Score
              </p>
              <p className="mt-2 text-4xl font-bold">
                {score} / {mcqs.length}
              </p>
              <p className="mt-2 text-gray-300">
                {score >= 8
                  ? "Excellent work! Keep it up."
                  : score >= 5
                    ? "Good effort! Revise the explanations once."
                    : "Keep practising. You can improve!"}
              </p>
              <button
                onClick={retryQuiz}
                className="mt-5 rounded-xl bg-cyan-500 px-6 py-3 font-bold text-[#07111f] hover:bg-cyan-400"
              >
                Retry Quiz
              </button>
            </div>
          )}
        </section>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <Link
            href="/subjects/physics/nuclei"
            className="rounded-xl border border-white/10 px-5 py-3 text-center text-sm text-gray-300 hover:border-cyan-400 hover:text-cyan-300"
          >
            ← Previous: Nuclei
          </Link>
          <Link
            href="/subjects/physics"
            className="rounded-xl bg-cyan-500 px-5 py-3 text-center text-sm font-bold text-[#07111f] hover:bg-cyan-400"
          >
            Back to Physics Chapters →
          </Link>
        </div>
      </div>
    </main>
  );
}
