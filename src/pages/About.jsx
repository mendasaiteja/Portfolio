import { COLORS } from "../constants";

const HIGHLIGHTS = [
  "LeetCode Knight · 1850 Rating · 2-star CodeChef",
  "Top 20 teams — IIIT Hyderabad Hackathon",
];
const STATS = [
  { label: "LeetCode Rating", value: "1850",  sub: "Knight Rank" },
  { label: "CodeChef",        value: "2-star", sub: "Active Competitive" },
  { label: "Projects",        value: "5+",     sub: "Shipped & Deployed" },
  { label: "Certs",           value: "6",      sub: "Across Platforms" },
];
export default function About() {
  return (
    <section id="about" style={{ padding: "6rem 2rem", background: COLORS.surface }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <span className="section-tag">Who I am</span>
        <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, marginBottom: 40 }}>About Me</h2>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: COLORS.muted, marginBottom: 16 }}>
              I genuinely enjoy the craft of software — from designing clean APIs to debugging tricky edge cases at 2am.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: COLORS.muted, marginBottom: 24 }}>
              I've built production-ready MERN apps, integrated LLM APIs, and love DSA puzzles (Knight rank on
              LeetCode with 1850 rating).
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {HIGHLIGHTS.map(text => (
                <div key={text} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ color: COLORS.accent, fontSize: 14, marginTop: 2 }}>—</span>
                  <span style={{ fontSize: 13, color: COLORS.muted, lineHeight: 1.6 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {STATS.map(s => (
              <div key={s.label} className="stat-card">
                <div style={{ fontSize: 28, fontWeight: 800, color: COLORS.accent }}>{s.value}</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: COLORS.text, marginTop: 4 }}>{s.label}</div>
                <div style={{ fontSize: 11, color: COLORS.muted, marginTop: 2 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}