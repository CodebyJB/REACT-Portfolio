import { useState } from "react";

import { elastic as Menu } from "react-burger-menu";
import { Slant as Hamburger } from "hamburger-react";

import { scrollToSection } from "../utils/scrollToSection";

function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="burger-menu text-end">
      <Menu
        right
        isOpen={isMenuOpen}
        onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}
        customBurgerIcon={<Hamburger toggled={isMenuOpen} />}
      >
        <ul className="list-unstyled">
          <li
            onClick={() => {
              scrollToSection("hero");
            }}
            className="menu-item"
            role="button"
          >
            <span>Home</span>
          </li>
          <li
            onClick={() => {
              scrollToSection("projects");
            }}
            className="menu-item"
            role="button"
          >
            <span>Meine Projekte</span>
          </li>
          <li
            onClick={() => {
              scrollToSection("about");
            }}
            className="menu-item"
            role="button"
          >
            <span>Über mich</span>
          </li>
          <li
            onClick={() => {
              scrollToSection("contact");
            }}
            className="menu-item"
            role="button"
          >
            <span>Komm in Kontakt!</span>
          </li>
        </ul>
      </Menu>
    </div>
  );
}

export default BurgerMenu;
