import { useNavigate, useParams } from "react-router-dom";
import projects from "../data/projects.json";
import BackButton from "../components/BackButton";

function Project() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    navigate("*");
    return null;
  }

  return (
    <div>
      <figure>
        <img src={project.image} alt={project.alt} />
      </figure>
      <section>
        <p>{project.category}</p>
        <h3>{project.title}</h3>
        <div>{project.tool}</div>
        <p>{project.description}</p>
        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-code"></i> Code
        </a>
        |
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-laptop"></i> Demo
        </a>
        <BackButton />
      </section>
    </div>
  );
}

export default Project;
