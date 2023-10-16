import Logo from "./Logo";
import { scrollToSection } from "../utils/scrollToSection";

function PageNav() {
  return (
    <nav>
      PageNav
      <Logo />
      <ul>
        <li
          onClick={() => {
            scrollToSection("projects");
          }}
        >
          My Projects
        </li>
        <li
          onClick={() => {
            scrollToSection("about");
          }}
        >
          About me
        </li>
        <li
          onClick={() => {
            scrollToSection("contact");
          }}
        >
          Get in touch!
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
