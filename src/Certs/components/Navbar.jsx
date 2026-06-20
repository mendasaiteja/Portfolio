import { useState, useEffect } from "react";
import { COLORS, NAV_LINKS } from "../../constants.js";
import "./Navbar.css";

export default function Navbar({ scrollTo }) {
  const [activeSection, setActiveSection] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActiveSection(e.target.dataset.section);
          }
        });
      },
      { threshold: 0.4 }
    );

    NAV_LINKS.forEach((s) => {
      const el = document.getElementById(s.toLowerCase());
      if (el) {
        el.dataset.section = s;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleNav = (link) => {
    scrollTo(link.toLowerCase());
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => handleNav("Home")}>
        <span className="glow-dot"></span>
        <span>
          Saiteja<span style={{ color: COLORS.accent }}>.</span>
        </span>
      </div>

      <div className="desktop-nav">
        {NAV_LINKS.map((l) => (
          <span
            key={l}
            className={`nav-link ${
              activeSection === l ? "active" : ""
            }`}
            onClick={() => handleNav(l)}
          >
            {l}
          </span>
        ))}
      </div>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <span
            key={l}
            className="nav-link"
            onClick={() => handleNav(l)}
          >
            {l}
          </span>
        ))}
      </div>
    </nav>
  );
}