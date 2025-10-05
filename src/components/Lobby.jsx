import { Link } from "react-router-dom";
import "./Lobby.css";

export default function Lobby() {
  return (
    <div className="lobby-container">
      <h1 className="lobby-title">Logan Brignac</h1>
      <h2 className="lobby-subtitle">Computer Science Student at Louisiana Tech University</h2>
      <div className="lobby-circles">
        <Link to="/about" className="lobby-circle">
          <span>About</span>
        </Link>

        <Link to="/projects" className="lobby-circle">
          <span>Projects</span>
        </Link>

        <Link to="/contact" className="lobby-circle">
          <span>Contact</span>
        </Link>

        <Link to="/resume" className="lobby-circle">
          <span>Resume</span>
        </Link>

        <Link to="/skills" className="lobby-circle">
          <span>Skills</span>
        </Link>
      </div>
    </div>
  );
}
