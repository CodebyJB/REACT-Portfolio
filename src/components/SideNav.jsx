import { scrollToSection } from "../utils/scrollToSection";

function SideNav() {
  return (
    <div>
      SideNav
      <nav className="sidenav">
        <ul className="d-flex flex-column">
          <li
            onClick={() => {
              scrollToSection("hero");
            }}
            className="menu-item"
          >
            Home
          </li>
          <li
            onClick={() => {
              scrollToSection("projects");
            }}
            className="menu-item"
          >
            Meine Projekte
          </li>
          <li
            onClick={() => {
              scrollToSection("about");
            }}
            className="menu-item"
          >
            Über mich
          </li>
          <li
            onClick={() => {
              scrollToSection("contact");
            }}
            className="menu-item"
          >
            Komm in Kontakt!
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;
