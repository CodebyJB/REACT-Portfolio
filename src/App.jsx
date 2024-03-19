import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Homepage from "./pages/Homepage";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Project from "./pages/Project";
import PageNotFound from "./pages/PageNotFound";
import AnimatedCursor from "react-animated-cursor";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false, disable: "mobile" });
  }, []);

  return (
    <div>
      <AnimatedCursor
        color="156, 39, 176"
        innerSize={8}
        outerSize={15}
        outerAlpha={0.4}
        innerScale={1}
        outerScale={5}
      />
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/dsvgo" element={<Datenschutz />} />
            <Route path="/projects/:projectTitle" element={<Project />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
