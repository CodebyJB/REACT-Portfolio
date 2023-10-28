import ProjectItem from "./ProjectItem";
import projects from "../data/projects.json";

function ProjectList() {
  return (
    <div className="projectlist py-5" id="projects">
      <h2>My Projects</h2>
      <ul className="d-flex flex-column flex-md-row px-0 gap-2 mx-auto">
        {projects.map((project) => (
          <ProjectItem project={project} key={project.id} />
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
