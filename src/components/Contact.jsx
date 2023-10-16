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
      <img src="" alt="img" />
      <a href="">Github</a>
      <a href="">XING</a>
      <Link to={"/impressum"}>Impressum</Link>
      <Link to={"/dsvgo"}>Datenschutz</Link>
      <p>Copyright 2023</p>
    </div>
  );
}

export default Contact;
