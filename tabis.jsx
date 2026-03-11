import { useState, useEffect } from "react";

const W = 600, H = 500, CX = 300, CY = 250, SCALE = 40;

function toScreen(x, y) {
  return [CX + x * SCALE, CY - y * SCALE];
}

// Secret parabola: y = (1/8)(x-2)^2 - 3  →  (x-2)^2 = 8(y+3)
// Vertex: (2, -3), p=2, Focus: (2,-1), Directrix: y=-5, LR=8
const A = 1 / 8, H_val = 2, K_val = -3;
const p = 1 / (4 * A); // = 2

export default function ParabolaLesson() {
  const [step, setStep] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const steps = [
    { id: 0, label: "Mystery Graph" },
    { id: 1, label: "Step 1: Standard Form" },
    { id: 2, label: "Step 2: Find Vertex" },
    { id: 3, label: "Step 3: Find p" },
    { id: 4, label: "Step 4: Latus Rectum" },
    { id: 5, label: "Full Reveal ✓" },
  ];

  const parabola = [];
  for (let x = -8; x <= 12; x += 0.05) {
    const y = A * (x - H_val) ** 2 + K_val;
    if (y > -7 && y < 7) {
      const [sx, sy] = toScreen(x, y);
      parabola.push(`${sx},${sy}`);
    }
  }

  const [vx, vy] = toScreen(H_val, K_val);
  const [fx, fy] = toScreen(H_val, K_val + p);
  const [d1x, d1y] = toScreen(-6, K_val - p);
  const [d2x, d2y] = toScreen(10, K_val - p);
  const [lr1x, lr1y] = toScreen(H_val - 2 * p, K_val + p);
  const [lr2x, lr2y] = toScreen(H_val + 2 * p, K_val + p);

  const axisLines = [];
  for (let i = -7; i <= 7; i++) {
    const [ax] = toScreen(i, 0);
    const [, ay] = toScreen(0, i);
    axisLines.push({ type: "v", x: ax, label: i });
    axisLines.push({ type: "h", y: ay, label: i });
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0d0d14",
      fontFamily: "'Georgia', serif",
      color: "#e8e0d0",
      padding: "2rem 1rem",
    }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>

        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "0.75rem", letterSpacing: "0.35em", color: "#9b8ea0", textTransform: "uppercase", marginBottom: "0.4rem" }}>Interactive Lesson</div>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 400, color: "#f0e8ff", margin: 0, letterSpacing: "-0.02em" }}>
            The Parabola
          </h1>
          <div style={{ width: 48, height: 2, background: "linear-gradient(90deg,#7c5cbf,#b87ce8)", margin: "0.8rem auto 0" }} />
        </div>

        {/* Graph */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
          <div style={{
            background: "#13111e",
            border: "1px solid #2a2540",
            borderRadius: 12,
            padding: "1rem",
            boxShadow: "0 0 60px rgba(120,80,200,0.08)",
          }}>
            <svg width={W} height={H} style={{ display: "block" }}>
              {/* Grid */}
              {Array.from({ length: 15 }, (_, i) => i - 7).map(i => {
                const [sx] = toScreen(i, 0);
                const [, sy] = toScreen(0, i);
                return (
                  <g key={i}>
                    <line x1={sx} y1={0} x2={sx} y2={H} stroke="#1e1b2e" strokeWidth={1} />
                    <line x1={0} y1={sy} x2={W} y2={sy} stroke="#1e1b2e" strokeWidth={1} />
                  </g>
                );
              })}

              {/* Axes */}
              <line x1={0} y1={CY} x2={W} y2={CY} stroke="#3a3560" strokeWidth={1.5} />
              <line x1={CX} y1={0} x2={CX} y2={H} stroke="#3a3560" strokeWidth={1.5} />

              {/* Axis ticks */}
              {Array.from({ length: 13 }, (_, i) => i - 6).map(i => {
                const [sx] = toScreen(i, 0);
                const [, sy] = toScreen(0, i);
                return (
                  <g key={i}>
                    {i !== 0 && <><line x1={sx} y1={CY - 4} x2={sx} y2={CY + 4} stroke="#3a3560" strokeWidth={1} />
                      <text x={sx} y={CY + 16} textAnchor="middle" fill="#453f60" fontSize={10}>{i}</text></>}
                    {i !== 0 && <><line x1={CX - 4} y1={sy} x2={CX + 4} y2={sy} stroke="#3a3560" strokeWidth={1} />
                      <text x={CX - 14} y={sy + 4} textAnchor="middle" fill="#453f60" fontSize={10}>{i}</text></>}
                  </g>
                );
              })}

              {/* Directrix */}
              {step >= 3 && (
                <>
                  <line x1={toScreen(-7, K_val - p)[0]} y1={toScreen(-7, K_val - p)[1]}
                    x2={toScreen(11, K_val - p)[0]} y2={toScreen(11, K_val - p)[1]}
                    stroke="#e05c7a" strokeWidth={1.5} strokeDasharray="6,4" opacity={0.7} />
                  <text x={toScreen(9.5, K_val - p)[0]} y={toScreen(9.5, K_val - p)[1] - 7}
                    fill="#e05c7a" fontSize={11} opacity={0.9}>y = −5</text>
                </>
              )}

              {/* Latus Rectum */}
              {step >= 4 && (
                <>
                  <line x1={lr1x} y1={lr1y} x2={lr2x} y2={lr2y}
                    stroke="#5cb8e0" strokeWidth={2} strokeDasharray="5,3" opacity={0.8} />
                  <text x={(lr1x + lr2x) / 2} y={lr1y - 10}
                    fill="#5cb8e0" fontSize={11} textAnchor="middle">LR = 8</text>
                </>
              )}

              {/* Axis of symmetry */}
              {step >= 2 && (
                <line x1={vx} y1={0} x2={vx} y2={H}
                  stroke="#b87ce8" strokeWidth={1} strokeDasharray="4,4" opacity={0.4} />
              )}

              {/* Parabola curve */}
              <polyline
                points={parabola.join(" ")}
                fill="none"
                stroke="#c084f5"
                strokeWidth={2.5}
                strokeLinecap="round"
              />
              <polyline
                points={parabola.join(" ")}
                fill="none"
                stroke="white"
                strokeWidth={0.5}
                strokeLinecap="round"
                opacity={0.2}
              />

              {/* Focus */}
              {step >= 3 && (
                <>
                  <circle cx={fx} cy={fy} r={5} fill="#f5c842" stroke="#13111e" strokeWidth={2} />
                  <text x={fx + 10} y={fy - 8} fill="#f5c842" fontSize={11}>F(2, −1)</text>
                </>
              )}

              {/* Vertex */}
              {step >= 2 && (
                <>
                  <circle cx={vx} cy={vy} r={6} fill="#c084f5" stroke="#13111e" strokeWidth={2} />
                  <text x={vx + 10} y={vy - 10} fill="#c084f5" fontSize={12} fontWeight="bold">V(2, −3)</text>
                </>
              )}
            </svg>
          </div>
        </div>

        {/* Step Nav */}
        <div style={{ display: "flex", gap: "0.4rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {steps.map(s => (
            <button key={s.id} onClick={() => setStep(s.id)} style={{
              padding: "0.4rem 0.85rem",
              borderRadius: 20,
              border: step === s.id ? "1px solid #b87ce8" : "1px solid #2a2540",
              background: step === s.id ? "rgba(184,124,232,0.15)" : "transparent",
              color: step === s.id ? "#d4aaff" : "#6b6390",
              fontSize: "0.78rem",
              cursor: "pointer",
              letterSpacing: "0.02em",
              transition: "all 0.2s",
            }}>{s.label}</button>
          ))}
        </div>

        {/* Lesson Panel */}
        <div style={{
          background: "#13111e",
          border: "1px solid #2a2540",
          borderRadius: 12,
          padding: "1.8rem 2rem",
          lineHeight: 1.75,
          fontSize: "0.97rem",
        }}>
          {step === 0 && (
            <div>
              <h2 style={{ color: "#c084f5", marginTop: 0, fontWeight: 400, fontSize: "1.25rem" }}>🔍 What do you see?</h2>
              <p>Above is a <strong style={{ color: "#e8e0d0" }}>mystery parabola</strong>. No equation. No labels. Just the curve.</p>
              <p>Take a moment to observe it:</p>
              <ul style={{ color: "#b0a8c8", paddingLeft: "1.2rem" }}>
                <li>Which direction does it open?</li>
                <li>Where does the lowest point appear to be?</li>
                <li>Does it look wide or narrow?</li>
              </ul>
              <p style={{ color: "#7c6fa0", fontSize: "0.88rem", marginTop: "1.2rem" }}>👆 Click <strong style={{ color: "#b87ce8" }}>Step 1</strong> above to begin the lesson.</p>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 style={{ color: "#c084f5", marginTop: 0, fontWeight: 400, fontSize: "1.25rem" }}>Step 1 — Standard Form of a Parabola</h2>
              <p>A vertical parabola is written in <strong style={{ color: "#f0e8ff" }}>vertex form</strong>:</p>
              <div style={{ background: "#0d0b18", border: "1px solid #3a2f5a", borderRadius: 8, padding: "0.9rem 1.4rem", margin: "1rem 0", fontFamily: "monospace", fontSize: "1.1rem", color: "#d4aaff", textAlign: "center", letterSpacing: "0.05em" }}>
                (x − h)² = 4p(y − k)
              </div>
              <p>Where:</p>
              <ul style={{ color: "#b0a8c8" }}>
                <li><strong style={{ color: "#c084f5" }}>(h, k)</strong> is the <strong>vertex</strong></li>
                <li><strong style={{ color: "#f5c842" }}>p</strong> is the distance from the vertex to the <strong>focus</strong> (and also to the directrix)</li>
                <li>If <strong>p &gt; 0</strong>, the parabola opens <strong>upward</strong>; if <strong>p &lt; 0</strong>, it opens <strong>downward</strong></li>
              </ul>
              <p style={{ color: "#7c6fa0", fontSize: "0.88rem" }}>In the familiar <em>y = a(x−h)² + k</em> form, notice that <strong style={{ color: "#d4aaff" }}>4p = 1/a</strong>, so <strong style={{ color: "#d4aaff" }}>p = 1/(4a)</strong>.</p>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 style={{ color: "#c084f5", marginTop: 0, fontWeight: 400, fontSize: "1.25rem" }}>Step 2 — Finding the Vertex</h2>
              <p>The <strong style={{ color: "#f0e8ff" }}>vertex</strong> is the turning point of the parabola — its minimum (or maximum).</p>
              <p>Given the equation in vertex form:</p>
              <div style={{ background: "#0d0b18", border: "1px solid #3a2f5a", borderRadius: 8, padding: "0.9rem 1.4rem", margin: "1rem 0", fontFamily: "monospace", fontSize: "1.05rem", color: "#d4aaff", textAlign: "center" }}>
                y = a(x − h)² + k
              </div>
              <p>The vertex is simply <strong style={{ color: "#c084f5" }}>(h, k)</strong> — just read it off!</p>
              <div style={{ background: "#1a1430", borderLeft: "3px solid #c084f5", padding: "0.8rem 1.2rem", borderRadius: "0 8px 8px 0", margin: "1rem 0" }}>
                <strong style={{ color: "#c084f5" }}>Our parabola:</strong> The vertex is at <strong style={{ color: "#f0e8ff" }}>V(2, −3)</strong>
                <br /><span style={{ color: "#7c6fa0", fontSize: "0.88rem" }}>Watch it appear on the graph ↑</span>
              </div>
              <p style={{ color: "#b0a8c8" }}>The dashed vertical line through the vertex is the <strong style={{ color: "#b87ce8" }}>axis of symmetry</strong>: x = 2.</p>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 style={{ color: "#c084f5", marginTop: 0, fontWeight: 400, fontSize: "1.25rem" }}>Step 3 — Finding p (and the Focus)</h2>
              <p>From the equation <strong style={{ color: "#d4aaff" }}>y = a(x−h)² + k</strong>, we use:</p>
              <div style={{ background: "#0d0b18", border: "1px solid #3a2f5a", borderRadius: 8, padding: "0.9rem 1.4rem", margin: "1rem 0", fontFamily: "monospace", fontSize: "1.05rem", color: "#f5c842", textAlign: "center" }}>
                p = 1 / (4a)
              </div>
              <div style={{ background: "#1a1430", borderLeft: "3px solid #f5c842", padding: "0.8rem 1.2rem", borderRadius: "0 8px 8px 0", margin: "1rem 0" }}>
                <strong style={{ color: "#f5c842" }}>Our parabola:</strong> a = 1/8, so p = 1/(4 × 1/8) = <strong style={{ color: "#f0e8ff" }}>2</strong>
              </div>
              <p style={{ color: "#b0a8c8" }}>Then:</p>
              <ul style={{ color: "#b0a8c8" }}>
                <li><strong style={{ color: "#f5c842" }}>Focus</strong> = (h, k + p) = <strong style={{ color: "#f0e8ff" }}>(2, −1)</strong></li>
                <li><strong style={{ color: "#e05c7a" }}>Directrix</strong> = y = k − p = <strong style={{ color: "#f0e8ff" }}>y = −5</strong></li>
              </ul>
              <p style={{ color: "#7c6fa0", fontSize: "0.88rem" }}>Both now appear on the graph ↑</p>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 style={{ color: "#c084f5", marginTop: 0, fontWeight: 400, fontSize: "1.25rem" }}>Step 4 — Length of the Latus Rectum</h2>
              <p>The <strong style={{ color: "#5cb8e0" }}>latus rectum</strong> is the chord that passes through the <strong>focus</strong>, perpendicular to the axis of symmetry.</p>
              <div style={{ background: "#0d0b18", border: "1px solid #3a2f5a", borderRadius: 8, padding: "0.9rem 1.4rem", margin: "1rem 0", fontFamily: "monospace", fontSize: "1.1rem", color: "#5cb8e0", textAlign: "center" }}>
                Length of Latus Rectum = |4p|
              </div>
              <div style={{ background: "#111b24", borderLeft: "3px solid #5cb8e0", padding: "0.8rem 1.2rem", borderRadius: "0 8px 8px 0", margin: "1rem 0" }}>
                <strong style={{ color: "#5cb8e0" }}>Our parabola:</strong> p = 2, so LR = |4 × 2| = <strong style={{ color: "#f0e8ff" }}>8 units</strong>
              </div>
              <p style={{ color: "#b0a8c8" }}>It stretches from <strong style={{ color: "#f0e8ff" }}>(−2, −1)</strong> to <strong style={{ color: "#f0e8ff" }}>(6, −1)</strong> — that blue dashed segment on the graph.</p>
              <p style={{ color: "#7c6fa0", fontSize: "0.88rem" }}>💡 The latus rectum tells you how <em>wide</em> the parabola is at its focus. Larger |4p| = wider parabola.</p>
            </div>
          )}

          {step === 5 && (
            <div>
              <h2 style={{ color: "#c084f5", marginTop: 0, fontWeight: 400, fontSize: "1.25rem" }}>✓ Full Reveal — Everything Together</h2>
              <div style={{ background: "#0d0b18", border: "1px solid #3a2f5a", borderRadius: 8, padding: "0.9rem 1.4rem", margin: "0 0 1.2rem", fontFamily: "monospace", fontSize: "1.05rem", color: "#d4aaff", textAlign: "center" }}>
                y = (1/8)(x − 2)² − 3
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.7rem" }}>
                {[
                  { label: "Vertex", value: "(2, −3)", color: "#c084f5" },
                  { label: "a", value: "1/8", color: "#d4aaff" },
                  { label: "p", value: "2", color: "#f5c842" },
                  { label: "Focus", value: "(2, −1)", color: "#f5c842" },
                  { label: "Directrix", value: "y = −5", color: "#e05c7a" },
                  { label: "Latus Rectum", value: "8 units", color: "#5cb8e0" },
                  { label: "Opens", value: "Upward", color: "#98e890" },
                  { label: "Axis of Sym.", value: "x = 2", color: "#b87ce8" },
                ].map(item => (
                  <div key={item.label} style={{ background: "#1a1830", border: "1px solid #2a2540", borderRadius: 8, padding: "0.6rem 1rem" }}>
                    <div style={{ color: "#5a5478", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>{item.label}</div>
                    <div style={{ color: item.color, fontFamily: "monospace", fontSize: "1rem", marginTop: "0.2rem" }}>{item.value}</div>
                  </div>
                ))}
              </div>
              <p style={{ color: "#7c6fa0", fontSize: "0.88rem", marginTop: "1.2rem" }}>🎉 You can now find the vertex and latus rectum of any vertical parabola!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}