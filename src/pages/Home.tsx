import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Work from "../components/Work";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#FEF8F0", minHeight: "100svh" }}>
      <Nav />
      <Hero />
      <Work />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}
