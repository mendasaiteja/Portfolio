import { COLORS } from "../constants";
import Navbar       from "../Certs/components/Navbar.jsx";
import Home         from "./Home.jsx";
import About        from "./About.jsx";
import Skills       from "./Skills.jsx";
import Projects     from "./Projects.jsx";
import Certificates from "./Certificates.jsx";
import Contact      from "./Contact.jsx";

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function App() {
  return (
    <div style={{ background: COLORS.bg, color: COLORS.text, minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar scrollTo={scrollTo} />
      <Home   scrollTo={scrollTo} />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}