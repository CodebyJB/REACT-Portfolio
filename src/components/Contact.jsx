import { Link } from "react-router-dom";

import Logo from "./Logo";

import useScroll from "../hooks/useScroll";

function Contact() {
  const isScrolledDown = useScroll();
  const tiltStyle = {
    transform: isScrolledDown
      ? "perspective(1000px) rotateY(15deg)"
      : "perspective(1000px) rotateY(0deg)",
  };

  return (
    <div className="contact min-vh-100 z-1" id="contact">
      <Logo />
      <div className="d-flex flex-column flex-sm-row justify-content-center ">
        <div>
          <img
            src="images/titleImg.png"
            alt="img"
            className={`contact_img mx-auto mb-5 z-0 
            `}
            style={tiltStyle}
          />
        </div>
        <div className="d-flex flex-column justify-content-center text-center text-sm-end me-3">
          <h2 className="my-5">Komm in Kontakt!</h2>
          <div className="d-flex flex-column gap-2">
            <span>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i> Github
              </a>
            </span>
            <span>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-xing"></i> XING
              </a>
            </span>
            <span>
              <Link to={"/impressum"}>Impressum</Link>
            </span>
            <span>
              <Link to={"/dsvgo"}>Datenschutz</Link>
            </span>
          </div>
          <p className="mb-0 pt-5">
            <i className="fa-regular fa-copyright"></i> Copyright 2023
          </p>
          <p className="mb-5">
            Made with <i className="fa-solid fa-heart"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
