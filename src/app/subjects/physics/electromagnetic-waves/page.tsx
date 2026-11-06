
"use client";

import { useState } from "react";

const topics = [
  {
    title: "1. What are Electromagnetic Waves?",
    points: [
      "Electromagnetic waves are waves made up of changing electric and magnetic fields.",
      "They do not require a material medium for propagation.",
      "They can travel through vacuum.",
      "Electric and magnetic fields are perpendicular to each other.",
      "They are transverse waves."
    ]
  },
  {
    title: "2. Displacement Current",
    points: [
      "Displacement current was introduced by James Clerk Maxwell.",
      "It is produced by a changing electric field.",
      "It explains the magnetic field between the plates of a charging capacitor.",
      "Formula: Iₐ = ε₀ × dΦE/dt"
    ]
  },
  {
    title: "3. Properties of Electromagnetic Waves",
    points: [
      "They travel in vacuum with the speed of light.",
      "Their electric and magnetic fields are in the same phase.",
      "They carry energy and momentum.",
      "They are not deflected by electric or magnetic fields.",
      "They show reflection, refraction, interference and diffraction."
    ]
  },
  {
    title: "4. Speed of Electromagnetic Waves",
    points: [
      "Speed in vacuum is approximately 3 × 10⁸ m/s.",
      "Speed is given by c = 1 / √(μ₀ε₀).",
      "The ratio of electric field to magnetic field is E₀/B₀ = c.",
      "All electromagnetic waves travel at the same speed in vacuum."
    ]
  },
  {
    title: "5. Electromagnetic Spectrum",
    points: [
      "The electromagnetic spectrum contains all types of electromagnetic waves.",
      "Order of increasing frequency: Radio waves, Microwaves, Infrared, Visible, Ultraviolet, X-rays, Gamma rays.",
      "Wavelength decreases as frequency increases.",
      "All electromagnetic waves have the same speed in vacuum."
    ]
  },
  {
    title: "6. Radio Waves",
    points: [
      "Radio waves have the longest wavelengths in the usual spectrum order.",
      "They are produced by oscillating charges.",
      "They are used in radio and television communication.",
      "They are useful for long-distance communication."
    ]
  },
  {
    title: "7. Microwaves",
    points: [
      "Microwaves have shorter wavelengths than radio waves.",
      "They are used in radar systems.",
      "They are used in satellite communication.",
      "They are also used in microwave ovens."
    ]
  },
  {
    title: "8. Infrared and Visible Waves",
    points: [
      "Infrared radiation is associated with heat.",
      "It is used in remote controls and thermal imaging.",
      "Visible light is the part of the spectrum detected by human eyes.",
      "Visible light has wavelengths approximately from 400 nm to 700 nm."
    ]
  },
  {
    title: "9. Ultraviolet, X-rays and Gamma Rays",
    points: [
      "Ultraviolet rays are used for sterilisation and detecting forged documents.",
      "X-rays are used in medical imaging and security scanning.",
      "Gamma rays are used in cancer treatment and sterilisation.",
      "These high-frequency radiations can be harmful with excessive exposure."
    ]
  }
];

const formulas = [
  ["Speed of EM waves", "c = 1 / √(μ₀ε₀)"],
  ["Speed in vacuum", "c ≈ 3 × 10⁸ m/s"],
  ["Electric and magnetic fields", "E₀ / B₀ = c"],
  ["Wave speed", "c = fλ"],
  ["Displacement current", "Iₐ = ε₀ × dΦE/dt"],
  ["Electric flux", "ΦE = E × A (uniform perpendicular field)"],
  ["Energy density", "u = ½ε₀E² + B²/(2μ₀)"]
];

const spectrum = [
  ["Radio Waves", "Radio and TV communication"],
  ["Microwaves", "Radar, satellite communication and ovens"],
  ["Infrared", "Remote controls and thermal imaging"],
  ["Visible Light", "Vision and photography"],
  ["Ultraviolet", "Sterilisation and detecting forged documents"],
  ["X-rays", "Medical imaging and security scanning"],
  ["Gamma Rays", "Cancer treatment and sterilisation"]
];

const numericals = [
  {
    title: "Numerical 1: Wavelength",
    question: "An electromagnetic wave has frequency 6 × 10⁸ Hz. Find its wavelength in vacuum.",
    steps: [
      "Given: f = 6 × 10⁸ Hz",
      "Speed: c = 3 × 10⁸ m/s",
      "Formula: c = fλ",
      "λ = c / f",
      "λ = (3 × 10⁸) / (6 × 10⁸)",
      "Answer: 0.5 m"
    ]
  },
  {
    title: "Numerical 2: Magnetic Field",
    question: "The electric field amplitude of an electromagnetic wave is 300 V/m. Find its magnetic field amplitude.",
    steps: [
      "Given: E₀ = 300 V/m",
      "Speed: c = 3 × 10⁸ m/s",
      "Formula: E₀ / B₀ = c",
      "B₀ = E₀ / c",
      "B₀ = 300 / (3 × 10⁸)",
      "Answer: 1 × 10⁻⁶ T"
    ]
  },
  {
    title: "Numerical 3: Frequency",
    question: "An electromagnetic wave has wavelength 2 m. Find its frequency in vacuum.",
    steps: [
      "Given: λ = 2 m",
      "Speed: c = 3 × 10⁸ m/s",
      "Formula: c = fλ",
      "f = c / λ",
      "f = (3 × 10⁸) / 2",
      "Answer: 1.5 × 10⁸ Hz"
    ]
  },
  {
    title: "Numerical 4: Displacement Current",
    question: "The rate of change of electric flux is 2 × 10⁴ V m/s. Find displacement current. Take ε₀ = 8.85 × 10⁻¹² F/m.",
    steps: [
      "Given: dΦE/dt = 2 × 10⁴ V m/s",
      "ε₀ = 8.85 × 10⁻¹² F/m",
      "Formula: Iₐ = ε₀ × dΦE/dt",
      "Iₐ = 8.85 × 10⁻¹² × 2 × 10⁴",
      "Answer: 1.77 × 10⁻⁷ A"
    ]
  }
];

