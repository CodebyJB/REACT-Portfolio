import { Link } from "react-router-dom";
import Logo from "./Logo";
import SideNav from "./SideNav";

function Contact() {
  return (
    <div className="vh-100" id="contact">
      Contact
      <SideNav />
      <Logo />
      <h2>Get in touch!</h2>
      <img src="#" alt="img" />
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github"></i> Github
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-xing"></i> XING
      </a>
      <Link to={"/impressum"}>Impressum</Link>
      <Link to={"/dsvgo"}>Datenschutz</Link>
      <p>
        <i className="fa-regular fa-copyright"></i> Copyright 2023
      </p>
      <p>
        Made with <i className="fa-solid fa-heart"></i>
      </p>
    </div>
  );
}

export default Contact;
