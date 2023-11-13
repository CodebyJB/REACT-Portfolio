import { Link } from "react-router-dom";

function ProjectItem({ project }) {
  const { imageFull, alt, title, category, id } = project;
  const offset = parseInt(id.split("p")[1], 10);

  return (
    <li
      className={`list-unstyled projectitem m-auto py-3 ${id}`}
      data-aos="fade-up"
      data-aos-offset={offset}
    >
      <Link to={`/projects/${title}`}>
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          <figure className="wrapper_img position-relative">
            <img src={imageFull} alt={alt} className="full_img" />
          </figure>
          <div className="title_block">
            <h3>{title}</h3>
            <p>{category}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ProjectItem;
