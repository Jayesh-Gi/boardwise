
"use client";

import { useState } from "react";

const topics = [
  {
    title: "Electric Charge",
    explanation:
      "Electric charge is a basic property of matter because of which objects experience electric forces. There are two types of charge: positive and negative.",
    points: [
      "Like charges repel each other.",
      "Unlike charges attract each other.",
      "The SI unit of charge is coulomb (C).",
      "Charge on an electron is -1.6 × 10⁻¹⁹ C.",
      "Charge on a proton is +1.6 × 10⁻¹⁹ C.",
    ],
  },
  {
    title: "Properties of Electric Charge",
    explanation:
      "Electric charge has three important properties that help us understand how charge behaves.",
    points: [
      "Additivity: Total charge is the algebraic sum of individual charges.",
      "Conservation: Charge can neither be created nor destroyed; it can only be transferred.",
      "Quantisation: Charge exists in integral multiples of the elementary charge.",
      "Formula: q = ne, where n is an integer.",
    ],
  },
  {
    title: "Coulomb's Law",
    explanation:
      "Coulomb's law describes the electrostatic force between two stationary point charges. The force increases with the product of the charges and decreases with the square of the distance.",
    points: [
      "F = k |q₁q₂| / r²",
      "k = 1 / (4πε₀) ≈ 9 × 10⁹ N m²/C² in vacuum.",
      "The force acts along the line joining the two charges.",
      "Like charges repel and unlike charges attract.",
    ],
  },
  {
    title: "Principle of Superposition",
    explanation:
      "When several charges act on one charge, the net electrostatic force is the vector sum of the forces due to each charge separately.",
    points: [
      "Calculate the force due to each charge separately.",
      "Remember that force has both magnitude and direction.",
      "Add the forces using vector addition.",
    ],
  },
  {
    title: "Electric Field",
    explanation:
      "An electric field is the region around a charge in which another charge experiences an electric force.",
    points: [
      "Electric field: E = F / q₀.",
      "SI unit: N/C or V/m.",
      "Field due to a point charge: E = k|Q| / r².",
      "The direction of the field is the direction of force on a positive test charge.",
    ],
  },
  {
    title: "Electric Field Lines",
    explanation:
      "Electric field lines are imaginary lines used to represent the direction and strength of an electric field.",
    points: [
      "They start from positive charges and end on negative charges.",
      "The tangent at any point gives the field direction.",
      "Closer lines represent a stronger electric field.",
      "Two electric field lines never intersect.",
      "They do not form closed loops in electrostatics.",
    ],
  },
  {
    title: "Electric Dipole",
    explanation:
      "An electric dipole consists of two equal and opposite charges separated by a small distance.",
    points: [
      "Dipole moment: p = q × 2a.",
      "SI unit: coulomb metre (C m).",
      "Its direction is from negative charge to positive charge.",
      "Torque on a dipole: τ = pE sin θ.",
      "Potential energy: U = -pE cos θ.",
    ],
  },
  {
    title: "Electric Flux",
    explanation:
      "Electric flux measures how much electric field passes through a given surface.",
    points: [
      "For a uniform field: Φ = EA cos θ.",
      "θ is the angle between the electric field and the area vector.",
      "SI unit: N m²/C.",
      "Flux is maximum when the field is perpendicular to the surface.",
      "Flux is zero when the field is parallel to the surface.",
    ],
  },
  {
    title: "Gauss's Law",
    explanation:
      "Gauss's law relates the total electric flux through a closed surface to the net charge enclosed by that surface.",
    points: [
      "Φ = q enclosed / ε₀.",
      "It applies to any closed surface.",
      "Only the net charge enclosed determines the total flux.",
      "It is especially useful for highly symmetric charge distributions.",
    ],
  },
];

const formulas = [
  ["Quantisation of charge", "q = ne"],
  ["Coulomb's law", "F = (1 / 4πε₀) × |q₁q₂| / r²"],
  ["Electric field", "E = F / q₀"],
  ["Field due to a point charge", "E = (1 / 4πε₀) × |Q| / r²"],
  ["Electric dipole moment", "p = q × 2a"],
  ["Torque on a dipole", "τ = pE sin θ"],
  ["Electric flux", "Φ = EA cos θ"],
  ["Gauss's law", "Φ = q enclosed / ε₀"],
];

