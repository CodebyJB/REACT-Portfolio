import { Link } from "react-router-dom";

function ProjectItem({ project }) {
  const { image, alt, title, category } = project;

  return (
    <li className="list-unstyled m-2 container-fluid">
      <Link to={`/projects/${title}`}>
        <figure className="p-3 m-auto">
          <img src={image} alt={alt} />
        </figure>
        <div className="d-none">
          <h3>{title}</h3>
          <p>{category}</p>
        </div>
      </Link>
    </li>
  );
}

export default ProjectItem;
