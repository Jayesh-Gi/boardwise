
"use client";

import { useState } from "react";

const topics = [
  {
    title: "1. Alternating Current (AC)",
    points: [
      "Alternating current changes its magnitude and direction periodically.",
      "AC voltage: V = V₀ sin(ωt)",
      "AC current: I = I₀ sin(ωt)",
      "V₀ and I₀ are peak values.",
      "ω = 2πf, where f is frequency."
    ]
  },
  {
    title: "2. Peak and RMS Values",
    points: [
      "Peak value is the maximum value of AC.",
      "RMS value is the effective value of AC.",
      "Vᵣₘₛ = V₀ / √2",
      "Iᵣₘₛ = I₀ / √2",
      "For a sinusoidal AC, RMS value is 0.707 times the peak value."
    ]
  },
  {
    title: "3. AC Through a Resistor",
    points: [
      "In a pure resistor, current and voltage are in the same phase.",
      "Resistance: R",
      "Impedance: Z = R",
      "Power: P = Vᵣₘₛ Iᵣₘₛ",
      "Power factor = 1."
    ]
  },
  {
    title: "4. AC Through an Inductor",
    points: [
      "In a pure inductor, current lags voltage by 90°.",
      "Inductive reactance: Xₗ = ωL = 2πfL",
      "Unit of reactance is ohm (Ω).",
      "As frequency increases, inductive reactance increases."
    ]
  },
  {
    title: "5. AC Through a Capacitor",
    points: [
      "In a pure capacitor, current leads voltage by 90°.",
      "Capacitive reactance: X꜀ = 1 / (ωC)",
      "As frequency increases, capacitive reactance decreases.",
      "Unit of reactance is ohm (Ω)."
    ]
  },
  {
    title: "6. Series LCR Circuit",
    points: [
      "A series LCR circuit contains an inductor, capacitor and resistor.",
      "Impedance: Z = √[R² + (Xₗ − X꜀)²]",
      "Current: Iᵣₘₛ = Vᵣₘₛ / Z",
      "Phase angle: tan φ = (Xₗ − X꜀) / R",
      "At resonance, Xₗ = X꜀."
    ]
  },
  {
    title: "7. Resonance",
    points: [
      "Resonance occurs when inductive reactance equals capacitive reactance.",
      "Resonant frequency: f₀ = 1 / (2π√LC)",
      "At resonance, impedance is minimum and equals R.",
      "Current is maximum in a series LCR circuit.",
      "Power factor becomes 1."
    ]
  },
  {
    title: "8. Power in AC Circuit",
    points: [
      "Average power: P = Vᵣₘₛ Iᵣₘₛ cos φ",
      "cos φ is called the power factor.",
      "For a pure resistor, power factor = 1.",
      "For a pure inductor or capacitor, average power = 0.",
      "A wattless current consumes zero average power."
    ]
  },
  {
    title: "9. Transformer",
    points: [
      "A transformer changes AC voltage using mutual induction.",
      "It works on the principle of mutual induction.",
      "Voltage ratio: Vₛ / Vₚ = Nₛ / Nₚ (ideal transformer).",
      "Step-up transformer increases voltage.",
      "Step-down transformer decreases voltage."
    ]
  }
];

const formulas = [
  ["Angular frequency", "ω = 2πf"],
  ["AC voltage", "V = V₀ sin(ωt)"],
  ["AC current", "I = I₀ sin(ωt)"],
  ["RMS voltage", "Vᵣₘₛ = V₀ / √2"],
  ["RMS current", "Iᵣₘₛ = I₀ / √2"],
  ["Inductive reactance", "Xₗ = ωL"],
  ["Capacitive reactance", "X꜀ = 1 / (ωC)"],
  ["LCR impedance", "Z = √[R² + (Xₗ − X꜀)²]"],
  ["Phase angle", "tan φ = (Xₗ − X꜀) / R"],
  ["Resonant frequency", "f₀ = 1 / (2π√LC)"],
  ["Average power", "P = Vᵣₘₛ Iᵣₘₛ cos φ"],
  ["Power factor", "cos φ = R / Z"],
  ["Transformer ratio", "Vₛ / Vₚ = Nₛ / Nₚ"]
];

