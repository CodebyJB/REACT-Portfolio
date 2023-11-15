function AboutItem({ quality }) {
  const { icon, title, description } = quality;
  return (
    <li
      className="aboutitem list-unstyled col p-3 p-sm-5 text-center"
      data-aos="fade-up"
    >
      <a>
        <i className={`fs-2 py-3 ${icon}`}></i>
        <p className="fs-5 py-1 py-sm-3 text-uppercase fw-bold text-break">
          {title}
        </p>
        <p>{description}</p>
      </a>
    </li>
  );
}

export default AboutItem;
