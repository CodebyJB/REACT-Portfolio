import { Link } from "react-router-dom";

function ProjectItem({ project }) {
  const { image, alt, title } = project;

  return (
    <li>
      <Link to={`/project:${title}`}>
        ProjectItem
        <figure>
          <img src={image} alt={alt} />
        </figure>
        <h3>{title}</h3>
      </Link>
    </li>
  );
}

export default ProjectItem;
