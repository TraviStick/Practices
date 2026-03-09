import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ResponsiveContainer, ScatterChart, Scatter } from "recharts";

const questions = [
  // 1st Exam - Real Number System
  {
    id: 1, exam: "1st Exam", topic: "Real Number System",
    question: "Is the integer 7 a solution to the inequality x + 2 < 10?",
    options: ["Yes, because 7 + 2 = 9 < 10", "No, because 7 is not less than 10", "Yes, because 7 < 10", "No, because 7 + 2 = 10, not less than 10"],
    answer: 0, explanation: "Substituting x = 7: 7 + 2 = 9, and 9 < 10 is TRUE. So yes, 7 is a solution."
  },
  {
    id: 2, exam: "1st Exam", topic: "Real Number System",
    question: "What is the distance between 15 and -8 on the number line?",
    options: ["7", "23", "-23", "13"],
    answer: 1, explanation: "|15 - (-8)| = |15 + 8| = |23| = 23"
  },
  {
    id: 3, exam: "1st Exam", topic: "Real Number System",
    question: "Why does |x| = -6 have no solution?",
    options: ["Because x must be positive", "Because absolute value is always non-negative, it can never equal a negative number", "Because -6 is not a real number", "Because x = 6 is the only solution"],
    answer: 1, explanation: "Absolute value represents distance, which is always ≥ 0. It can never be negative."
  },
  {
    id: 4, exam: "1st Exam", topic: "Real Number System",
    question: "What are the solutions of |x + 5| = 2?",
    options: ["x = 7 or x = -3", "x = -3 or x = -7", "x = 3 or x = -7", "x = 3 or x = 7"],
    answer: 1, explanation: "|x+5| = 2 means x+5 = 2 or x+5 = -2. So x = -3 or x = -7."
  },
  {
    id: 5, exam: "1st Exam", topic: "Real Number System",
    question: "What are the solutions of -3x > 9?",
    options: ["x > -3", "x < -3", "x > 3", "x < 3"],
    answer: 1, explanation: "Divide both sides by -3 and FLIP the inequality: x < -3."
  },
  {
    id: 6, exam: "1st Exam", topic: "Real Number System",
    question: "What is |10 - (-7 + 4)|?",
    options: ["1", "13", "7", "3"],
    answer: 1, explanation: "-7 + 4 = -3. Then |10 - (-3)| = |10 + 3| = |13| = 13."
  },
  // 1st Exam - Coordinate System
  {
    id: 7, exam: "1st Exam", topic: "2D Coordinate System",
    question: "What are the coordinates of a point 6 units below the x-axis and 10 units to the right of the y-axis?",
    options: ["(-10, 6)", "(10, -6)", "(-6, 10)", "(6, -10)"],
    answer: 1, explanation: "10 units right → x = 10; 6 units below x-axis → y = -6. Answer: (10, -6)."
  },
  {
    id: 8, exam: "1st Exam", topic: "2D Coordinate System",
    question: "What is the vertical distance between (-10, 6) and (4, -9)?",
    options: ["3", "15", "14", "5"],
    answer: 1, explanation: "Vertical distance = |y₂ - y₁| = |-9 - 6| = |-15| = 15."
  },
  {
    id: 9, exam: "1st Exam", topic: "2D Coordinate System",
    question: "In what quadrant is a point located if x > 0 and y = -3?",
    options: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
    answer: 3, explanation: "x > 0 (positive) and y = -3 (negative) → Quadrant IV."
  },
  // Lines
  {
    id: 10, exam: "1st Exam", topic: "Lines",
    question: "What is the slope of the line passing through (-5, 3) and (4, -6)?",
    options: ["1", "-1", "9/9", "-1"],
    answer: 1, explanation: "m = (y₂ - y₁)/(x₂ - x₁) = (-6 - 3)/(4 - (-5)) = -9/9 = -1."
  },
  {
    id: 11, exam: "1st Exam", topic: "Lines",
    question: "What is the slope of a line with equation 3x - 6y = 8?",
    options: ["3", "-6", "1/2", "1/3"],
    answer: 2, explanation: "Rewrite: -6y = -3x + 8 → y = (1/2)x - 4/3. Slope = 1/2."
  },
  {
    id: 12, exam: "1st Exam", topic: "Lines",
    question: "Line A has slope 3. Line B is perpendicular to Line A. What is the slope of Line B?",
    options: ["3", "-3", "-1/3", "1/3"],
    answer: 2, explanation: "Perpendicular slopes are negative reciprocals. If m₁ = 3, then m₂ = -1/3."
  },
  // 2nd Exam - Functions
  {
    id: 13, exam: "2nd Exam", topic: "Operations on Functions",
    question: "Given f(x) = 3x - 5 and g(x) = x² + 1, what is f(x) + g(x)?",
    options: ["x² + 3x - 4", "3x² - 4", "x² - 3x + 6", "3x + x²"],
    answer: 0, explanation: "f(x) + g(x) = (3x - 5) + (x² + 1) = x² + 3x - 4."
  },
  {
    id: 14, exam: "2nd Exam", topic: "Operations on Functions",
    question: "Given f(x) = 3x - 5 and g(x) = x² + 1, what is f(x) · g(x)?",
    options: ["3x³ - 5x² + 3x - 5", "3x³ + 3x - 5x² - 5", "3x² - 2x - 5", "x³ + 3x"],
    answer: 1, explanation: "(3x-5)(x²+1) = 3x³ + 3x - 5x² - 5."
  },
  {
    id: 15, exam: "2nd Exam", topic: "Operations on Functions",
    question: "What is the domain of f(x) = √(x - 7)?",
    options: ["x > 7", "x ≥ 7", "All real numbers", "x ≤ 7"],
    answer: 1, explanation: "For a square root, the radicand must be ≥ 0: x - 7 ≥ 0 → x ≥ 7."
  },
  {
    id: 16, exam: "2nd Exam", topic: "Operations on Functions",
    question: "Given f(x) = 7x² + 3x - 4, what is f(-3)?",
    options: ["54", "56", "50", "58"],
    answer: 1, explanation: "f(-3) = 7(9) + 3(-3) - 4 = 63 - 9 - 4 = 50. Wait: 63 - 9 = 54 - 4 = 50. Answer: 50."
  },
  {
    id: 17, exam: "2nd Exam", topic: "Operations on Functions",
    question: "Given f(x) = 4x² - 2 and g(x) = 3x + 1, what is f(g(x))?",
    options: ["36x² + 24x + 2", "12x² - 5", "36x² - 24x + 2", "12x² + 24x + 2"],
    answer: 0, explanation: "f(g(x)) = 4(3x+1)² - 2 = 4(9x²+6x+1) - 2 = 36x²+24x+4-2 = 36x²+24x+2."
  },
  // 3rd Exam - Limits & Derivatives
  {
    id: 18, exam: "3rd Exam", topic: "Limits",
    question: "Using limit theorem, what is lim(x→3) [x² - 5x + 8]?",
    options: ["2", "3", "8", "1"],
    answer: 0, explanation: "Direct substitution: 3² - 5(3) + 8 = 9 - 15 + 8 = 2."
  },
  {
    id: 19, exam: "3rd Exam", topic: "Limits",
    question: "If lim(x→5⁺) f(x) = 6 and lim(x→5⁻) f(x) = -4, does the limit at x = 5 exist?",
    options: ["Yes, it equals 6", "Yes, it equals -4", "No, because the one-sided limits are not equal", "Yes, it equals 1"],
    answer: 2, explanation: "For a limit to exist, both one-sided limits must be equal. Since 6 ≠ -4, the limit does not exist."
  },
  {
    id: 20, exam: "3rd Exam", topic: "Differentiation",
    question: "Find the derivative of f(x) = (1/4)x⁵ - 3x + 5.",
    options: ["(5/4)x⁴ - 3", "(1/4)x⁴ - 3", "5x⁴ - 3", "(5/4)x⁴"],
    answer: 0, explanation: "Using power rule: d/dx[(1/4)x⁵] = (5/4)x⁴; d/dx[-3x] = -3; d/dx[5] = 0. Answer: (5/4)x⁴ - 3."
  },
  {
    id: 21, exam: "3rd Exam", topic: "Differentiation",
    question: "Find the derivative of y = 4/x⁵ = 4x⁻⁵.",
    options: ["-20/x⁶", "20/x⁶", "-20x⁴", "4/x⁴"],
    answer: 0, explanation: "y = 4x⁻⁵. dy/dx = 4·(-5)x⁻⁶ = -20x⁻⁶ = -20/x⁶."
  },
  {
    id: 22, exam: "3rd Exam", topic: "Differentiation",
    question: "Find the derivative of y = 3cos(x) + sin(x).",
    options: ["-3sin(x) + cos(x)", "3sin(x) - cos(x)", "-3sin(x) - cos(x)", "3cos(x) + cos(x)"],
    answer: 0, explanation: "d/dx[3cos x] = -3sin x; d/dx[sin x] = cos x. So y' = -3sin(x) + cos(x)."
  },
  // 4th Exam - Advanced Derivatives
  {
    id: 23, exam: "4th Exam", topic: "Chain Rule",
    question: "Find the derivative of y = (3x + 1)⁵.",
    options: ["5(3x+1)⁴", "15(3x+1)⁴", "3(3x+1)⁴", "5(3x+1)⁵"],
    answer: 1, explanation: "Chain rule: 5(3x+1)⁴ · d/dx[3x+1] = 5(3x+1)⁴ · 3 = 15(3x+1)⁴."
  },
  {
    id: 24, exam: "4th Exam", topic: "Chain Rule",
    question: "Find the derivative of g(x) = sin(4x).",
    options: ["cos(4x)", "4cos(4x)", "-4cos(4x)", "sin(4)"],
    answer: 1, explanation: "Chain rule: cos(4x) · 4 = 4cos(4x)."
  },
  {
    id: 25, exam: "4th Exam", topic: "Applications",
    question: "A particle's position is s(t) = t³ - 6t² + 9t. What is the velocity function v(t)?",
    options: ["3t² - 12t + 9", "t² - 6t + 9", "3t² - 6t + 9", "3t³ - 12t + 9"],
    answer: 0, explanation: "v(t) = s'(t) = 3t² - 12t + 9."
  },
  {
    id: 26, exam: "4th Exam", topic: "Applications",
    question: "For s(t) = t³ - 6t² + 9t, at what time(s) is the particle at rest?",
    options: ["t = 1 and t = 3", "t = 0 and t = 6", "t = 2 and t = 4", "t = 3 only"],
    answer: 0, explanation: "Set v(t) = 3t² - 12t + 9 = 0 → 3(t-1)(t-3) = 0 → t = 1 or t = 3."
  },
  {
    id: 27, exam: "4th Exam", topic: "Applications",
    question: "Profit: P = 4x - x²/10000 - 6000. What is the marginal profit dP/dx?",
    options: ["4 - x/5000", "4 - x/10000", "4x - 1/10000", "4 - 2x/10000"],
    answer: 0, explanation: "dP/dx = 4 - 2x/10000 = 4 - x/5000."
  },
  {
    id: 28, exam: "4th Exam", topic: "Applications",
    question: "For the rocket s(t) = -16t² + 80t + 5, what is the velocity function v(t)?",
    options: ["-32t + 80", "-16t + 80", "-32t + 5", "32t - 80"],
    answer: 0, explanation: "v(t) = s'(t) = -32t + 80."
  },
  {
    id: 29, exam: "4th Exam", topic: "Applications",
    question: "For the coffee shop P = 4x - x²/10000 - 6000, how many cups maximizes profit?",
    options: ["x = 10,000", "x = 20,000", "x = 30,000", "x = 40,000"],
    answer: 1, explanation: "Set dP/dx = 0: 4 - x/5000 = 0 → x = 20,000 cups."
  },
  {
    id: 30, exam: "4th Exam", topic: "Applications",
    question: "For the drone s(t) = 2 + 6t - t², what is the average velocity over [0, 4]?",
    options: ["2 m/s", "4 m/s", "6 m/s", "3 m/s"],
    answer: 0, explanation: "s(0)=2, s(4)=2+24-16=10. Avg velocity = (10-2)/(4-0) = 8/4 = 2 m/s."
  }
];

