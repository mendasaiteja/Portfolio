export const COLORS = {
  bg: "#050a12",
  surface: "#0b1220",
  surfaceAlt: "#0f1929",
  border: "#1a2a3a",
  accent: "#00d4ff",
  accentDim: "#0099bb",
  accentGlow: "rgba(0,212,255,0.12)",
  text: "#e2eaf4",
  muted: "#5a7a9a",
  dim: "#3a5a7a",
  green: "#00ff9d",
  purple: "#b06dff",
  amber: "#ffb347",
};

export const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Certs", "Contact"];

export const SKILLS = {
  Languages: ["Java", "JavaScript", "C", "Python"],
  Frontend: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  Databases: ["MySQL", "MongoDB"],
  Tools: ["Git", "GitHub", "JWT", "Cloudinary"],
  DSA: ["Data Structures", "Algorithms", "OOP"],
};

export const SKILL_COLORS = {
  Languages: { bg: "rgba(176,109,255,0.12)", border: "rgba(176,109,255,0.35)", text: "#c49aff" },
  Frontend:  { bg: "rgba(0,212,255,0.1)",    border: "rgba(0,212,255,0.3)",    text: "#62e4ff" },
  Backend:   { bg: "rgba(0,255,157,0.1)",    border: "rgba(0,255,157,0.3)",    text: "#4dffc6" },
  Databases: { bg: "rgba(255,179,71,0.1)",   border: "rgba(255,179,71,0.3)",   text: "#ffcc80" },
  Tools:     { bg: "rgba(255,90,90,0.1)",    border: "rgba(255,90,90,0.3)",    text: "#ff9090" },
  DSA:       { bg: "rgba(90,210,255,0.1)",   border: "rgba(90,210,255,0.3)",   text: "#90d4ff" },
};

export const PROJECTS = [
  {
    title: "StudyVault",
    subtitle: "MERN Stack · Full Stack",
    description:
      "A full-stack study material sharing platform where students upload, browse, and download academic files (PDFs, DOCX, PPT). Deployed on Render with Cloudinary for cloud file storage. Tested with 20+ users.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Cloudinary", "Mongoose"],
    link: "https://studyvault-flame.vercel.app/",
    accent: "#b06dff",
    highlight: "20+ real users",
  },
  {
    title: "Healthcare Prescription Reader",
    subtitle: "React · Gemini LLM · OCR",
    description:
      "Web app that lets users upload medical prescription images or text and receive simplified medication details, side effects, and guidance in real-time via Gemini LLM. Uses Tesseract.js for OCR image extraction.",
    stack: ["React.js", "Gemini LLM API", "Tesseract.js", "OCR", "CSS"],
    link: "https://github.com/mendasaiteja",
    accent: "#00ff9d",
    highlight: "< 2s response",
  },
  {
    title: "Hospital Management System",
    subtitle: "Java · MySQL · JDBC",
    description:
      "Console-based system in Java automating hospital workflows — patient registration, appointment scheduling, and doctor management. Modular class design with availability validation and a clean menu-driven interface.",
    stack: ["Java", "MySQL", "JDBC", "OOP", "Git"],
    link: "https://github.com/mendasaiteja",
    accent: "#ffb347",
    highlight: "Full CRUD",
  },
  {
    title: "Weather App",
    subtitle: "React · Material-UI",
    description:
      "Responsive weather application with real-time city search and a Dark/Light Mode toggle. Consistent theming powered by Material-UI.",
    stack: ["React.js", "Material-UI", "JavaScript", "CSS"],
    link: "https://tempvisitor.netlify.app/",
    accent: "#62e4ff",
    highlight: "Live demo ↗",
  },
  {
    title: "Handicraft Store",
    subtitle: "HTML · CSS · JavaScript",
    description:
      "Responsive product-gallery website showcasing handcrafted items, with interactive elements for a smooth browsing experience.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://mendasaiteja.github.io/Handicraft-Store/",
    accent: "#ffb347",
    highlight: "Live demo ↗",
  },
];

export const CERTS = [
  {
    title: "Java Fundamentals",
    issuer: "Infosys Springboard",
    link: "https://drive.google.com/file/d/1eL6gO3QjUCWW3Z2jBxBvjiKlnl3jAhA0/view",
  },
  {
    title: "Elite Java Certification",
    issuer: "NPTEL",
    link: "https://drive.google.com/file/d/1eL6gO3QjUCWW3Z2jBxBvjiKlnl3jAhA0/view",
  },
  {
    title: "Web Dev Fundamentals",
    issuer: "IBM",
    link: "https://www.credly.com/badges/25914fa6-71ec-4913-a345-1dfca91ca664/linked_in_profile",
  },
  {
    title: "JavaScript Essentials",
    issuer: "Cisco",
    link: "https://www.credly.com/badges/285369c7-d3eb-4857-b81d-242f215b2b15/linked_in_profile",
  },
  {
    title: "Java Programming",
    issuer: "GeeksforGeeks",
    link: "https://media.geeksforgeeks.org/courses/certificates/6c1e1c0734016af303a8e0d0a7a51299.pdf",
  },
  {
    title: "Neo Codeathon Merit",
    issuer: "Neo",
    link: "https://drive.google.com/file/d/1d-QvZJ4HUUnqNMio82v0UzHgK8ByT7wr/view?usp=drivesdk",
  },
];