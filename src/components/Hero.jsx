import Logo from "./Logo";
import PageNav from "./PageNav";
import useScroll from "../hooks/useScroll";

function Hero() {
  const isScrolledDown = useScroll();

  return (
    <div className="hero vh-100" id="hero">
      <div className="d-flex justify-content-between align-items-center ">
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
