import ProjectItem from "./ProjectItem";
import projects from "../data/projects.json";

function ProjectList() {
  return (
    <div className="projectlist vh-100" id="projects">
      <h2>My Projects</h2>
      <ul className="px-0 d-flex flex-column flex-md-row justify-content-center">
        {projects.map((project) => (
          <ProjectItem project={project} key={project.id} />
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
