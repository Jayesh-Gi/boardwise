
"use client";

import { useState } from "react";
import Link from "next/link";

const topics = [
  {
    title: "1. Rutherford's Alpha Particle Scattering Experiment",
    points: [
      "Rutherford bombarded a thin gold foil with alpha particles.",
      "Most alpha particles passed straight through the foil.",
      "Some particles were deflected through small angles.",
      "Very few particles bounced back.",
      "This showed that most of the atom is empty space and its positive charge is concentrated in a tiny nucleus.",
    ],
  },
  {
    title: "2. Rutherford's Nuclear Model",
    points: [
      "An atom has a very small, positively charged nucleus.",
      "Almost all the mass of the atom is concentrated in the nucleus.",
      "Electrons revolve around the nucleus.",
      "Most of the space inside an atom is empty.",
    ],
  },
  {
    title: "3. Limitations of Rutherford's Model",
    points: [
      "A revolving electron is an accelerating charged particle.",
      "According to classical physics, it should continuously lose energy.",
      "It should eventually fall into the nucleus.",
      "The model could not explain the stability of atoms or their line spectra.",
    ],
  },
  {
    title: "4. Bohr's Atomic Model",
    points: [
      "Electrons revolve only in certain permitted stable orbits.",
      "Electrons do not radiate energy while moving in these permitted orbits.",
      "Angular momentum is quantised: mvr = nh/2π.",
      "Energy is absorbed or emitted when an electron jumps between two energy levels.",
    ],
  },
  {
    title: "5. Energy Levels of Hydrogen",
    points: [
      "The energy of an electron in the nth orbit is Eₙ = -13.6/n² eV for hydrogen.",
      "The ground state is n = 1 and has energy -13.6 eV.",
      "Higher energy levels have less negative energy.",
      "At n = infinity, the electron is free and its energy is taken as zero.",
    ],
  },
  {
    title: "6. Hydrogen Line Spectrum",
    points: [
      "When an electron moves from a higher energy level to a lower level, a photon is emitted.",
      "When an electron absorbs energy, it can jump to a higher energy level.",
      "Each transition produces light of a particular wavelength.",
      "This produces the line spectrum of hydrogen.",
    ],
  },
  {
    title: "7. Excitation and Ionisation Energy",
    points: [
      "Excitation energy is the energy needed to move an electron to a higher energy level.",
      "Ionisation energy is the energy needed to remove an electron completely from an atom.",
      "For hydrogen in its ground state, ionisation energy is 13.6 eV.",
    ],
  },
  {
    title: "8. Distance of Closest Approach",
    points: [
      "An alpha particle moving towards a nucleus slows down due to electrostatic repulsion.",
      "At the closest point in a head-on approach, its initial kinetic energy becomes electrostatic potential energy.",
      "This concept helps estimate the size of the nucleus.",
    ],
  },
  {
    title: "9. Important Points to Remember",
    points: [
      "Atomic number Z is the number of protons.",
      "For a hydrogen-like atom, there is only one electron.",
      "Bohr's model works well for hydrogen and hydrogen-like ions.",
      "The energy of emitted photons is equal to the difference between the two energy levels.",
    ],
  },
];

const formulas = [
  {
    name: "Bohr's angular momentum",
    formula: "mvr = nh / 2π",
  },
  {
    name: "Radius of nth orbit",
    formula: "rₙ = n²a₀ / Z",
  },
  {
    name: "Bohr radius",
    formula: "a₀ = 0.529 Å",
  },
  {
    name: "Energy of nth orbit",
    formula: "Eₙ = -13.6 Z² / n² eV",
  },
  {
    name: "Photon energy",
    formula: "hν = Eᵢ - E_f",
  },
  {
    name: "Rydberg formula",
    formula: "1/λ = RZ² (1/n₁² - 1/n₂²)",
  },
  {
    name: "Rydberg constant",
    formula: "R = 1.097 × 10⁷ m⁻¹",
  },
  {
    name: "Ionisation energy of hydrogen",
    formula: "13.6 eV",
  },
  {
    name: "Distance of closest approach",
    formula: "K = (1/4πε₀) (2Ze²/r₀)",
  },
];

const numericals = [
  {
    question:
      "Find the energy of an electron in the second orbit of a hydrogen atom.",
    solution:
      "Eₙ = -13.6/n² eV\nFor n = 2:\nE₂ = -13.6/4\nE₂ = -3.4 eV",
  },
  {
    question:
      "Calculate the energy required to excite a hydrogen atom from n = 1 to n = 2.",
    solution:
      "E₁ = -13.6 eV\nE₂ = -3.4 eV\nEnergy required = E₂ - E₁\n= -3.4 - (-13.6)\n= 10.2 eV",
  },
  {
    question:
      "Calculate the ionisation energy of hydrogen from its second orbit.",
    solution:
      "Energy at n = 2 = -13.6/4\n= -3.4 eV\nEnergy at infinity = 0 eV\nIonisation energy = 0 - (-3.4)\n= 3.4 eV",
  },
  {
    question:
      "Find the energy of a photon emitted when an electron moves from n = 3 to n = 2 in hydrogen.",
    solution:
      "E₃ = -13.6/9 = -1.51 eV\nE₂ = -13.6/4 = -3.4 eV\nPhoton energy = E₃ - E₂\n= -1.51 - (-3.4)\n= 1.89 eV approximately",
  },
];

