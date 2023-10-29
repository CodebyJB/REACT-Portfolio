import Logo from "./Logo";
import { scrollToSection } from "../utils/scrollToSection";

function PageNav() {
  return (
    <nav className="pagenav d-flex justify-content-between ">
      <Logo />
      <ul className="d-flex gap-5 px-3 align-items-center list-unstyled">
        <li
          onClick={() => {
            scrollToSection("projects");
          }}
          className=" "
        >
          Meine Projekte
        </li>
        <li
          onClick={() => {
            scrollToSection("about");
          }}
          className=""
        >
          Über mich
        </li>
        <li
          onClick={() => {
            scrollToSection("contact");
          }}
          className=""
        >
          Komm in Kontakt!
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
