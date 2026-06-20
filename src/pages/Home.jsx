import { COLORS } from "../constants";
import CodeAnimation from "../Certs/components/CodeAnimation";

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/menda-sai-teja-339071295/" },
  { label: "GitHub", href: "https://github.com/mendasaiteja" },
  { label: "LeetCode", href: "https://leetcode.com/u/saiteja43/" },
];

export default function Home({ scrollTo }) {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "80px 2rem 2rem",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <div
        className="hero-grid"
        style={{ display: "flex", gap: "4rem", alignItems: "center", width: "100%", flexWrap: "wrap" }}
      >
        <div style={{ flex: 1, minWidth: 280 }}>
          <span className="section-tag">Available for opportunities</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
            Hi, I'm <span style={{ color: COLORS.accent }}>Menda Saiteja</span>
          </h1>
          <p style={{ fontSize: 16, color: COLORS.muted, marginBottom: 8 }}>
            Full Stack Developer · DSA Enthusiast · LeetCode Knight
          </p>
          <p style={{ fontSize: 14, color: COLORS.muted, lineHeight: 1.8, maxWidth: 460, marginBottom: 28 }}>
            I build apps that scale cleanly and solve real problems. Always shipping, always learning.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 }}>
            <button className="btn-primary" onClick={() => scrollTo("contact")}>Get in touch</button>
            <a href="/238R1A05P4_MENDASAITEJA.pdf" download>
              <button className="btn-outline">Download Resume</button>
            </a>
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {SOCIALS.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex", alignItems: "center",
                  fontSize: 12, color: COLORS.muted,
                  padding: "6px 14px",
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 999,
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.accent; e.currentTarget.style.color = COLORS.accent; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.color = COLORS.muted; }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 280, display: "flex", justifyContent: "center" }}>
          <CodeAnimation />
        </div>
      </div>
    </section>
  );
}