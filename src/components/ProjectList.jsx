import ProjectItem from "./ProjectItem";
import projects from "../data/projects.json";

function ProjectList() {
  return (
    <ul className="vh-100" id="projects">
      ProjectList
      {projects.map((project) => (
        <ProjectItem project={project} key={project.id} />
      ))}
    </ul>
  );
}

export default ProjectList;
