import ProjectItem from "./ProjectItem";
import projects from "../data/projects.json";

function ProjectList() {
  return (
    <ul className="vh-100" id="projects">
      {projects.map((project) => (
        <ProjectItem project={project} key={project.id} />
      ))}
      <li>
        <figure>
          <img src="" alt="" />
        </figure>
        <h3>Coming soon!</h3>
      </li>
    </ul>
  );
}

export default ProjectList;
