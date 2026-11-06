
"use client";

import { useState } from "react";
import Link from "next/link";

const topics = [
  {
    title: "1. Composition of Nucleus",
    points: [
      "The nucleus is present at the centre of an atom.",
      "It contains protons and neutrons, together called nucleons.",
      "Protons are positively charged, while neutrons have no charge.",
      "Atomic number (Z) is the number of protons.",
      "Mass number (A) is the total number of protons and neutrons.",
    ],
  },
  {
    title: "2. Isotopes, Isobars and Isotones",
    points: [
      "Isotopes have the same atomic number but different mass numbers.",
      "Isobars have the same mass number but different atomic numbers.",
      "Isotones have the same number of neutrons.",
      "Example of isotopes: ¹H, ²H and ³H.",
    ],
  },
  {
    title: "3. Size of the Nucleus",
    points: [
      "The radius of a nucleus depends on its mass number.",
      "Nuclear radius is given by R = R₀A^(1/3).",
      "R₀ is approximately 1.2 × 10⁻¹⁵ m.",
      "Nuclear density is nearly the same for all nuclei.",
    ],
  },
  {
    title: "4. Mass-Energy Relation",
    points: [
      "Mass and energy are related by Einstein's equation E = mc².",
      "A small amount of mass can represent a large amount of energy.",
      "This relation explains the energy released in nuclear reactions.",
    ],
  },
  {
    title: "5. Mass Defect",
    points: [
      "The mass of a nucleus is less than the total mass of its separate nucleons.",
      "This difference is called mass defect.",
      "Mass defect is responsible for the binding energy of the nucleus.",
      "Δm = Zmₚ + (A-Z)mₙ - M.",
    ],
  },
  {
    title: "6. Binding Energy",
    points: [
      "Binding energy is the energy required to separate a nucleus completely into its nucleons.",
      "Binding energy = mass defect × c².",
      "Greater binding energy per nucleon generally means a more stable nucleus.",
      "Iron and nearby nuclei have very high binding energy per nucleon.",
    ],
  },
  {
    title: "7. Nuclear Fission",
    points: [
      "Nuclear fission is the splitting of a heavy nucleus into lighter nuclei.",
      "A large amount of energy is released.",
      "Uranium-235 can undergo fission after absorbing a neutron.",
      "Fission is used in nuclear reactors.",
    ],
  },
  {
    title: "8. Nuclear Fusion",
    points: [
      "Nuclear fusion is the joining of two light nuclei to form a heavier nucleus.",
      "A large amount of energy is released.",
      "Fusion is the main source of energy in the Sun and stars.",
      "Fusion requires extremely high temperature.",
    ],
  },
  {
    title: "9. Nuclear Force",
    points: [
      "Nuclear force acts between nucleons.",
      "It is a very strong attractive force.",
      "It is short-ranged.",
      "It is approximately charge-independent.",
      "It helps keep the nucleus stable.",
    ],
  },
];

const formulas = [
  { name: "Mass number", formula: "A = Z + N" },
  { name: "Number of neutrons", formula: "N = A - Z" },
  { name: "Nuclear radius", formula: "R = R₀ A^(1/3)" },
  { name: "Nuclear radius constant", formula: "R₀ ≈ 1.2 × 10⁻¹⁵ m" },
  { name: "Mass defect", formula: "Δm = Zmₚ + (A-Z)mₙ - M" },
  { name: "Binding energy", formula: "BE = Δm c²" },
  { name: "Binding energy per nucleon", formula: "BE/A" },
  { name: "Mass-energy relation", formula: "E = mc²" },
  { name: "Energy conversion", formula: "1 u ≈ 931.5 MeV/c²" },
];

const numericals = [
  {
    question: "A nucleus has atomic number 8 and mass number 16. Find the number of neutrons.",
    solution:
      "A = 16, Z = 8\nNumber of neutrons = A - Z\n= 16 - 8\n= 8 neutrons",
  },
  {
    question: "Find the approximate radius of a nucleus with mass number 27. Take R₀ = 1.2 × 10⁻¹⁵ m.",
    solution:
      "R = R₀ A^(1/3)\nR = 1.2 × 10⁻¹⁵ × 27^(1/3)\nR = 1.2 × 10⁻¹⁵ × 3\nR = 3.6 × 10⁻¹⁵ m",
  },
  {
    question: "A nucleus has a mass defect of 0.01 u. Find its binding energy. Take 1 u = 931.5 MeV/c².",
    solution:
      "Binding energy = mass defect × 931.5 MeV\n= 0.01 × 931.5\n= 9.315 MeV",
  },
  {
    question: "A nucleus has a binding energy of 56 MeV and contains 7 nucleons. Find its binding energy per nucleon.",
    solution:
      "Binding energy per nucleon = Total binding energy / A\n= 56 / 7\n= 8 MeV per nucleon",
  },
];

