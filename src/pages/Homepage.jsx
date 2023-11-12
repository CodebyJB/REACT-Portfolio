import { useEffect, useState } from "react";

import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import ProjectList from "../components/ProjectList";
import TechSkills from "../components/TechSkills";
import BurgerMenu from "../components/BurgerMenu";
import StartPage from "../components/StartPage";

function Homepage() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`fade-out ${visible ? "" : "fade-in"}`}>
      {visible ? (
        <StartPage />
      ) : (
        <>
          <BurgerMenu />
          <Hero />
          <TechSkills />
          <ProjectList />
          <About />
          <Contact />
        </>
      )}
    </div>
  );
}

export default Homepage;