const numericals = [
  {
    title: "Numerical 1: RMS Voltage",
    question: "The peak voltage of an AC source is 200 V. Find its RMS voltage.",
    steps: [
      "Given: V₀ = 200 V",
      "Formula: Vᵣₘₛ = V₀ / √2",
      "Vᵣₘₛ = 200 / 1.414",
      "Answer: 141.4 V (approximately)"
    ]
  },
  {
    title: "Numerical 2: Inductive Reactance",
    question: "An inductor of 0.5 H is connected to a 50 Hz AC source. Find Xₗ.",
    steps: [
      "Given: L = 0.5 H, f = 50 Hz",
      "Formula: Xₗ = 2πfL",
      "Xₗ = 2 × 3.14 × 50 × 0.5",
      "Answer: 157 Ω (approximately)"
    ]
  },
  {
    title: "Numerical 3: Capacitive Reactance",
    question: "A capacitor of 100 μF is connected to a 50 Hz AC source. Find X꜀.",
    steps: [
      "Given: C = 100 × 10⁻⁶ F, f = 50 Hz",
      "Formula: X꜀ = 1 / (2πfC)",
      "X꜀ = 1 / (2 × 3.14 × 50 × 100 × 10⁻⁶)",
      "Answer: 31.8 Ω (approximately)"
    ]
  },
  {
    title: "Numerical 4: Transformer",
    question: "A transformer has 100 primary turns and 500 secondary turns. If primary voltage is 20 V, find secondary voltage.",
    steps: [
      "Given: Nₚ = 100, Nₛ = 500, Vₚ = 20 V",
      "Formula: Vₛ / Vₚ = Nₛ / Nₚ",
      "Vₛ / 20 = 500 / 100",
      "Answer: Vₛ = 100 V"
    ]
  }
];

const boardQuestions = [
  {
    marks: "2 Marks",
    question: "Define RMS value of alternating current and write its relation with peak value."
  },
  {
    marks: "2 Marks",
    question: "Why does current lag behind voltage in a pure inductive circuit?"
  },
  {
    marks: "3 Marks",
    question: "Derive the expression for inductive reactance in an AC circuit."
  },
  {
    marks: "3 Marks",
    question: "Explain resonance in a series LCR circuit. Write its resonant frequency."
  },
  {
    marks: "3 Marks",
    question: "What is power factor? Explain wattless current."
  },
  {
    marks: "5 Marks",
    question: "Explain the working principle of a transformer. Derive its turns ratio and mention two sources of energy loss."
  }
];

const questions = [
  {
    q: "What is the RMS value of AC in terms of its peak value?",
    options: ["I₀", "I₀ / √2", "√2 I₀", "I₀ / 2"],
    answer: 1,
    explanation: "For sinusoidal AC, RMS current is I₀ / √2."
  },
  {
    q: "What is the phase difference between voltage and current in a pure resistor?",
    options: ["90°", "180°", "0°", "45°"],
    answer: 2,
    explanation: "In a pure resistor, voltage and current are in the same phase."
  },
  {
    q: "What is the SI unit of reactance?",
    options: ["Farad", "Henry", "Ohm", "Watt"],
    answer: 2,
    explanation: "Reactance is measured in ohms (Ω)."
  },
  {
    q: "In a pure inductor, current:",
    options: ["Leads voltage by 90°", "Lags voltage by 90°", "Is in phase", "Lags by 180°"],
    answer: 1,
    explanation: "Current lags voltage by 90° in a pure inductor."
  },
  {
    q: "The capacitive reactance is:",
    options: ["ωC", "ωL", "1 / ωC", "1 / ωL"],
    answer: 2,
    explanation: "Capacitive reactance X꜀ = 1 / (ωC)."
  },
  {
    q: "At resonance in a series LCR circuit:",
    options: ["Xₗ > X꜀", "Xₗ < X꜀", "Xₗ = X꜀", "Z = 0"],
    answer: 2,
    explanation: "At resonance, inductive and capacitive reactances are equal."
  },
  {
    q: "The power factor of a pure resistor is:",
    options: ["0", "0.5", "1", "Infinite"],
    answer: 2,
    explanation: "For a resistor, φ = 0°, so cos φ = 1."
  },
  {
    q: "Which principle is used in a transformer?",
    options: ["Self induction only", "Mutual induction", "Electrolysis", "Photoelectric effect"],
    answer: 1,
    explanation: "A transformer works on mutual induction."
  },
  {
    q: "A step-up transformer:",
    options: ["Increases current only", "Decreases voltage", "Increases voltage", "Changes AC into DC"],
    answer: 2,
    explanation: "A step-up transformer increases secondary voltage."
  },
  {
    q: "The average power consumed by a pure inductor is:",
    options: ["Maximum", "Zero", "V × I", "Infinite"],
    answer: 1,
    explanation: "In a pure inductor, power factor is zero, so average power is zero."
  }
];

