import { COLORS, CERTS } from "../constants";

export default function Certificates() {
  return (
    <section id="certs" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <span className="section-tag">What I've earned</span>
        <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, marginBottom: 40 }}>Certifications</h2>

        <div
          className="certs-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
        >
          {CERTS.map((c, i) => (
            <a key={i} href={c.link} target="_blank" rel="noreferrer">
              <div
                className="cert-card"
                style={{
                  background: COLORS.surfaceAlt,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 12,
                  padding: "20px 18px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: COLORS.text, lineHeight: 1.4 }}>{c.title}</p>
                  <p style={{ fontSize: 11, color: COLORS.muted, marginTop: 2 }}>{c.issuer}</p>
                </div>
                <span style={{ fontSize: 11, color: COLORS.accent, whiteSpace: "nowrap", marginLeft: 12 }}>
                  View ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}