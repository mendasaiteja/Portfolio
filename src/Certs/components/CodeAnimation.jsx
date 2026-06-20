import { useState, useEffect } from "react";
import { COLORS } from "../../constants.js";

const CODE_LINES = [
  'const saiteja = {',
  '  name: "Menda Saiteja",',
  '  role: "Full Stack Developer",',
  '  passion: "DSA & Clean Code",',
  '  rank: "LeetCode Knight",',
  '  stacks: ["MERN", "Java", "MySQL"],',
  '  alwaysLearning: true,',
  '};',
  '',
  'function buildSomethingCool() {',
  '  return saiteja.passion',
  '    .split("")',
  '    .map(c => c.toUpperCase())',
  '    .join("✦");',
  '}',
];

const colorize = (txt) => {
  if (!txt) return <span style={{ color: COLORS.muted }}>&nbsp;</span>;
  return txt
    .split(/(\bconst\b|\bfunction\b|\breturn\b|\btrue\b|\bfalse\b|"[^"]*"|'[^']*'|\d+\.\d+|\d+)/g)
    .map((part, i) => {
      if (/^(const|function|return|true|false)$/.test(part))
        return <span key={i} style={{ color: COLORS.purple }}>{part}</span>;
      if (/^["']/.test(part))
        return <span key={i} style={{ color: COLORS.green }}>{part}</span>;
      if (/^\d/.test(part))
        return <span key={i} style={{ color: COLORS.amber }}>{part}</span>;
      return <span key={i} style={{ color: COLORS.text }}>{part}</span>;
    });
};

export default function CodeAnimation() {
  const [lines, setLines]     = useState([]);
  const [curLine, setCurLine] = useState(0);
  const [curChar, setCurChar] = useState(0);
  const [cursor, setCursor]   = useState(true);

  useEffect(() => {
    const blink = setInterval(() => setCursor(c => !c), 530);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    if (curLine >= CODE_LINES.length) {
      const t = setTimeout(() => { setLines([]); setCurLine(0); setCurChar(0); }, 3000);
      return () => clearTimeout(t);
    }
    const line = CODE_LINES[curLine];
    if (curChar < line.length) {
      const t = setTimeout(() => setCurChar(c => c + 1), 28);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLines(prev => [...prev, line]);
      setCurLine(l => l + 1);
      setCurChar(0);
    }, 60);
    return () => clearTimeout(t);
  }, [curLine, curChar]);

  const partial = curLine < CODE_LINES.length ? CODE_LINES[curLine].slice(0, curChar) : "";

  return (
    <div style={{
      background: "#080e18",
      border: `1px solid ${COLORS.border}`,
      borderRadius: 12,
      padding: "1.5rem",
      fontFamily: "monospace",
      fontSize: 13,
      lineHeight: 1.7,
      minHeight: 320,
      width: "100%",
      maxWidth: 480,
      boxSizing: "border-box",
      overflow: "hidden",
    }}>
      <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
        {["#ff5f57", "#ffbd2e", "#28c840"].map((c, i) => (
          <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
        ))}
        <span style={{ color: COLORS.muted, fontSize: 11, marginLeft: 8 }}>saiteja.js</span>
      </div>

      {lines.map((l, i) => (
        <div key={i} style={{ display: "flex", gap: 12 }}>
          <span style={{ color: COLORS.dim, minWidth: 20, textAlign: "right", userSelect: "none" }}>{i + 1}</span>
          <span>{colorize(l)}</span>
        </div>
      ))}

      {curLine < CODE_LINES.length && (
        <div style={{ display: "flex", gap: 12 }}>
          <span style={{ color: COLORS.dim, minWidth: 20, textAlign: "right", userSelect: "none" }}>{lines.length + 1}</span>
          <span>
            {colorize(partial)}
            <span style={{ opacity: cursor ? 1 : 0, color: COLORS.accent, fontWeight: 700 }}>▌</span>
          </span>
        </div>
      )}
    </div>
  );
}