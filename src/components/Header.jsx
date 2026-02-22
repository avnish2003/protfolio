import "./Header.css";
import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="container">

        <nav className="nav">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          {/* <a href="#internship">Internship</a> */}
          <a href="#contact">Contact Us</a>
        </nav>

        <div className="right-section">

          <div className="status">
            <span className="dot"></span>
            Available to Work
          </div>

          <a href="/resume.pdf" className="resume-btn" download>
            <FaDownload /> Resume
          </a>

          <div className="socials">
            <a href="#" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;