import { scrollToSection } from "../utils/scrollToSection";

function Logo() {
  return (
    <figure
      onClick={() => {
        scrollToSection("hero");
      }}
      role="button"
      className="logo"
    >
      <img
        src="images/Logo_transparentBg.png"
        alt="Logo"
        className="logo p-2"
      />
    </figure>
  );
}

export default Logo;