const questions = [
  {
    question: "What is the SI unit of electric charge?",
    options: ["Newton", "Coulomb", "Volt", "Ampere"],
    answer: 1,
    explanation: "The SI unit of electric charge is coulomb (C).",
  },
  {
    question: "What is the charge on an electron?",
    options: [
      "+1.6 × 10⁻¹⁹ C",
      "0 C",
      "-1.6 × 10⁻¹⁹ C",
      "-9.1 × 10⁻³¹ C",
    ],
    answer: 2,
    explanation:
      "An electron carries a negative charge of approximately -1.6 × 10⁻¹⁹ C.",
  },
  {
    question: "According to Coulomb's law, force is inversely proportional to:",
    options: ["Distance", "Square of distance", "Charge", "Mass"],
    answer: 1,
    explanation: "Coulomb's force varies as 1/r².",
  },
  {
    question: "Which statement about electric field lines is correct?",
    options: [
      "They can intersect.",
      "They always form circles.",
      "They never intersect.",
      "They start from negative charges.",
    ],
    answer: 2,
    explanation:
      "Electric field lines never intersect because the field has only one direction at a point.",
  },
  {
    question: "What is the SI unit of electric field?",
    options: ["N/C", "C/N", "J/C", "C m"],
    answer: 0,
    explanation: "Electric field is force per unit charge, so its unit is N/C.",
  },
  {
    question: "The direction of electric dipole moment is:",
    options: [
      "Positive to negative",
      "Negative to positive",
      "Perpendicular to the dipole axis",
      "Always downward",
    ],
    answer: 1,
    explanation:
      "The dipole moment vector points from the negative charge towards the positive charge.",
  },
  {
    question: "Electric flux through a surface is maximum when the angle between E and area vector is:",
    options: ["0°", "45°", "90°", "180°"],
    answer: 0,
    explanation: "Φ = EA cos θ. It is maximum when θ = 0°.",
  },
  {
    question: "Gauss's law relates electric flux to:",
    options: [
      "Mass enclosed",
      "Net charge enclosed",
      "Distance from the surface",
      "Temperature",
    ],
    answer: 1,
    explanation:
      "The total electric flux through a closed surface equals the net enclosed charge divided by ε₀.",
  },
];

