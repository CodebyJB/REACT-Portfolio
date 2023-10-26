import { Link } from "react-router-dom";

function ProjectItem({ project }) {
  const { image, alt, title, category } = project;

  return (
    <li className="list-unstyled projectitem rounded m-auto">
      <Link to={`/projects/${title}`}>
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          <figure className="wrapper_img position-relative">
            <img src={image} alt={alt} className="img-fluid" />
          </figure>
          <div className="title_block position-absolute">
            <h3>{title}</h3>
            <p>{category}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ProjectItem;
