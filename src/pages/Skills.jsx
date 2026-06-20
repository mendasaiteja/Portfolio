import { COLORS, SKILLS, SKILL_COLORS } from "../constants";

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <span className="section-tag">What I work with</span>
        <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, marginBottom: 12 }}>Tech Stack</h2>
        <p style={{ fontSize: 14, color: COLORS.muted, marginBottom: 40 }}>Tools and technologies I use to build things.</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {Object.entries(SKILLS).map(([cat, skills]) => {
            const c = SKILL_COLORS[cat];
            return (
              <div key={cat} style={{ display: "flex", alignItems: "flex-start", gap: 20, flexWrap: "wrap" }}>
                <div style={{ minWidth: 110, paddingTop: 6 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: c.text, letterSpacing: 1, textTransform: "uppercase" }}>
                    {cat}
                  </span>
                </div>
                <div style={{ flex: 1, display: "flex", flexWrap: "wrap", gap: 0 }}>
                  {skills.map(s => (
                    <span
                      key={s}
                      className="skill-tag"
                      style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}