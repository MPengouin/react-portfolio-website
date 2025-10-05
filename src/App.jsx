import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Projects  from "./pages/Projects";
import Lobby from "./components/Lobby";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import "./components/Lobby.css"
import "./pages/About.css"
import './fonts.css'

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Lobby />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
      </div>
  );
}

export default App;
