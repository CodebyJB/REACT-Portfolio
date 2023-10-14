function Project({ project }) {
  const { image, alt, title, category, tool, codeLink, demoLink, description } =
    project;

  return (
    <div>
      Project
      <li>
        <figure>
          <img src={image} alt={alt} />
        </figure>
        <section>
          <p>{category}</p>
          <h3>{title}</h3>
          <div>{tool}</div>
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-code"></i> Code
          </a>
          |
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-laptop"></i> Demo
          </a>
          <p>{description}</p>
        </section>
      </li>
    </div>
  );
}

export default Project;