const boardQuestions = [
  "Define atomic number and mass number.",
  "Differentiate between isotopes, isobars and isotones with examples.",
  "Write the relation between nuclear radius and mass number.",
  "What is mass defect? Explain its significance.",
  "Define binding energy and binding energy per nucleon.",
  "Draw or explain the binding energy per nucleon curve.",
  "Differentiate between nuclear fission and nuclear fusion.",
  "Why is nuclear fusion the source of energy in the Sun?",
];

const mcqs = [
  {
    question: "The nucleus contains:",
    options: ["Electrons only", "Protons and neutrons", "Protons only", "Neutrons and electrons"],
    answer: 1,
    explanation: "The nucleus contains protons and neutrons, collectively called nucleons.",
  },
  {
    question: "Mass number is equal to:",
    options: ["Protons only", "Neutrons only", "Protons + neutrons", "Protons - neutrons"],
    answer: 2,
    explanation: "A = Z + N, where Z is protons and N is neutrons.",
  },
  {
    question: "Isotopes have:",
    options: [
      "Same mass number",
      "Same atomic number",
      "Same number of neutrons",
      "Different atomic numbers and same mass number",
    ],
    answer: 1,
    explanation: "Isotopes have the same atomic number but different mass numbers.",
  },
  {
    question: "The approximate value of R₀ is:",
    options: [
      "1.2 × 10⁻¹⁵ m",
      "1.2 × 10⁻¹⁰ m",
      "9 × 10⁹ m",
      "6.6 × 10⁻³⁴ m",
    ],
    answer: 0,
    explanation: "The nuclear radius constant is approximately 1.2 × 10⁻¹⁵ m.",
  },
  {
    question: "Mass defect is related to:",
    options: ["Binding energy", "Electric current", "Resistance", "Wavelength only"],
    answer: 0,
    explanation: "Mass defect is converted into binding energy using E = Δmc².",
  },
  {
    question: "The unit commonly used for nuclear binding energy is:",
    options: ["Metre", "Ampere", "MeV", "Ohm"],
    answer: 2,
    explanation: "Nuclear binding energy is commonly expressed in mega electron volts (MeV).",
  },
  {
    question: "Nuclear fission means:",
    options: [
      "Joining light nuclei",
      "Splitting a heavy nucleus",
      "Removing electrons",
      "Splitting an electron",
    ],
    answer: 1,
    explanation: "Fission is the splitting of a heavy nucleus into lighter nuclei.",
  },
  {
    question: "Nuclear fusion is the main energy source of:",
    options: ["Batteries", "The Sun", "Electric fans", "Hydroelectric dams"],
    answer: 1,
    explanation: "The Sun produces energy through nuclear fusion.",
  },
  {
    question: "The most stable nuclei have:",
    options: [
      "Very low binding energy per nucleon",
      "High binding energy per nucleon",
      "Zero mass",
      "No neutrons",
    ],
    answer: 1,
    explanation: "Higher binding energy per nucleon generally indicates greater nuclear stability.",
  },
  {
    question: "Einstein's mass-energy relation is:",
    options: ["V = IR", "F = ma", "E = mc²", "P = VI"],
    answer: 2,
    explanation: "Einstein's equation E = mc² relates mass and energy.",
  },
];

export default function NucleiPage() {
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
            Class 12 Physics · Chapter 13
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-5xl">Nuclei</h1>
          <p className="mt-4 max-w-2xl text-gray-300">
            Understand nuclear structure, mass defect, binding energy,
            nuclear fission and fusion through notes, formulas, solved
            numericals and MCQ practice.
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
            Here, A is mass number, Z is atomic number, N is number of
            neutrons, and M is the actual nuclear mass.
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
              Chapter 13 MCQ Quiz
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
              disabled={selectedAnswers.length !== mcqs.length || selectedAnswers.some((a) => a === undefined)}
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
            href="/subjects/physics/atoms"
            className="rounded-xl border border-white/10 px-5 py-3 text-center text-sm text-gray-300 hover:border-cyan-400 hover:text-cyan-300"
          >
            ← Previous: Atoms
          </Link>
          <Link
            href="/subjects/physics/semiconductor-electronics"
            className="rounded-xl bg-cyan-500 px-5 py-3 text-center text-sm font-bold text-[#07111f] hover:bg-cyan-400"
          >
            Next: Semiconductor Electronics →
          </Link>
        </div>
      </div>
    </main>
  );
}