export default function AlternatingCurrentPage() {
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [showSteps, setShowSteps] = useState<number[]>([]);

  const score = questions.reduce(
    (total, question, index) =>
      total + (answers[index] === question.answer ? 1 : 0),
    0
  );

  function toggleSteps(index: number) {
    setShowSteps((previous) =>
      previous.includes(index)
        ? previous.filter((item) => item !== index)
        : [...previous, index]
    );
  }

  function resetQuiz() {
    setAnswers([]);
    setSubmitted(false);
  }

  return (
    <main className="min-h-screen bg-[#070d1b] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">

        <a
          href="/subjects/physics"
          className="text-sm text-cyan-400 hover:text-cyan-300"
        >
          ← Back to Physics
        </a>

        <section className="mt-7 rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#102747] via-[#101b35] to-[#091426] p-7 sm:p-10">
          <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-300">
            CLASS 12 PHYSICS · CHAPTER 7
          </span>

          <h1 className="mt-6 text-3xl font-bold sm:text-5xl">
            Alternating Current
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Learn AC circuits, reactance, impedance, resonance, power and
            transformers with simple notes, formulas and practice questions.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 text-xs text-slate-300">
            <span className="rounded-xl bg-white/5 px-4 py-2">9 Topics</span>
            <span className="rounded-xl bg-white/5 px-4 py-2">13 Formulas</span>
            <span className="rounded-xl bg-white/5 px-4 py-2">4 Numericals</span>
            <span className="rounded-xl bg-white/5 px-4 py-2">10 MCQs</span>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">📘 Important Topics & Notes</h2>
          <p className="mt-2 text-sm text-slate-400">
            Understand the main concepts before solving questions.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {topics.map((topic) => (
              <article
                key={topic.title}
                className="rounded-2xl border border-white/10 bg-[#101a2d] p-5"
              >
                <h3 className="text-lg font-semibold text-cyan-300">
                  {topic.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {topic.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm leading-6 text-slate-300"
                    >
                      <span className="text-cyan-400">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">⚡ Formula Sheet</h2>
          <p className="mt-2 text-sm text-slate-400">
            Important formulas for quick revision.
          </p>

          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
            {formulas.map(([name, formula], index) => (
              <div
                key={name}
                className={`flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between ${
                  index % 2 === 0 ? "bg-[#101a2d]" : "bg-[#0c1628]"
                }`}
              >
                <span className="text-sm text-slate-300">{name}</span>
                <span className="font-mono text-sm font-semibold text-cyan-300">
                  {formula}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">🧮 Solved Numericals</h2>
          <p className="mt-2 text-sm text-slate-400">
            Try understanding the formula and calculation in each example.
          </p>

          <div className="mt-5 space-y-4">
            {numericals.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[#101a2d] p-5"
              >
                <h3 className="font-semibold text-cyan-300">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.question}
                </p>

                <button
                  onClick={() => toggleSteps(index)}
                  className="mt-4 rounded-xl border border-cyan-400/30 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400/10"
                >
                  {showSteps.includes(index) ? "Hide Solution" : "Show Solution"}
                </button>

                {showSteps.includes(index) && (
                  <div className="mt-4 rounded-xl bg-[#071426] p-4">
                    {item.steps.map((step) => (
                      <p
                        key={step}
                        className="mt-2 text-sm leading-6 text-slate-300"
                      >
                        {step}
                      </p>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">📝 Important CBSE Questions</h2>
          <p className="mt-2 text-sm text-slate-400">
            Practice these questions according to their marks.
          </p>

          <div className="mt-5 space-y-3">
            {boardQuestions.map((item, index) => (
              <article
                key={index}
                className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#101a2d] p-5 sm:flex-row sm:items-start"
              >
                <span className="w-fit shrink-0 rounded-lg bg-cyan-400/10 px-3 py-2 text-xs font-semibold text-cyan-300">
                  {item.marks}
                </span>
                <p className="text-sm leading-6 text-slate-300">
                  {index + 1}. {item.question}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-cyan-400/20 bg-[#101a2d] p-5 sm:p-8">
          <div>
            <span className="text-xs font-semibold tracking-widest text-cyan-400">
              TEST YOUR KNOWLEDGE
            </span>
            <h2 className="mt-2 text-2xl font-bold">
              🎯 Chapter 7 MCQ Quiz
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Answer all 10 questions and check your score.
            </p>
          </div>

          {questions.map((question, index) => (
            <div
              key={index}
              className="mt-7 border-b border-white/10 pb-6 last:border-0"
            >
              <p className="font-semibold leading-7">
                Q{index + 1}. {question.q}
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {question.options.map((option, optionIndex) => {
                  const selected = answers[index] === optionIndex;
                  const correct = question.answer === optionIndex;

                  let style =
                    "border-white/10 bg-[#0b1528] hover:border-cyan-400/50";

                  if (selected && !submitted) {
                    style = "border-cyan-400 bg-cyan-400/10 text-cyan-200";
                  }

                  if (submitted && correct) {
                    style = "border-green-500 bg-green-500/10 text-green-300";
                  } else if (submitted && selected) {
                    style = "border-red-500 bg-red-500/10 text-red-300";
                  }

                  return (
                    <button
                      key={option}
                      disabled={submitted}
                      onClick={() =>
                        setAnswers((previous) => {
                          const updated = [...previous];
                          updated[index] = optionIndex;
                          return updated;
                        })
                      }
                      className={`rounded-xl border p-4 text-left text-sm transition ${style}`}
                    >
                      {String.fromCharCode(65 + optionIndex)}. {option}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className="mt-3 rounded-xl bg-[#071426] p-4 text-sm leading-6">
                  <p className="font-semibold text-green-300">
                    Correct answer: {String.fromCharCode(65 + question.answer)}.{" "}
                    {question.options[question.answer]}
                  </p>
                  <p className="mt-1 text-slate-300">
                    {question.explanation}
                  </p>
                </div>
              )}
            </div>
          ))}

          {!submitted ? (
            <div className="mt-6">
              <p className="mb-4 text-sm text-slate-400">
                Attempted: {answers.filter((answer) => answer !== undefined).length} / 10
              </p>
              <button
                onClick={() => setSubmitted(true)}
                disabled={answers.length !== 10 || answers.some((answer) => answer === undefined)}
                className="w-full rounded-xl bg-cyan-400 px-6 py-3 font-bold text-[#071426] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
              >
                Submit Quiz
              </button>
            </div>
          ) : (
            <div className="mt-7 rounded-2xl border border-cyan-400/20 bg-[#071426] p-6 text-center">
              <p className="text-sm text-slate-400">Your Final Score</p>
              <p className="mt-2 text-4xl font-bold text-cyan-300">
                {score} / 10
              </p>
              <p className="mt-2 text-sm text-slate-300">
                {score >= 8
                  ? "Excellent work! Keep it up."
                  : score >= 5
                  ? "Good effort! Revise the incorrect answers."
                  : "Keep practising. Revise the notes and try again."}
              </p>
              <button
                onClick={resetQuiz}
                className="mt-5 rounded-xl bg-cyan-400 px-6 py-3 font-bold text-[#071426] hover:bg-cyan-300"
              >
                Retry Quiz
              </button>
            </div>
          )}
        </section>

        <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-6">
          <a
            href="/subjects/physics/magnetism-and-matter"
            className="text-sm text-cyan-400 hover:text-cyan-300"
          >
            ← Previous: Magnetism and Matter
          </a>
          <a
            href="/subjects/physics"
            className="text-sm text-cyan-400 hover:text-cyan-300"
          >
            All Physics Chapters →
          </a>
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          BOARDWISE · Class 12 Physics · Learn. Practise. Succeed.
        </p>
      </div>
    </main>
  );
}