export default function ElectricChargesPage() {
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = questions.reduce(
    (total, question, index) =>
      total + (selected[index] === question.answer ? 1 : 0),
    0
  );

  function restartQuiz() {
    setSelected({});
    setSubmitted(false);
  }

  return (
    <main className="min-h-screen bg-[#080d19] px-5 py-8 text-white md:px-8">
      <div className="mx-auto max-w-5xl">
        <a
          href="/subjects/physics"
          className="text-sm font-semibold text-cyan-300 hover:text-white"
        >
          ← Back to Physics
        </a>

        <section className="mt-8 rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-blue-950 via-slate-900 to-[#080d19] p-8 md:p-12">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            CLASS 12 · PHYSICS · CHAPTER 01
          </p>
          <h1 className="mt-5 text-4xl font-black md:text-5xl">
            Electric Charges and Fields
          </h1>
          <p className="mt-5 max-w-2xl leading-7 text-slate-300">
            Understand electric charge, Coulomb's law, electric fields,
            dipoles, electric flux and Gauss's law with simple notes and
            practice questions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-cyan-300">
              9 Topics
            </span>
            <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-cyan-300">
              Formula Sheet
            </span>
            <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-cyan-300">
              8 MCQs
            </span>
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
              SECTION 01
            </p>
            <h2 className="mt-2 text-3xl font-bold">Chapter Notes</h2>
            <p className="mt-2 text-slate-400">
              Read each topic and understand the key points.
            </p>
          </div>

          <div className="space-y-5">
            {topics.map((topic, index) => (
              <article
                key={topic.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
              >
                <p className="text-xs font-bold tracking-widest text-cyan-400">
                  TOPIC {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-xl font-bold">{topic.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {topic.explanation}
                </p>
                <ul className="mt-4 space-y-2">
                  {topic.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-6 text-slate-400">
                      <span className="text-cyan-400">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            SECTION 02
          </p>
          <h2 className="mt-2 text-3xl font-bold">Important Formula Sheet</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800">
            {formulas.map(([name, formula], index) => (
              <div
                key={name}
                className="grid gap-2 border-b border-slate-800 bg-slate-900/60 p-5 last:border-0 sm:grid-cols-2"
              >
                <p className="font-semibold text-slate-300">
                  {index + 1}. {name}
                </p>
                <p className="font-mono text-cyan-300">{formula}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-slate-500">
            ε₀ is the permittivity of free space. Always use SI units in
            numerical problems.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            SECTION 03
          </p>
          <h2 className="mt-2 text-3xl font-bold">Solved Numerical</h2>
          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
            <h3 className="text-lg font-bold">Question</h3>
            <p className="mt-3 leading-7 text-slate-300">
              Two point charges of 2 μC and 3 μC are separated by a distance
              of 0.3 m in vacuum. Calculate the magnitude of the electrostatic
              force between them.
            </p>

            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              <div>
                <p className="font-bold text-cyan-300">Step 1: Given values</p>
                <p>q₁ = 2 × 10⁻⁶ C</p>
                <p>q₂ = 3 × 10⁻⁶ C</p>
                <p>r = 0.3 m</p>
                <p>k = 9 × 10⁹ N m²/C²</p>
              </div>
              <div>
                <p className="font-bold text-cyan-300">Step 2: Apply Coulomb's law</p>
                <p>F = k |q₁q₂| / r²</p>
                <p>F = (9 × 10⁹ × 2 × 10⁻⁶ × 3 × 10⁻⁶) / (0.3)²</p>
              </div>
              <div>
                <p className="font-bold text-cyan-300">Step 3: Calculate</p>
                <p>F = 0.054 / 0.09</p>
              </div>
              <div className="rounded-xl bg-cyan-400/10 p-4">
                <p className="font-bold text-cyan-300">Final Answer</p>
                <p className="mt-1 text-xl font-black text-white">F = 0.6 N</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            SECTION 04
          </p>
          <h2 className="mt-2 text-3xl font-bold">Important Board Questions</h2>
          <div className="mt-6 space-y-4">
            {[
              "State and explain Coulomb's law. Write its mathematical expression.",
              "Explain the principle of conservation of electric charge.",
              "What are electric field lines? Write any four properties.",
              "Define electric dipole moment and write its SI unit.",
              "State Gauss's law in electrostatics and write its mathematical form.",
              "Define electric flux. On which factors does it depend?",
            ].map((question, index) => (
              <div key={question} className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <span className="text-sm font-bold text-cyan-400">
                  QUESTION {index + 1}
                </span>
                <p className="mt-2 leading-7 text-slate-200">{question}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 pb-10">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            SECTION 05
          </p>
          <h2 className="mt-2 text-3xl font-bold">MCQ Practice Quiz</h2>
          <p className="mt-2 text-slate-400">
            Choose one answer for each question, then submit your quiz.
          </p>

          <div className="mt-6 space-y-6">
            {questions.map((question, index) => (
              <div
                key={question.question}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
              >
                <p className="text-sm font-bold text-cyan-400">
                  QUESTION {index + 1} OF {questions.length}
                </p>
                <h3 className="mt-3 text-lg font-semibold">
                  {question.question}
                </h3>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {question.options.map((option, optionIndex) => {
                    const isSelected = selected[index] === optionIndex;
                    const isCorrect = question.answer === optionIndex;

                    let style =
                      "border-slate-700 bg-slate-950 hover:border-cyan-400";

                    if (isSelected) {
                      style = "border-cyan-400 bg-cyan-400/10 text-cyan-200";
                    }

                    if (submitted && isCorrect) {
                      style = "border-emerald-400 bg-emerald-400/10 text-emerald-300";
                    } else if (submitted && isSelected && !isCorrect) {
                      style = "border-red-400 bg-red-400/10 text-red-300";
                    }

                    return (
                      <button
                        key={option}
                        type="button"
                        disabled={submitted}
                        onClick={() =>
                          setSelected((previous) => ({
                            ...previous,
                            [index]: optionIndex,
                          }))
                        }
                        className={`rounded-xl border p-4 text-left text-sm transition ${style} disabled:cursor-default`}
                      >
                        <span className="mr-2 font-bold">
                          {String.fromCharCode(65 + optionIndex)}.
                        </span>
                        {option}
                      </button>
                    );
                  })}
                </div>

                {submitted && (
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    <span className="font-bold text-cyan-300">Explanation: </span>
                    {question.explanation}
                  </p>
                )}
              </div>
            ))}
          </div>

          {!submitted ? (
            <button
              type="button"
              onClick={() => setSubmitted(true)}
              disabled={Object.keys(selected).length !== questions.length}
              className="mt-7 rounded-xl bg-cyan-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Submit Quiz
            </button>
          ) : (
            <div className="mt-7 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">
                Your Result
              </p>
              <p className="mt-2 text-3xl font-black">
                {score} / {questions.length}
              </p>
              <p className="mt-2 text-slate-300">
                {score === questions.length
                  ? "Excellent! All answers are correct."
                  : "Review the explanations and try again."}
              </p>
              <button
                type="button"
                onClick={restartQuiz}
                className="mt-5 rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-300"
              >
                Try Again
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
