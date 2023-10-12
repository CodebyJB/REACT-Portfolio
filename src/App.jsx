import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Homepage from "./pages/Homepage";
import About from "./components/About";
import Contact from "./components/Contact";
import ProjectList from "./components/ProjectList";
import Project from "./pages/Project";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route path="projects" element={<ProjectList />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
