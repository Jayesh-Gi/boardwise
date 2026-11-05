
"use client";

import { useState } from "react";

const topics = [
  {
    title: "Electric Potential",
    explanation:
      "Electric potential at a point is the work done per unit positive test charge in bringing it from infinity to that point, without acceleration.",
    points: [
      "V = W / q₀",
      "SI unit: volt (V).",
      "Electric potential is a scalar quantity.",
      "1 volt = 1 joule per coulomb.",
    ],
  },
  {
    title: "Potential Due to a Point Charge",
    explanation:
      "The electric potential due to a point charge depends on the magnitude of the charge and its distance from the point.",
    points: [
      "V = (1 / 4πε₀) × Q / r",
      "Potential is positive for a positive source charge.",
      "Potential is negative for a negative source charge.",
      "The reference potential at infinity is taken as zero.",
    ],
  },
  {
    title: "Potential Due to Multiple Charges",
    explanation:
      "Electric potential obeys the principle of superposition. The total potential is the algebraic sum of the potentials due to individual charges.",
    points: [
      "V = V₁ + V₂ + V₃ + ...",
      "Potential is a scalar, so add the values algebraically.",
      "Consider the sign of every charge.",
    ],
  },
  {
    title: "Equipotential Surfaces",
    explanation:
      "An equipotential surface is a surface on which the electric potential is the same at every point.",
    points: [
      "No work is done in moving a charge along an equipotential surface.",
      "Electric field is perpendicular to an equipotential surface.",
      "Two equipotential surfaces never intersect.",
      "For a point charge, equipotential surfaces are concentric spheres.",
    ],
  },
  {
    title: "Relation Between Electric Field and Potential",
    explanation:
      "Electric field points in the direction in which electric potential decreases most rapidly.",
    points: [
      "For a uniform field: E = -ΔV / Δr along the field direction.",
      "In one dimension: Eₓ = -dV/dx.",
      "The negative sign shows that potential decreases in the direction of the electric field.",
    ],
  },
  {
    title: "Potential Energy of a System of Charges",
    explanation:
      "Electric potential energy is the energy associated with the configuration of charges.",
    points: [
      "For two point charges: U = (1 / 4πε₀) × q₁q₂ / r.",
      "Like charges have positive potential energy when the reference is infinity.",
      "Unlike charges have negative potential energy.",
      "For several charges, add the pairwise interaction energies.",
    ],
  },
  {
    title: "Electric Dipole in an Electric Field",
    explanation:
      "An electric dipole placed in a uniform electric field experiences torque if its dipole moment is not aligned with the field.",
    points: [
      "Torque: τ = pE sin θ.",
      "Potential energy: U = -pE cos θ.",
      "Stable equilibrium occurs when θ = 0°.",
      "Unstable equilibrium occurs when θ = 180°.",
    ],
  },
  {
    title: "Capacitance",
    explanation:
      "Capacitance is the ability of a conductor or capacitor to store electric charge per unit potential difference.",
    points: [
      "C = Q / V.",
      "SI unit: farad (F).",
      "Capacitance depends on the geometry and medium, not on the charge stored for a linear capacitor.",
      "1 F = 1 C/V.",
    ],
  },
  {
    title: "Parallel Plate Capacitor",
    explanation:
      "A parallel plate capacitor consists of two large conducting plates separated by a small distance.",
    points: [
      "Without a dielectric: C = ε₀A/d.",
      "With a dielectric completely filling the gap: C = Kε₀A/d.",
      "A is the plate area and d is the separation.",
      "Increasing plate area increases capacitance.",
      "Increasing separation decreases capacitance.",
    ],
  },
  {
    title: "Combination of Capacitors",
    explanation:
      "Capacitors can be connected in series or parallel to obtain an equivalent capacitance.",
    points: [
      "Parallel: Cₑq = C₁ + C₂ + C₃ + ...",
      "Series: 1/Cₑq = 1/C₁ + 1/C₂ + 1/C₃ + ...",
      "In parallel, potential difference is the same across each capacitor.",
      "In series, charge magnitude is the same on each capacitor.",
    ],
  },
  {
    title: "Energy Stored in a Capacitor",
    explanation:
      "Energy is stored in the electric field of a charged capacitor.",
    points: [
      "U = ½CV².",
      "U = ½QV.",
      "U = Q²/(2C).",
      "Energy density in vacuum: u = ½ε₀E².",
    ],
  },
];

