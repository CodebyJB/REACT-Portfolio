import { useNavigate, useParams } from "react-router-dom";
import projects from "../data/projects.json";
import BackButton from "../components/BackButton";
import skillIcons from "../data/skillIcons.json";
import ProjectItem from "../components/ProjectItem";

function Project() {
  const { projectTitle } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.title === projectTitle);

  const icons = skillIcons.filter((icon) => project.tool.includes(icon.name));
  console.log(icons);
  console.log(project.tool);

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
    <div className="d-flex justify-content-center">
      <div className={`${project.id} project`}>
        <ProjectItem project={project} />
      </div>
      <section>
        <p>{project.category}</p>
        <h3>{project.title}</h3>
        <div>{renderedIcons}</div>
        <p>{project.description}</p>
        <a
          href={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none me-2"
        >
          <i className="fa-solid fa-code"></i> Code
        </a>
        |
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none ms-3"
        >
          <i className="fa-solid fa-laptop"></i> Demo
        </a>
        <div>
          <BackButton />
        </div>
      </section>
    </div>
  );
}

export default Project;
