import { COLORS, PROJECTS } from "../constants";

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "6rem 2rem", background: COLORS.surface }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <span className="section-tag">What I've built</span>
        <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, marginBottom: 12 }}>Projects</h2>
        <p style={{ fontSize: 14, color: COLORS.muted, marginBottom: 40 }}>A mix of full-stack apps, tools, and experiments.</p>

        <div
          className="projects-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}
        >
          {PROJECTS.map((p, i) => (
            <a key={i} href={p.link} target="_blank" rel="noreferrer">
              <div
                className="project-card"
                style={{
                  background: COLORS.surfaceAlt,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 14,
                  padding: 24,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: p.accent, opacity: 0.7 }} />

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <span style={{
                    fontSize: 11, padding: "4px 10px",
                    background: `${p.accent}18`,
                    border: `1px solid ${p.accent}40`,
                    borderRadius: 999,
                    color: p.accent,
                    fontWeight: 600,
                  }}>
                    {p.highlight}
                  </span>
                </div>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: COLORS.text, marginBottom: 4 }}>{p.title}</h3>
                  <p style={{ fontSize: 11, color: COLORS.muted, fontWeight: 500 }}>{p.subtitle}</p>
                </div>

                <p style={{ fontSize: 13, color: COLORS.muted, lineHeight: 1.75, flex: 1 }}>{p.description}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.stack.map(t => (
                    <span
                      key={t}
                      style={{
                        fontSize: 11, padding: "3px 10px",
                        background: COLORS.surface,
                        border: `1px solid ${COLORS.border}`,
                        borderRadius: 999,
                        color: COLORS.muted,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}