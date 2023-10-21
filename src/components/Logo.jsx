import { scrollToSection } from "../utils/scrollToSection";

function Logo() {
  return (
    <figure
      onClick={() => {
        scrollToSection("hero");
      }}
    >
      Logo
      <img src="../img/Logo.png" alt="Logo" />
    </figure>
  );
}

export default Logo;
