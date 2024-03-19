import AboutItem from "./AboutItem";

// import AOS from "aos";
// import "aos/dist/aos.css";

import aboutQualities from "../data/aboutQualities.json";
// import { useEffect } from "react";

function About() {
  // useEffect(() => {
  //   AOS.init({ duration: 1000, once: false, disable: "mobile" });
  // }, []);

  return (
    <div className="container-sm container-md m-auto my-5" id="about">
      <div className="border-bottom pt-5">
        <h2 className="fs-1">Der Mensch hinter dem Code</h2>
      </div>
      <p className="pt-5">
        Mit einer tiefen Leidenschaft für kreative Technologielösungen strebe
        ich danach, nicht nur Code zu schreiben, sondern Erlebnisse zu schaffen.
        Die Faszination für die Schnittstelle von Design und Funktion treibt
        mich an, innovative Lösungen zu gestalten. In meiner Freizeit finde ich
        Inspiration in der Kunst, Natur und neuen Herausforderungen, die mein
        Denken erweitern.
      </p>
      <ul className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mx-auto p-0">
        {aboutQualities.map((quality) => (
          <AboutItem quality={quality} key={quality.title} />
        ))}
      </ul>
    </div>
  );
}

export default About;
