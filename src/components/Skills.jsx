import { useState } from "react";
import "./Skills.css";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaWordpress
} from "react-icons/fa";

import {
  SiMongodb,
  SiTailwindcss,
  SiCplusplus,
  SiC,
  SiExpress,
  SiLinux,
  SiReactrouter,
  SiElementor,
  SiHostinger,
  SiCanva,
  SiAdobephotoshop
} from "react-icons/si";

const Skills = () => {
  const [open, setOpen] = useState(false);

  const mainSkills = [
    { icon: <FaReact color="#61DBFB" />, name: "React" },
    { icon: <FaNodeJs color="#3C873A" />, name: "NodeJS" },
    { icon: <SiMongodb color="#4DB33D" />, name: "MongoDB" },
    { icon: <FaJsSquare color="#F7DF1E" />, name: "JavaScript" },
    { icon: <SiTailwindcss color="#38BDF8" />, name: "Tailwind" },
    { icon: <SiCplusplus color="#00599C" />, name: "C++" },
  ];

  const allSkills = [
    { icon: <SiC color="#A8B9CC" />, name: "C" },
    { icon: <SiCplusplus color="#00599C" />, name: "C++" },
    { icon: <FaHtml5 color="#E34F26" />, name: "HTML" },
    { icon: <FaCss3Alt color="#264de4" />, name: "CSS" },
    { icon: <FaJsSquare color="#F7DF1E" />, name: "JavaScript" },
    { icon: <FaReact color="#61DBFB" />, name: "React" },
    { icon: <SiTailwindcss color="#38BDF8" />, name: "Tailwind" },
    { icon: <SiMongodb color="#4DB33D" />, name: "MongoDB" },
    { icon: <FaWordpress color="#21759B" />, name: "WordPress" },
    { icon: <FaNodeJs color="#3C873A" />, name: "NodeJS" },
    { icon: <SiExpress color="#FFFFFF" />, name: "ExpressJS" },
    { icon: <FaGithub color="#FFFFFF" />, name: "GitHub" },
    { icon: <SiLinux color="#FCC624" />, name: "Linux" },
    { icon: <SiReactrouter color="#CA4245" />, name: "React Router" },
    { icon: <SiElementor color="#92003B" />, name: "Elementor" },
    { icon: <SiHostinger color="#673DE6" />, name: "Hostinger" },
    { icon: <SiCanva color="#00C4CC" />, name: "Canva" },
    { icon: <SiAdobephotoshop color="#31A8FF" />, name: "Photoshop" },
  ];

  return (
    <section className="skills-section">
      <h2>My Tech Stack</h2>

      {/* 6 MAIN ICONS */}
      <div className="main-grid">
        {mainSkills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>

      {/* BLINKING BUTTON */}
      <button className="blink-btn" onClick={() => setOpen(true)}>
See Complete Skillset      </button>

      {/* PERFECT POPUP (unchanged structure) */}
      {open && (
        <div className="overlay" onClick={() => setOpen(false)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setOpen(false)}>✕</span>
            <h3>All Skills</h3>

            <div className="grid">
              {allSkills.map((skill, index) => (
                <div key={index} className="grid-item">
                  <div className="grid-icon">{skill.icon}</div>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;