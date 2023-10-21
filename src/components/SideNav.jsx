import { scrollToSection } from "../utils/scrollToSection";

function SideNav() {
  return (
    <div>
      SideNav
      <nav>
        <ul>
          <li
            onClick={() => {
              scrollToSection("hero");
            }}
          >
            Home
          </li>
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
            Get in touch!{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;
