import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import ProjectList from "../components/ProjectList";
import TechSkills from "../components/TechSkills";

function Homepage() {
  return (
    <div>
      <Hero />
      <TechSkills />
      <ProjectList />
      <About />
      <Contact />
    </div>
  );
}

export default Homepage;
