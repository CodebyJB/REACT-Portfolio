import { scrollToSection } from "../utils/scrollToSection";

function PageNav() {
  return (
    <nav className="pagenav">
      <ul className="d-md-flex gap-5 px-3 align-items-center list-unstyled d-none">
        <li
          onClick={() => {
            scrollToSection("projects");
          }}
          role="button"
        >
          Meine Projekte
        </li>
        <li
          onClick={() => {
            scrollToSection("about");
          }}
          role="button"
        >
          Über mich
        </li>
        <li
          onClick={() => {
            scrollToSection("contact");
          }}
          role="button"
        >
          Komm in Kontakt!
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
