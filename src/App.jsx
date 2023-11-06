import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Project from "./pages/Project";
import PageNotFound from "./pages/PageNotFound";
import BurgerMenu from "./components/BurgerMenu";

function App() {
  return (
    <div>
      <BurgerMenu />
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
