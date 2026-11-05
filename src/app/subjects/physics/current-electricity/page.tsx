
"use client";

import { useState } from "react";

const topics = [
  {
    title: "Electric Current",
    explanation:
      "Electric current is the rate of flow of electric charge through a cross-section of a conductor.",
    points: [
      "I = Q / t",
      "SI unit: Ampere (A).",
      "1 ampere = 1 coulomb per second.",
      "Conventional current flows from higher potential to lower potential.",
      "Electron flow is opposite to conventional current.",
    ],
  },
  {
    title: "Electric Current in a Conductor",
    explanation:
      "In a metallic conductor, free electrons move randomly. When an electric field is applied, they acquire a small average drift velocity.",
    points: [
      "Drift velocity is the average velocity acquired by free electrons.",
      "I = neAvd.",
      "n = number density of free electrons.",
      "A = area of cross-section.",
      "vd = drift velocity.",
    ],
  },
  {
    title: "Ohm's Law",
    explanation:
      "At constant temperature and other physical conditions, current through a conductor is directly proportional to the potential difference across it.",
    points: [
      "V = IR.",
      "R = V / I.",
      "SI unit of resistance: Ohm (Ω).",
      "The V-I graph of an ohmic conductor is a straight line through the origin.",
    ],
  },
  {
    title: "Resistance and Resistivity",
    explanation:
      "Resistance opposes the flow of electric current. Resistivity is a property of the material of the conductor.",
    points: [
      "R = ρl / A.",
      "ρ = RA / l.",
      "SI unit of resistivity: Ω m.",
      "Resistance increases with length.",
      "Resistance decreases with cross-sectional area.",
      "Resistivity depends on the material and temperature.",
    ],
  },
  {
    title: "Temperature Dependence of Resistance",
    explanation:
      "The resistance of most metallic conductors increases with an increase in temperature.",
    points: [
      "R = R₀[1 + α(T - T₀)].",
      "α is the temperature coefficient of resistance.",
      "For metals, α is generally positive.",
      "Semiconductors generally show decreasing resistance with increasing temperature.",
    ],
  },
  {
    title: "Electrical Energy and Power",
    explanation:
      "Electrical energy is the work done by an electric current. Electrical power is the rate at which electrical energy is consumed.",
    points: [
      "W = VIt.",
      "P = VI.",
      "P = I²R.",
      "P = V²/R.",
      "SI unit of power: Watt (W).",
      "Commercial unit of electrical energy: kilowatt-hour (kWh).",
    ],
  },
  {
    title: "Cells, EMF and Internal Resistance",
    explanation:
      "A cell converts chemical energy into electrical energy. Its EMF is the energy supplied per unit charge.",
    points: [
      "EMF: ε = W / q.",
      "Terminal voltage during discharge: V = ε - Ir.",
      "Current in a simple circuit: I = ε / (R + r).",
      "r is the internal resistance of the cell.",
      "SI unit of EMF: Volt (V).",
    ],
  },
  {
    title: "Cells in Series and Parallel",
    explanation:
      "Cells can be connected in series or parallel to obtain different combinations of EMF and internal resistance.",
    points: [
      "For n identical cells in series: equivalent EMF = nε.",
      "Internal resistance in series = nr.",
      "For n identical cells in parallel: equivalent EMF = ε.",
      "Internal resistance in parallel = r/n.",
    ],
  },
  {
    title: "Kirchhoff's Rules",
    explanation:
      "Kirchhoff's rules are used to analyse complex electrical circuits.",
    points: [
      "Junction rule: Sum of currents entering a junction equals sum leaving it.",
      "Loop rule: Algebraic sum of potential differences around a closed loop is zero.",
      "Junction rule is based on conservation of charge.",
      "Loop rule is based on conservation of energy.",
    ],
  },
  {
    title: "Wheatstone Bridge",
    explanation:
      "A Wheatstone bridge is used to determine an unknown resistance by balancing two arms of an electrical circuit.",
    points: [
      "At balance: P/Q = R/S.",
      "No current flows through the galvanometer at balance.",
      "It is useful for accurate measurement of resistance.",
    ],
  },
];

const formulas = [
  ["Electric current", "I = Q / t"],
  ["Current and drift velocity", "I = neAvd"],
  ["Ohm's law", "V = IR"],
  ["Resistance", "R = ρl / A"],
  ["Temperature dependence", "R = R₀[1 + α(T - T₀)]"],
  ["Electrical energy", "W = VIt"],
  ["Electrical power", "P = VI = I²R = V²/R"],
  ["EMF", "ε = W / q"],
  ["Cell current", "I = ε / (R + r)"],
  ["Terminal voltage", "V = ε - Ir"],
  ["Wheatstone bridge balance", "P/Q = R/S"],
];

