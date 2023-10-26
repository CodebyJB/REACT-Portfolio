import { useNavigate, useParams } from "react-router-dom";
import projects from "../data/projects.json";
import BackButton from "../components/BackButton";
import skillIcons from "../data/skillIcons.json";
import SkillItem from "../components/SkillItem";

function Project() {
  const { projectTitle } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.title === projectTitle);

  const icons = skillIcons.filter((icon) => project.tool.includes(icon.name));
  console.log(icons);
  console.log(project.tool);

  if (!project) {
    navigate("*");
    return null;
  }

  return (
    <div className="d-flex">
      <figure>
        <img src={project.image} alt={project.alt} />
      </figure>
      <section>
        <p>{project.category}</p>
        <h3>{project.title}</h3>
        <div>
          {icons.map((skill) => (
            <i className={skill.icon} key={skill.name}></i>
          ))}
        </div>
        {/* <div>{project.tool}</div> */}
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
