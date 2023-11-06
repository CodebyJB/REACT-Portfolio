// import { useEffect, useState } from "react";

import Logo from "./Logo";
import PageNav from "./PageNav";
// import StartPage from "./StartPage";

function Hero() {
  // const [visible, setVisible] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setVisible(false);
  //   }, 5000);

  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <div className="hero vh-100" id="hero">
      {/* {visible && <StartPage visible={visible} />} */}
      <div className="d-flex justify-content-between align-items-center ">
        <Logo />
        <PageNav />
        <div className="d-block d-md-none">
        </div>
      </div>
      <h1>- Jennifer Braunbarth -</h1>
      <p>
        Frontend <br /> Developer
      </p>
    </div>
  );
}

export default Hero;