const boardQuestions = [
  {
    marks: "2 Marks",
    question: "What are electromagnetic waves? Write any two properties."
  },
  {
    marks: "2 Marks",
    question: "What is displacement current? Who introduced this concept?"
  },
  {
    marks: "2 Marks",
    question: "Write the relation between the amplitudes of electric and magnetic fields in an electromagnetic wave."
  },
  {
    marks: "3 Marks",
    question: "Write the electromagnetic spectrum in increasing order of frequency with one use of each."
  },
  {
    marks: "3 Marks",
    question: "Why are electromagnetic waves called transverse waves? Explain."
  },
  {
    marks: "5 Marks",
    question: "Explain the important properties of electromagnetic waves and describe their electromagnetic spectrum with applications."
  }
];

const questions = [
  {
    q: "Who introduced the concept of displacement current?",
    options: ["Newton", "Maxwell", "Faraday", "Einstein"],
    answer: 1,
    explanation: "James Clerk Maxwell introduced displacement current."
  },
  {
    q: "Electromagnetic waves are:",
    options: ["Longitudinal waves", "Mechanical waves", "Transverse waves", "Sound waves"],
    answer: 2,
    explanation: "Electromagnetic waves are transverse waves."
  },
  {
    q: "What is the speed of electromagnetic waves in vacuum?",
    options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "340 m/s"],
    answer: 1,
    explanation: "Their speed in vacuum is approximately 3 × 10⁸ m/s."
  },
  {
    q: "Which waves are commonly used in radar systems?",
    options: ["Microwaves", "Gamma rays", "Visible light", "Ultraviolet rays"],
    answer: 0,
    explanation: "Microwaves are commonly used in radar systems."
  },
  {
    q: "Which electromagnetic radiation is associated with heat?",
    options: ["X-rays", "Infrared", "Gamma rays", "Radio waves"],
    answer: 1,
    explanation: "Infrared radiation is associated with heat."
  },
  {
    q: "Which radiation is used in medical imaging of bones?",
    options: ["Radio waves", "Microwaves", "X-rays", "Infrared"],
    answer: 2,
    explanation: "X-rays are used to image bones."
  },
  {
    q: "Which electromagnetic waves have the highest frequency?",
    options: ["Radio waves", "Microwaves", "X-rays", "Gamma rays"],
    answer: 3,
    explanation: "Gamma rays have the highest frequency in the electromagnetic spectrum."
  },
  {
    q: "The electric and magnetic fields in an EM wave are:",
    options: ["Parallel", "Perpendicular and in phase", "Opposite in phase", "Unrelated"],
    answer: 1,
    explanation: "The fields are perpendicular to each other and oscillate in the same phase."
  },
  {
    q: "Which waves are used in satellite communication?",
    options: ["Microwaves", "Gamma rays", "Ultraviolet rays", "X-rays"],
    answer: 0,
    explanation: "Microwaves are used in satellite communication."
  },
  {
    q: "The relation between wave speed, frequency and wavelength is:",
    options: ["c = f / λ", "c = λ / f", "c = fλ", "c = f + λ"],
    answer: 2,
    explanation: "Wave speed is the product of frequency and wavelength."
  }
];

export default function ElectromagneticWavesPage() {
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
            CLASS 12 PHYSICS · CHAPTER 8
          </span>

          <h1 className="mt-6 text-3xl font-bold sm:text-5xl">
            Electromagnetic Waves
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Explore electromagnetic waves, displacement current, their
            properties, the electromagnetic spectrum and real-life uses.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 text-xs text-slate-300">
            <span className="rounded-xl bg-white/5 px-4 py-2">9 Topics</span>
            <span className="rounded-xl bg-white/5 px-4 py-2">7 Formulas</span>
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
          <h2 className="text-2xl font-bold">🌈 Electromagnetic Spectrum</h2>
          <p className="mt-2 text-sm text-slate-400">
            Remember the order from lowest to highest frequency.
          </p>

          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
            {spectrum.map(([name, use], index) => (
              <div
                key={name}
                className={`flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between ${
                  index % 2 === 0 ? "bg-[#101a2d]" : "bg-[#0c1628]"
                }`}
              >
                <span className="font-semibold text-cyan-300">{name}</span>
                <span className="text-sm text-slate-300">{use}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Frequency increases from Radio Waves to Gamma Rays. Wavelength decreases in the same direction.
          </p>
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
            Follow each step to understand the calculation.
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
              🎯 Chapter 8 MCQ Quiz
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
            href="/subjects/physics/alternating-current"
            className="text-sm text-cyan-400 hover:text-cyan-300"
          >
            ← Previous: Alternating Current
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
