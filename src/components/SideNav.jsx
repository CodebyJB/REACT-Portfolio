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
            Meine Projekte
          </li>
          <li
            onClick={() => {
              scrollToSection("about");
            }}
          >
            Über mich
          </li>
          <li
            onClick={() => {
              scrollToSection("contact");
            }}
          >
            Komm in Kontakt!
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;
