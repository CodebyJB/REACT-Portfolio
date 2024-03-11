// import { useEffect } from "react";

import ProjectItem from "./ProjectItem";

// import AOS from "aos";
// import "aos/dist/aos.css";

import projects from "../data/projects.json";

function ProjectList() {
  // useEffect(() => {
  //   AOS.init({ duration: 1000, once: false, disable: "mobile" });
  // }, []);

  return (
    <div className="projectlist py-5 dvh-100" id="projects">
      <div className="d-flex justify-content-between">
        <h2 className="p-4 mb-5">Meine Projekte</h2>
      </div>
      <ul className="d-flex flex-column flex-lg-row px-2 gap-2 mx-auto">
        {projects.map((project) => (
          <ProjectItem project={project} key={project.id} />
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
