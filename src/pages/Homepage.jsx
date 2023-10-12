import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import ProjectList from "../components/ProjectList";
import StartPage from "../components/StartPage";
import TechSkills from "../components/TechSkills";

function Homepage() {
  return (
    <div>
      Homepage
      <StartPage />
      <Hero />
      <TechSkills />
      <ProjectList />
      <About />
      <Contact />
    </div>
  );
}

export default Homepage;