const formulas = [
  ["Electric potential", "V = W / q₀"],
  ["Potential due to a point charge", "V = kQ / r"],
  ["Potential energy of two charges", "U = kq₁q₂ / r"],
  ["Electric field and potential", "Eₓ = -dV/dx"],
  ["Capacitance", "C = Q / V"],
  ["Parallel plate capacitor", "C = ε₀A / d"],
  ["With dielectric", "C = Kε₀A / d"],
  ["Capacitors in parallel", "Cₑq = C₁ + C₂ + ..."],
  ["Capacitors in series", "1/Cₑq = 1/C₁ + 1/C₂ + ..."],
  ["Energy stored", "U = ½CV² = Q²/(2C)"],
];

const questions = [
  {
    question: "What is the SI unit of electric potential?",
    options: ["Coulomb", "Volt", "Newton", "Farad"],
    answer: 1,
    explanation: "Electric potential is measured in volt (V), equal to joule per coulomb.",
  },
  {
    question: "Electric potential is a:",
    options: ["Vector quantity", "Scalar quantity", "Tensor quantity", "Dimensionless quantity"],
    answer: 1,
    explanation: "Electric potential has magnitude but no direction, so it is a scalar.",
  },
  {
    question: "The electric potential due to a point charge Q at distance r is:",
    options: ["kQ/r", "kQ/r²", "kr/Q", "Q/kr²"],
    answer: 0,
    explanation: "The expression is V = kQ/r, taking zero potential at infinity.",
  },
  {
    question: "Work done in moving a charge along an equipotential surface is:",
    options: ["Maximum", "Minimum but non-zero", "Zero", "Infinite"],
    answer: 2,
    explanation: "Potential difference along an equipotential surface is zero, so work done is zero.",
  },
  {
    question: "The SI unit of capacitance is:",
    options: ["Volt", "Farad", "Coulomb", "Joule"],
    answer: 1,
    explanation: "Capacitance is measured in farad (F).",
  },
  {
    question: "The capacitance of a parallel plate capacitor in vacuum is:",
    options: ["ε₀d/A", "ε₀A/d", "A/(ε₀d)", "ε₀Ad"],
    answer: 1,
    explanation: "For parallel plates, C = ε₀A/d.",
  },
  {
    question: "For capacitors connected in parallel, which quantity is the same?",
    options: ["Charge", "Potential difference", "Capacitance", "Energy"],
    answer: 1,
    explanation: "Every capacitor in a parallel combination has the same potential difference.",
  },
  {
    question: "The energy stored in a capacitor is:",
    options: ["CV²", "2CV²", "½CV²", "QV²"],
    answer: 2,
    explanation: "The stored energy is U = ½CV².",
  },
];

