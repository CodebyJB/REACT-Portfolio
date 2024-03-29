import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import BackButton from "../components/BackButton";

import AOS from "aos";
import "aos/dist/aos.css";

import projects from "../data/projects.json";
import skillIcons from "../data/skillIcons.json";

function Project() {
  const { projectTitle } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, disable: "mobile" });
  }, []);

  const project = projects.find((p) => p.title === projectTitle);

  const icons = skillIcons.filter((icon) => project.tool.includes(icon.name));

  const renderedIcons = icons.map((skill) => (
    <div key={skill.name}>
      {skill.icon.endsWith("svg") ? (
        <img src={skill.icon} alt={skill.name} />
      ) : (
        <i className={skill.icon}></i>
      )}
    </div>
  ));

  if (!project) {
    navigate("*");
    return null;
  }

  return (
    <div className="d-flex justify-content-center align-items-center gap-5 flex-column flex-md-row min-vh-100">
      <figure
        className={`${project.id} project m-2 rounded`}
        data-aos="zoom-in"
      >
        <img
          src={project.image}
          alt={project.alt}
          className="p-3 my-5 d-flex justify-content-center align-items-center"
        />
      </figure>
      <section className="col-11 col-md-5">
        <p>{project.category}</p>
        <h3 className="mb-5 pt-3 border-bottom">{project.title}</h3>
        <div className="d-flex justify-content-between mb-4 flex-wrap">
          <div className="icons d-flex gap-3 align-items-center flex-wrap">
            {renderedIcons}
          </div>
          <div className="d-flex flex-wrap">
            <span>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-links position-relative me-4"
              >
                <i className="fa-solid fa-code"></i> Code
              </a>
            </span>
            <span>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-links position-relative"
              >
                <i className="fa-solid fa-laptop"></i> Demo
              </a>
            </span>
          </div>
        </div>

        <p className="text-justify">{project.description}</p>
        <div className="pt-2">
          <BackButton />
        </div>
      </section>
    </div>
  );
}

export default Project;
