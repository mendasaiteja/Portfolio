import { useState } from "react";
import { COLORS } from "../constants.js";
import emailjs from "emailjs-com";

const CONTACT_LINKS = [
  {
    label: "238r1a05p4.msaiteja@gmail.com",
    href: "mailto:238r1a05p4.msaiteja@gmail.com",
  },
  {
    label: "+91 9676219362",
    href: "tel:+919676219362",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields.");
      return;
    }

    emailjs
      .send(
        "service_1r6baoi",
        "template_6eabrfe",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "ykDvfIgRJ2CTCz5Zo"
      )
      .then(() => {
        alert("Email sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send email. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      style={{
        padding: "6rem 2rem",
        background: COLORS.surface,
      }}
    >
      <div
        style={{
          maxWidth: 600,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <span className="section-tag">Say hello</span>

        <h2
          style={{
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            fontWeight: 700,
            marginBottom: 12,
          }}
        >
          Get In Touch
        </h2>

        <p
          style={{
            fontSize: 14,
            color: COLORS.muted,
            marginBottom: 36,
          }}
        >
          Have an opportunity or just want to chat? I'm always open to a
          conversation.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            textAlign: "left",
          }}
        >
          <input
            className="contact-input"
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            className="contact-input"
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            className="contact-input"
            placeholder="Your Message"
            name="message"
            rows={5}
            style={{ resize: "vertical" }}
            value={formData.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="btn-primary"
            style={{ alignSelf: "flex-end" }}
          >
            Send Message →
          </button>
        </form>

        <div
          style={{
            marginTop: 48,
            paddingTop: 32,
            borderTop: `1px solid ${COLORS.border}`,
            display: "flex",
            justifyContent: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: 12,
                color: COLORS.muted,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = COLORS.accent)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = COLORS.muted)
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        <p
          style={{
            fontSize: 11,
            color: COLORS.dim,
            marginTop: 24,
          }}
        >
          © {new Date().getFullYear()} Menda Saiteja · All rights reserved
        </p>
      </div>
    </section>
  );
}