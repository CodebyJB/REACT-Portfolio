import { useNavigate, useParams } from "react-router-dom";
import projects from "../data/projects.json";
import BackButton from "../components/BackButton";
import skillIcons from "../data/skillIcons.json";

function Project() {
  const { projectTitle } = useParams();
  const navigate = useNavigate();

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
        className={`${project.id} project col-11 col-md-5 py-5 mt-1`}
        data-aos="zoom-in"
      >
        <img
          src={project.image}
          alt={project.alt}
          className="p-3 my-5 img-fluid d-flex justify-content-center align-items-center"
        />
      </figure>
      <section className="col-11 col-md-5">
        <p>{project.category}</p>
        <h3 className="mb-5 pt-3 border-bottom">{project.title}</h3>
        <div className="d-flex justify-content-between">
          <div className="icons d-flex gap-2 align-items-center mb-4">
            {renderedIcons}
          </div>
          <div>
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="me-2 project-links"
            >
              <i className="fa-solid fa-code"></i> Code
            </a>
            |
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ms-3 project-links"
            >
              <i className="fa-solid fa-laptop"></i> Demo
            </a>
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