export default function ElectrostaticPotentialPage() {
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
        <a href="/subjects/physics" className="text-sm font-semibold text-cyan-300 hover:text-white">
          ← Back to Physics
        </a>

        <a href="/subjects/physics/electric-charges-and-fields" className="ml-5 text-sm text-slate-400 hover:text-white">
          Previous Chapter →
        </a>

        <section className="mt-8 rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-blue-950 via-slate-900 to-[#080d19] p-8 md:p-12">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            CLASS 12 · PHYSICS · CHAPTER 02
          </p>
          <h1 className="mt-5 text-4xl font-black md:text-5xl">
            Electrostatic Potential and Capacitance
          </h1>
          <p className="mt-5 max-w-2xl leading-7 text-slate-300">
            Understand electric potential, potential energy, equipotential
            surfaces, capacitors and energy stored in a capacitor.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-cyan-300">11 Topics</span>
            <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-cyan-300">Formula Sheet</span>
            <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-cyan-300">8 MCQs</span>
          </div>
        </section>

        <section className="mt-12">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">SECTION 01</p>
          <h2 className="mt-2 text-3xl font-bold">Chapter Notes</h2>
          <p className="mt-2 text-slate-400">Read each topic and understand the key points.</p>

          <div className="mt-6 space-y-5">
            {topics.map((topic, index) => (
              <article key={topic.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <p className="text-xs font-bold tracking-widest text-cyan-400">
                  TOPIC {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-xl font-bold">{topic.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{topic.explanation}</p>
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
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">SECTION 02</p>
          <h2 className="mt-2 text-3xl font-bold">Important Formula Sheet</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800">
            {formulas.map(([name, formula], index) => (
              <div key={name} className="grid gap-2 border-b border-slate-800 bg-slate-900/60 p-5 last:border-0 sm:grid-cols-2">
                <p className="font-semibold text-slate-300">{index + 1}. {name}</p>
                <p className="font-mono text-cyan-300">{formula}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">SECTION 03</p>
          <h2 className="mt-2 text-3xl font-bold">Solved Numerical</h2>
          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
            <h3 className="text-lg font-bold">Question</h3>
            <p className="mt-3 leading-7 text-slate-300">
              A capacitor of capacitance 5 μF is connected to a 10 V battery.
              Calculate the charge stored on the capacitor.
            </p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              <div>
                <p className="font-bold text-cyan-300">Step 1: Given values</p>
                <p>C = 5 μF = 5 × 10⁻⁶ F</p>
                <p>V = 10 V</p>
              </div>
              <div>
                <p className="font-bold text-cyan-300">Step 2: Apply formula</p>
                <p>Q = CV</p>
                <p>Q = 5 × 10⁻⁶ × 10</p>
              </div>
              <div className="rounded-xl bg-cyan-400/10 p-4">
                <p className="font-bold text-cyan-300">Final Answer</p>
                <p className="mt-1 text-xl font-black text-white">Q = 50 μC</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">SECTION 04</p>
          <h2 className="mt-2 text-3xl font-bold">Important Board Questions</h2>
          <div className="mt-6 space-y-4">
            {[
              "Define electric potential and write its SI unit.",
              "Derive the expression for electric potential due to a point charge.",
              "What is an equipotential surface? Write any three properties.",
              "Define capacitance and explain the principle of a capacitor.",
              "Derive the expression for capacitance of a parallel plate capacitor.",
              "Obtain the equivalent capacitance for capacitors connected in series and parallel.",
              "Derive the expression for energy stored in a charged capacitor.",
            ].map((question, index) => (
              <div key={question} className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <span className="text-sm font-bold text-cyan-400">QUESTION {index + 1}</span>
                <p className="mt-2 leading-7 text-slate-200">{question}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 pb-10">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">SECTION 05</p>
          <h2 className="mt-2 text-3xl font-bold">MCQ Practice Quiz</h2>
          <p className="mt-2 text-slate-400">Choose one answer for each question, then submit your quiz.</p>

          <div className="mt-6 space-y-6">
            {questions.map((question, index) => (
              <div key={question.question} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <p className="text-sm font-bold text-cyan-400">QUESTION {index + 1} OF {questions.length}</p>
                <h3 className="mt-3 text-lg font-semibold">{question.question}</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {question.options.map((option, optionIndex) => {
                    const isSelected = selected[index] === optionIndex;
                    const isCorrect = question.answer === optionIndex;
                    let style = "border-slate-700 bg-slate-950 hover:border-cyan-400";

                    if (isSelected) style = "border-cyan-400 bg-cyan-400/10 text-cyan-200";
                    if (submitted && isCorrect) style = "border-emerald-400 bg-emerald-400/10 text-emerald-300";
                    else if (submitted && isSelected && !isCorrect) style = "border-red-400 bg-red-400/10 text-red-300";

                    return (
                      <button
                        key={option}
                        type="button"
                        disabled={submitted}
                        onClick={() => setSelected((previous) => ({ ...previous, [index]: optionIndex }))}
                        className={`rounded-xl border p-4 text-left text-sm transition ${style} disabled:cursor-default`}
                      >
                        <span className="mr-2 font-bold">{String.fromCharCode(65 + optionIndex)}.</span>
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
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">Your Result</p>
              <p className="mt-2 text-3xl font-black">{score} / {questions.length}</p>
              <p className="mt-2 text-slate-300">
                {score === questions.length ? "Excellent! All answers are correct." : "Review the explanations and try again."}
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
