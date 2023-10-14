import ProjectItem from "./ProjectItem";
import projects from "../data/projects.json";

function ProjectList() {
  return (
    <div className="vh-100" id="projects">
      ProjectList
      <ul>
        {projects.map((project) => (
          <ProjectItem project={project} key={project.title} />
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