const questions = [
  {
    question: "What is the SI unit of electric current?",
    options: ["Coulomb", "Volt", "Ampere", "Ohm"],
    answer: 2,
    explanation: "The SI unit of electric current is ampere (A).",
  },
  {
    question: "Which formula represents Ohm's law?",
    options: ["V = IR", "V = I/R", "R = VI", "I = VR"],
    answer: 0,
    explanation: "Ohm's law states that V = IR under constant physical conditions.",
  },
  {
    question: "The SI unit of resistivity is:",
    options: ["Ohm", "Ohm metre", "Ampere", "Volt metre"],
    answer: 1,
    explanation: "Resistivity is measured in ohm metre (Ω m).",
  },
  {
    question: "If the length of a wire is doubled while its area stays constant, its resistance becomes:",
    options: ["Half", "Double", "Four times", "Unchanged"],
    answer: 1,
    explanation: "R = ρl/A. Resistance is directly proportional to length.",
  },
  {
    question: "The conventional direction of electric current is:",
    options: [
      "Negative to positive potential",
      "Positive to negative potential",
      "Always upward",
      "Random direction",
    ],
    answer: 1,
    explanation: "Conventional current flows from higher potential to lower potential in the external circuit.",
  },
  {
    question: "The electrical power consumed by a resistor can be written as:",
    options: ["I/R", "IR", "I²R", "R/I"],
    answer: 2,
    explanation: "Using V = IR in P = VI gives P = I²R.",
  },
  {
    question: "Kirchhoff's junction rule is based on conservation of:",
    options: ["Energy", "Momentum", "Charge", "Mass"],
    answer: 2,
    explanation: "The junction rule follows from conservation of electric charge.",
  },
  {
    question: "At the balanced condition of a Wheatstone bridge, the galvanometer current is:",
    options: ["Maximum", "Zero", "Infinite", "Equal to battery current"],
    answer: 1,
    explanation: "At balance, the two galvanometer terminals have equal potential, so no current flows through it.",
  },
];

export default function CurrentElectricityPage() {
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

        <a
          href="/subjects/physics/electrostatic-potential-and-capacitance"
          className="ml-5 text-sm text-slate-400 hover:text-white"
        >
          ← Previous Chapter
        </a>

        <section className="mt-8 rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-blue-950 via-slate-900 to-[#080d19] p-8 md:p-12">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            CLASS 12 · PHYSICS · CHAPTER 03
          </p>
          <h1 className="mt-5 text-4xl font-black md:text-5xl">
            Current Electricity
          </h1>
          <p className="mt-5 max-w-2xl leading-7 text-slate-300">
            Learn about electric current, Ohm's law, resistance, resistivity,
            electrical power, cells, Kirchhoff's rules and Wheatstone bridge.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-cyan-300">10 Topics</span>
            <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-cyan-300">Formula Sheet</span>
            <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-cyan-300">8 MCQs</span>
          </div>
        </section>

        <section className="mt-12">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">SECTION 01</p>
          <h2 className="mt-2 text-3xl font-bold">Chapter Notes</h2>
          <p className="mt-2 text-slate-400">Understand each topic and remember the important points.</p>

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
              A wire has a resistance of 10 Ω. If a potential difference of
              20 V is applied across it, calculate the current flowing through
              the wire.
            </p>

            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              <div>
                <p className="font-bold text-cyan-300">Step 1: Given values</p>
                <p>R = 10 Ω</p>
                <p>V = 20 V</p>
              </div>
              <div>
                <p className="font-bold text-cyan-300">Step 2: Apply Ohm's law</p>
                <p>V = IR</p>
                <p>I = V/R</p>
                <p>I = 20/10</p>
              </div>
              <div className="rounded-xl bg-cyan-400/10 p-4">
                <p className="font-bold text-cyan-300">Final Answer</p>
                <p className="mt-1 text-xl font-black text-white">I = 2 A</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">SECTION 04</p>
          <h2 className="mt-2 text-3xl font-bold">Important Board Questions</h2>
          <div className="mt-6 space-y-4">
            {[
              "State and explain Ohm's law. Draw its V-I graph.",
              "Define drift velocity and derive the relation I = neAvd.",
              "Define resistivity. Explain the factors affecting resistance.",
              "Explain the temperature dependence of resistance.",
              "Derive expressions for electrical power and electrical energy.",
              "Explain EMF and internal resistance of a cell.",
              "State Kirchhoff's junction rule and loop rule.",
              "Explain the principle and balance condition of a Wheatstone bridge.",
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
          <p className="mt-2 text-slate-400">Select one answer for every question and submit your quiz.</p>

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