const topicColors = {
  "Real Number System": "#f59e0b",
  "2D Coordinate System": "#10b981",
  "Lines": "#6366f1",
  "Operations on Functions": "#ec4899",
  "Limits": "#14b8a6",
  "Differentiation": "#8b5cf6",
  "Chain Rule": "#f97316",
  "Applications": "#ef4444"
};

const examGroups = ["1st Exam", "2nd Exam", "3rd Exam", "4th Exam"];

// Graph for parabola f(x) = x²
const parabolaData = Array.from({length: 21}, (_, i) => {
  const x = i - 10;
  return { x, y: x * x };
});

// Graph for velocity s(t) = t³ - 6t² + 9t and v(t) = 3t² - 12t + 9
const velocityData = Array.from({length: 50}, (_, i) => {
  const t = i * 0.1;
  return { t: +t.toFixed(1), s: +(t**3 - 6*t**2 + 9*t).toFixed(2), v: +(3*t**2 - 12*t + 9).toFixed(2) };
}).filter(d => d.t <= 5);

// Profit graph
const profitData = Array.from({length: 41}, (_, i) => {
  const x = i * 1000;
  return { x, P: +(4*x - x*x/10000 - 6000).toFixed(0) };
});

export default function App() {
  const [screen, setScreen] = useState("home"); // home | quiz | results | graphs
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState({});
  const [showExplain, setShowExplain] = useState(false);
  const [filter, setFilter] = useState("All");
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [timerActive, setTimerActive] = useState(false);
  const [activeGraph, setActiveGraph] = useState("parabola");

  const filtered = filter === "All" ? questions : questions.filter(q => q.exam === filter);

  useEffect(() => {
    let t;
    if (timerActive && timeLeft > 0) t = setTimeout(() => setTimeLeft(s => s - 1), 1000);
    if (timeLeft === 0) setScreen("results");
    return () => clearTimeout(t);
  }, [timerActive, timeLeft]);

  const startQuiz = () => {
    setCurrentQ(0); setAnswers({}); setSelected(null);
    setShowExplain(false); setTimeLeft(30 * 60); setTimerActive(true);
    setScreen("quiz");
  };

  const handleSelect = (idx) => {
    if (answers[currentQ] !== undefined) return;
    setSelected(idx);
    setAnswers(prev => ({ ...prev, [currentQ]: idx }));
  };

  const next = () => {
    setSelected(null); setShowExplain(false);
    if (currentQ < filtered.length - 1) setCurrentQ(c => c + 1);
    else { setTimerActive(false); setScreen("results"); }
  };

  const prev = () => {
    setSelected(null); setShowExplain(false);
    if (currentQ > 0) setCurrentQ(c => c - 1);
  };

  const score = Object.entries(answers).filter(([qi, ans]) => filtered[+qi]?.answer === ans).length;
  const pct = Math.round((score / filtered.length) * 100);

  const formatTime = s => `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;

  const q = filtered[currentQ];
  const userAns = answers[currentQ];
  const isAnswered = userAns !== undefined;

  if (screen === "home") return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)", fontFamily: "'Georgia', serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <div style={{ textAlign: "center", maxWidth: 700 }}>
        <div style={{ fontSize: "4rem", marginBottom: "0.5rem" }}>📐</div>
        <h1 style={{ fontSize: "3rem", color: "#fff", margin: 0, letterSpacing: "-1px", fontWeight: 900 }}>Finals Review</h1>
        <p style={{ color: "#a78bfa", fontSize: "1.2rem", marginTop: "0.5rem", marginBottom: "2rem" }}>Pre-Calculus & Calculus · 30 Questions · 4 Exams</p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
          {["All", ...examGroups].map(e => (
            <button key={e} onClick={() => setFilter(e)} style={{
              padding: "0.5rem 1.2rem", borderRadius: 999, border: "2px solid",
              borderColor: filter === e ? "#a78bfa" : "#4c3f8a",
              background: filter === e ? "#a78bfa" : "transparent",
              color: "#fff", cursor: "pointer", fontFamily: "inherit", fontSize: "0.9rem", transition: "all 0.2s"
            }}>{e}</button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem", marginBottom: "2.5rem" }}>
          {[["Questions", filter === "All" ? 30 : questions.filter(q=>q.exam===filter).length], ["Time Limit", "30 min"], ["Topics", "8 Topics"]].map(([l,v]) => (
            <div key={l} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: "1rem", border: "1px solid rgba(167,139,250,0.2)" }}>
              <div style={{ color: "#a78bfa", fontSize: "1.5rem", fontWeight: 700 }}>{v}</div>
              <div style={{ color: "#9ca3af", fontSize: "0.85rem" }}>{l}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <button onClick={startQuiz} style={{
            background: "linear-gradient(135deg, #7c3aed, #4f46e5)", color: "#fff",
            border: "none", borderRadius: 12, padding: "1rem 3rem", fontSize: "1.2rem",
            cursor: "pointer", fontFamily: "inherit", fontWeight: 700, boxShadow: "0 0 30px rgba(124,58,237,0.4)"
          }}>Start Quiz</button>
          <button onClick={() => setScreen("graphs")} style={{
            background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 12, padding: "1rem 2rem", fontSize: "1.1rem", cursor: "pointer", fontFamily: "inherit"
          }}>📊 View Graphs</button>
        </div>
      </div>
    </div>
  );

  if (screen === "graphs") return (
    <div style={{ minHeight: "100vh", background: "#0f0c29", fontFamily: "'Georgia', serif", padding: "2rem", color: "#fff" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
          <button onClick={() => setScreen("home")} style={{ background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", borderRadius: 8, padding: "0.5rem 1rem", cursor: "pointer", fontSize: "0.9rem" }}>← Back</button>
          <h2 style={{ margin: 0, color: "#a78bfa" }}>Reference Graphs</h2>
        </div>

        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          {[["parabola","Parabola y=x²"],["velocity","Position & Velocity"],["profit","Coffee Shop Profit"]].map(([k,l]) => (
            <button key={k} onClick={() => setActiveGraph(k)} style={{
              padding: "0.5rem 1rem", borderRadius: 8,
              background: activeGraph === k ? "#7c3aed" : "rgba(255,255,255,0.07)",
              border: activeGraph === k ? "none" : "1px solid rgba(255,255,255,0.1)",
              color: "#fff", cursor: "pointer", fontSize: "0.9rem"
            }}>{l}</button>
          ))}
        </div>

        {activeGraph === "parabola" && (
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 16, padding: "1.5rem", border: "1px solid rgba(167,139,250,0.15)" }}>
            <h3 style={{ color: "#f59e0b", margin: "0 0 0.5rem 0" }}>Parabola: y = x²</h3>
            <p style={{ color: "#9ca3af", fontSize: "0.9rem", marginTop: 0 }}>Vertex at (0,0). Opens upward. Axis of symmetry: x = 0.</p>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={parabolaData.filter(d => d.x >= -5 && d.x <= 5)}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2d2860" />
                <XAxis dataKey="x" stroke="#9ca3af" label={{ value: 'x', position: 'insideRight', fill: '#9ca3af' }} />
                <YAxis stroke="#9ca3af" label={{ value: 'y', angle: -90, position: 'insideLeft', fill: '#9ca3af' }} />
                <Tooltip contentStyle={{ background: "#1e1b4b", border: "1px solid #7c3aed", borderRadius: 8, color: "#fff" }} formatter={(v,n) => [v, "y = x²"]} />
                <ReferenceLine x={0} stroke="#4c3f8a" />
                <ReferenceLine y={0} stroke="#4c3f8a" />
                <Line type="monotone" dataKey="y" stroke="#f59e0b" strokeWidth={2.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {activeGraph === "velocity" && (
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 16, padding: "1.5rem", border: "1px solid rgba(167,139,250,0.15)" }}>
            <h3 style={{ color: "#10b981", margin: "0 0 0.5rem 0" }}>Particle Motion: s(t) = t³ - 6t² + 9t</h3>
            <p style={{ color: "#9ca3af", fontSize: "0.9rem", marginTop: 0 }}>Orange = position s(t). Purple = velocity v(t) = 3t²-12t+9. Particle at rest when v=0: t=1 and t=3.</p>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={velocityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2d2860" />
                <XAxis dataKey="t" stroke="#9ca3af" label={{ value: 't (sec)', position: 'insideBottom', fill: '#9ca3af', offset: -5 }} />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ background: "#1e1b4b", border: "1px solid #10b981", borderRadius: 8, color: "#fff" }} />
                <ReferenceLine y={0} stroke="#4c3f8a" strokeDasharray="4 4" />
                <ReferenceLine x={1} stroke="#ef4444" strokeDasharray="4 4" label={{ value: 't=1', fill: '#ef4444', fontSize: 11 }} />
                <ReferenceLine x={3} stroke="#ef4444" strokeDasharray="4 4" label={{ value: 't=3', fill: '#ef4444', fontSize: 11 }} />
                <Line type="monotone" dataKey="s" stroke="#f97316" strokeWidth={2.5} dot={false} name="s(t)" />
                <Line type="monotone" dataKey="v" stroke="#8b5cf6" strokeWidth={2.5} dot={false} name="v(t)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {activeGraph === "profit" && (
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 16, padding: "1.5rem", border: "1px solid rgba(167,139,250,0.15)" }}>
            <h3 style={{ color: "#ec4899", margin: "0 0 0.5rem 0" }}>Coffee Shop Profit: P = 4x - x²/10000 - 6000</h3>
            <p style={{ color: "#9ca3af", fontSize: "0.9rem", marginTop: 0 }}>Max profit at x = 20,000 cups. The parabola opens downward — profit decreases after that point.</p>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={profitData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2d2860" />
                <XAxis dataKey="x" stroke="#9ca3af" tickFormatter={v => `${v/1000}k`} label={{ value: 'cups/day', position: 'insideBottom', fill: '#9ca3af', offset: -5 }} />
                <YAxis stroke="#9ca3af" tickFormatter={v => `₱${v.toLocaleString()}`} />
                <Tooltip contentStyle={{ background: "#1e1b4b", border: "1px solid #ec4899", borderRadius: 8, color: "#fff" }} formatter={(v) => [`₱${Number(v).toLocaleString()}`, "Profit"]} labelFormatter={v => `Cups: ${Number(v).toLocaleString()}`} />
                <ReferenceLine y={0} stroke="#4c3f8a" strokeDasharray="4 4" />
                <ReferenceLine x={20000} stroke="#10b981" strokeDasharray="4 4" label={{ value: 'Max (x=20k)', fill: '#10b981', fontSize: 11 }} />
                <Line type="monotone" dataKey="P" stroke="#ec4899" strokeWidth={2.5} dot={false} name="Profit" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
        <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
          <button onClick={startQuiz} style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)", color: "#fff", border: "none", borderRadius: 10, padding: "0.75rem 2.5rem", fontSize: "1rem", cursor: "pointer", fontFamily: "inherit", fontWeight: 700 }}>Take the Quiz</button>
        </div>
      </div>
    </div>
  );

  if (screen === "results") return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)", fontFamily: "'Georgia', serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <div style={{ maxWidth: 700, width: "100%", textAlign: "center" }}>
        <div style={{ fontSize: "5rem" }}>{pct >= 80 ? "🏆" : pct >= 60 ? "📚" : "💪"}</div>
        <h1 style={{ color: "#fff", fontSize: "2.5rem", margin: "0.5rem 0" }}>Quiz Complete!</h1>
        <div style={{ fontSize: "5rem", fontWeight: 900, color: pct >= 80 ? "#10b981" : pct >= 60 ? "#f59e0b" : "#ef4444" }}>{pct}%</div>
        <p style={{ color: "#9ca3af", fontSize: "1.1rem" }}>{score} out of {filtered.length} correct</p>
        <p style={{ color: "#a78bfa", fontSize: "1rem" }}>{pct >= 80 ? "Excellent! You're ready for the finals! 🎉" : pct >= 60 ? "Good work! Review the missed topics." : "Keep practicing — you've got this!"}</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", margin: "2rem 0", maxHeight: 320, overflowY: "auto", padding: "0 0.5rem" }}>
          {filtered.map((q, i) => {
            const ua = answers[i];
            const correct = ua === q.answer;
            return (
              <div key={i} style={{ background: correct ? "rgba(16,185,129,0.1)" : "rgba(239,68,68,0.1)", borderRadius: 10, padding: "0.75rem 1rem", border: `1px solid ${correct ? "#10b981" : "#ef4444"}33`, textAlign: "left", fontSize: "0.85rem" }}>
                <div style={{ color: "#fff", marginBottom: "0.25rem" }}><strong>Q{i+1}.</strong> {q.question}</div>
                <div style={{ color: correct ? "#10b981" : "#ef4444" }}>{correct ? "✓ Correct" : `✗ Your answer: ${ua !== undefined ? q.options[ua] : "Not answered"}`}</div>
                {!correct && <div style={{ color: "#9ca3af", marginTop: "0.2rem" }}>✓ {q.options[q.answer]}</div>}
              </div>
            );
          })}
        </div>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <button onClick={startQuiz} style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)", color: "#fff", border: "none", borderRadius: 10, padding: "0.75rem 2rem", fontSize: "1rem", cursor: "pointer", fontFamily: "inherit", fontWeight: 700 }}>Retry</button>
          <button onClick={() => setScreen("home")} style={{ background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 10, padding: "0.75rem 2rem", fontSize: "1rem", cursor: "pointer", fontFamily: "inherit" }}>Home</button>
          <button onClick={() => setScreen("graphs")} style={{ background: "rgba(16,185,129,0.15)", color: "#10b981", border: "1px solid #10b981", borderRadius: 10, padding: "0.75rem 2rem", fontSize: "1rem", cursor: "pointer", fontFamily: "inherit" }}>📊 Graphs</button>
        </div>
      </div>
    </div>
  );

  // Quiz screen
  const topicColor = topicColors[q.topic] || "#a78bfa";
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f0c29, #302b63)", fontFamily: "'Georgia', serif", display: "flex", flexDirection: "column", alignItems: "center", padding: "1.5rem" }}>
      {/* Header */}
      <div style={{ width: "100%", maxWidth: 720, display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <button onClick={() => { setTimerActive(false); setScreen("home"); }} style={{ background: "none", border: "none", color: "#9ca3af", cursor: "pointer", fontSize: "0.9rem" }}>← Exit</button>
        <div style={{ color: "#fff", fontSize: "1rem" }}>
          <span style={{ color: "#a78bfa", fontWeight: 700 }}>{currentQ + 1}</span>
          <span style={{ color: "#6b7280" }}> / {filtered.length}</span>
        </div>
        <div style={{ color: timeLeft < 300 ? "#ef4444" : "#10b981", fontSize: "1.1rem", fontWeight: 700, background: "rgba(255,255,255,0.05)", padding: "0.3rem 0.8rem", borderRadius: 8 }}>⏱ {formatTime(timeLeft)}</div>
      </div>

      {/* Progress bar */}
      <div style={{ width: "100%", maxWidth: 720, height: 4, background: "rgba(255,255,255,0.1)", borderRadius: 4, marginBottom: "1.5rem" }}>
        <div style={{ height: "100%", width: `${((currentQ + 1) / filtered.length) * 100}%`, background: "linear-gradient(90deg, #7c3aed, #a78bfa)", borderRadius: 4, transition: "width 0.3s" }} />
      </div>

      {/* Question Card */}
      <div style={{ width: "100%", maxWidth: 720, background: "rgba(255,255,255,0.04)", borderRadius: 20, padding: "2rem", border: "1px solid rgba(255,255,255,0.08)", flex: 1 }}>
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
          <span style={{ background: `${topicColor}22`, color: topicColor, padding: "0.25rem 0.75rem", borderRadius: 999, fontSize: "0.8rem", border: `1px solid ${topicColor}44` }}>{q.exam}</span>
          <span style={{ background: "rgba(255,255,255,0.06)", color: "#9ca3af", padding: "0.25rem 0.75rem", borderRadius: 999, fontSize: "0.8rem" }}>{q.topic}</span>
        </div>

        <p style={{ color: "#fff", fontSize: "1.15rem", lineHeight: 1.6, marginBottom: "2rem" }}>{q.question}</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {q.options.map((opt, i) => {
            let bg = "rgba(255,255,255,0.04)";
            let border = "1px solid rgba(255,255,255,0.1)";
            let color = "#e5e7eb";
            if (isAnswered) {
              if (i === q.answer) { bg = "rgba(16,185,129,0.15)"; border = "1px solid #10b981"; color = "#10b981"; }
              else if (i === userAns && userAns !== q.answer) { bg = "rgba(239,68,68,0.15)"; border = "1px solid #ef4444"; color = "#ef4444"; }
            } else if (selected === i) { bg = "rgba(167,139,250,0.15)"; border = "1px solid #a78bfa"; color = "#a78bfa"; }

            return (
              <button key={i} onClick={() => handleSelect(i)} style={{
                background: bg, border, borderRadius: 12, padding: "0.85rem 1.25rem",
                color, cursor: isAnswered ? "default" : "pointer", textAlign: "left",
                fontSize: "0.95rem", fontFamily: "inherit", lineHeight: 1.5, transition: "all 0.15s",
                display: "flex", alignItems: "center", gap: "0.75rem"
              }}>
                <span style={{ minWidth: 24, height: 24, borderRadius: 999, border: `1px solid currentColor`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", opacity: 0.7 }}>
                  {["A","B","C","D"][i]}
                </span>
                {opt}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div style={{ marginTop: "1.5rem" }}>
            <button onClick={() => setShowExplain(!showExplain)} style={{ background: "none", border: "1px solid #a78bfa", color: "#a78bfa", borderRadius: 8, padding: "0.4rem 1rem", cursor: "pointer", fontSize: "0.85rem", fontFamily: "inherit" }}>
              {showExplain ? "Hide" : "📖 Show"} Explanation
            </button>
            {showExplain && (
              <div style={{ marginTop: "1rem", background: "rgba(167,139,250,0.08)", borderRadius: 10, padding: "1rem", border: "1px solid rgba(167,139,250,0.2)", color: "#c4b5fd", fontSize: "0.9rem", lineHeight: 1.6 }}>
                {q.explanation}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Nav */}
      <div style={{ width: "100%", maxWidth: 720, display: "flex", justifyContent: "space-between", marginTop: "1.5rem" }}>
        <button onClick={prev} disabled={currentQ === 0} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", color: "#9ca3af", borderRadius: 10, padding: "0.75rem 1.5rem", cursor: currentQ === 0 ? "not-allowed" : "pointer", fontFamily: "inherit", opacity: currentQ === 0 ? 0.4 : 1 }}>← Prev</button>
        <button onClick={() => setScreen("graphs")} style={{ background: "rgba(16,185,129,0.1)", border: "1px solid #10b981", color: "#10b981", borderRadius: 10, padding: "0.75rem 1.5rem", cursor: "pointer", fontFamily: "inherit", fontSize: "0.9rem" }}>📊</button>
        <button onClick={next} style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)", border: "none", color: "#fff", borderRadius: 10, padding: "0.75rem 1.5rem", cursor: "pointer", fontFamily: "inherit", fontWeight: 700 }}>
          {currentQ === filtered.length - 1 ? "Finish 🎯" : "Next →"}
        </button>
      </div>
    </div>
  );
}