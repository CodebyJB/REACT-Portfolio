import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function PageNav() {
  const navigate = useNavigate();

  return (
    <div>
      PageNav
      <Logo />
      <button
        onClick={() => {
          navigate("/projects");
          scrollToSection("projects");
        }}
      >
        My Projects
      </button>
      <button
        onClick={() => {
          navigate("/about");
          scrollToSection("about");
        }}
      >
        About me
      </button>
      <button
        onClick={() => {
          navigate("/contact");
          scrollToSection("contact");
        }}
      >
        Get in touch!
      </button>
    </div>
  );
}

export default PageNav;
