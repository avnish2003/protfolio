import "./Header.css";
import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";
import resumePDF from "../assets/AvnishCV (10) - Copy.pdf";
import { useState } from "react";
import ContactPopup from "../components/ContactPopup";

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container">

          <nav className="nav">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>

            <a
              href="#!"
              onClick={(e) => {
                e.preventDefault();
                setIsPopupOpen(true);
              }}
            >
              Contact Us
            </a>
          </nav>

          <div className="right-section">
            <div className="status">
              <span className="dot"></span>
              Available to Work
            </div>

            <a href={resumePDF} className="resume-btn" download>
              <FaDownload /> Resume
            </a>

            <div className="socials">
              <a
                href="https://www.linkedin.com/in/avnish-h-79059a2b7"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/avnish2003"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>

        </div>
      </header>

      {/* ✅ OUTSIDE HEADER — VERY IMPORTANT */}
      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
};

export default Header;