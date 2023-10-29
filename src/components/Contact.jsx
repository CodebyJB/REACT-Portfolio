import { Link } from "react-router-dom";
import Logo from "./Logo";
// import SideNav from "./SideNav";

function Contact() {
  return (
    <div className="contact min-vh-100 z-1" id="contact">
      <Logo />
      <div className="d-flex flex-column flex-sm-row justify-content-center ">
        {/* <SideNav /> */}
        <div className="">
          <img
            src="images/titleImg.png"
            alt="img"
            className="contact_img mx-auto z-0"
          />
        </div>
        <div className="d-flex flex-column justify-content-center text-center text-sm-end me-3">
          <h2 className="my-5">Komm in Kontakt!</h2>
          <div className="d-flex flex-column gap-2">
            <span>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <i className="fa-brands fa-github"></i> Github
              </a>
            </span>
            <span>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <i className="fa-brands fa-xing"></i> XING
              </a>
            </span>
            <span>
              <Link to={"/impressum"} className="text-decoration-none">
                Impressum
              </Link>
            </span>
            <span>
              <Link to={"/dsvgo"} className="text-decoration-none">
                Datenschutz
              </Link>
            </span>
          </div>
          <p className="mb-0 pt-5">
            <i className="fa-regular fa-copyright"></i> Copyright 2023
          </p>
          <p className="mb-0">
            Made with <i className="fa-solid fa-heart"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