const boardQuestions = [
  "Explain Rutherford's alpha particle scattering experiment and write its conclusions.",
  "State the limitations of Rutherford's atomic model.",
  "Write any three postulates of Bohr's atomic model.",
  "Derive or write the expression for the radius of the nth Bohr orbit.",
  "Calculate the energy of an electron in the ground state of hydrogen.",
  "What is the difference between excitation energy and ionisation energy?",
  "Explain how the line spectrum of hydrogen is produced.",
  "Why does an electron not radiate energy in a permitted Bohr orbit?",
];

const mcqs = [
  {
    question: "Who performed the alpha particle scattering experiment?",
    options: ["Niels Bohr", "Ernest Rutherford", "J.J. Thomson", "James Chadwick"],
    answer: 1,
    explanation: "Ernest Rutherford performed the alpha particle scattering experiment.",
  },
  {
    question: "Most of the space inside an atom is:",
    options: ["Filled with protons", "Filled with neutrons", "Empty", "Filled with electrons"],
    answer: 2,
    explanation: "Most alpha particles passed straight through the gold foil, showing that atoms are mostly empty space.",
  },
  {
    question: "The nucleus of an atom is:",
    options: ["Negatively charged", "Positively charged", "Neutral", "Always negative"],
    answer: 1,
    explanation: "The nucleus contains positively charged protons.",
  },
  {
    question: "According to Bohr, angular momentum is:",
    options: ["Continuous", "Zero", "Quantised", "Infinite"],
    answer: 2,
    explanation: "Bohr stated that mvr = nh/2π.",
  },
  {
    question: "The ground state energy of hydrogen is:",
    options: ["-13.6 eV", "-3.4 eV", "0 eV", "13.6 eV"],
    answer: 0,
    explanation: "The ground state corresponds to n = 1, so E₁ = -13.6 eV.",
  },
  {
    question: "The energy of an electron at infinity is taken as:",
    options: ["-13.6 eV", "-3.4 eV", "Zero", "13.6 eV"],
    answer: 2,
    explanation: "At infinity, the electron is free and its energy is taken as zero.",
  },
  {
    question: "The ionisation energy of hydrogen in its ground state is:",
    options: ["3.4 eV", "10.2 eV", "13.6 eV", "1.51 eV"],
    answer: 2,
    explanation: "13.6 eV is required to remove the electron from the ground state.",
  },
  {
    question: "When an electron jumps from a higher to a lower energy level:",
    options: [
      "Energy is absorbed",
      "Energy is emitted",
      "No energy changes",
      "The nucleus disappears",
    ],
    answer: 1,
    explanation: "The electron emits a photon whose energy equals the difference between the energy levels.",
  },
  {
    question: "The radius of the first Bohr orbit of hydrogen is approximately:",
    options: ["0.529 Å", "5.29 Å", "13.6 Å", "1.097 Å"],
    answer: 0,
    explanation: "The Bohr radius a₀ is approximately 0.529 Å.",
  },
  {
    question: "Which model explains the hydrogen line spectrum?",
    options: [
      "Rutherford's model",
      "Thomson's model",
      "Bohr's model",
      "Dalton's model",
    ],
    answer: 2,
    explanation: "Bohr's model explains the hydrogen line spectrum using transitions between quantised energy levels.",
  },
];

export default function AtomsPage() {
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
            Class 12 Physics · Chapter 12
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-5xl">
            Atoms
          </h1>
          <p className="mt-4 max-w-2xl text-gray-300">
            Learn about Rutherford's atomic model, Bohr's theory, hydrogen
            energy levels and atomic spectra with notes, formulas, numericals
            and MCQ practice.
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
            Note: Z is atomic number, n is the orbit number, and a₀ is the
            Bohr radius. In the Rydberg formula, n₂ is greater than n₁ for
            emission.
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
              Chapter 12 MCQ Quiz
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
              disabled={selectedAnswers.filter((a) => a !== undefined).length !== mcqs.length}
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
            href="/subjects/physics/dual-nature-of-radiation-and-matter"
            className="rounded-xl border border-white/10 px-5 py-3 text-center text-sm text-gray-300 hover:border-cyan-400 hover:text-cyan-300"
          >
            ← Previous: Dual Nature
          </Link>
          <Link
            href="/subjects/physics/nuclei"
            className="rounded-xl bg-cyan-500 px-5 py-3 text-center text-sm font-bold text-[#07111f] hover:bg-cyan-400"
          >
            Next: Nuclei →
          </Link>
        </div>
      </div>
    </main>
  );
}
