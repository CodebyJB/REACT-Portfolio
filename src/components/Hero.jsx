import Logo from "./Logo";
import PageNav from "./PageNav";

import useScroll from "../hooks/useScroll";

function Hero() {
  const isScrolledDown = useScroll();

  return (
    <div className="hero vh-100 overflow-hidden position-relative" id="hero">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <figure className="position-absolute bottom-0 start-50 translate-middle-x m-0">
        <img src="../../public/images/heroImg.png" alt="HeroImage" />
      </figure>
      <div className="d-flex justify-content-between align-items-center">
        <Logo />
        {isScrolledDown ? "" : <PageNav />}
        <div className="d-block d-md-none"></div>
      </div>
      <h1 className={isScrolledDown ? "scroll-up" : "scroll-down"}>
        - Jennifer Braunbarth -
      </h1>
      <p>
        Frontend <br /> Developer
      </p>
    </div>
  );
}

export default Hero;
