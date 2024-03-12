import { scrollToSection } from "../utils/scrollToSection";

function PageNav() {
  return (
    <nav className="pagenav">
      <ul className="d-lg-flex gap-5 px-3 align-items-center list-unstyled d-none">
        <li
          onClick={() => {
            scrollToSection("projects");
          }}
        >
          <a>Meine Projekte</a>
        </li>
        <li
          onClick={() => {
            scrollToSection("about");
          }}
        >
          <a>Über mich</a>
        </li>
        <li
          onClick={() => {
            scrollToSection("contact");
          }}
        >
          <a>Komm in Kontakt!</a>
        </li>
        <div className="placeholder"></div>
      </ul>
    </nav>
  );
}

export default PageNav;
