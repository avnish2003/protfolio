import { useState, useEffect } from "react";
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

  // CLOSE POPUP ON SCROLL
  useEffect(() => {

    const handleScroll = () => {
      if(open){
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, [open]);

  const allSkills = [
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "NodeJS" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <SiC />, name: "C" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaWordpress />, name: "WordPress" },
    { icon: <SiExpress />, name: "ExpressJS" },
    { icon: <SiLinux />, name: "Linux" },
    { icon: <SiReactrouter />, name: "React Router" },
    { icon: <SiElementor />, name: "Elementor" },
    { icon: <SiHostinger />, name: "Hostinger" },
    { icon: <SiCanva />, name: "Canva" },
    { icon: <SiAdobephotoshop />, name: "Photoshop" }
  ];

  return (
    <section className="skills-section">

      <h2>Technologies I Work With</h2>

      <div className="main-grid">
        {allSkills.slice(0,8).map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>

      <button className="blink-btn" onClick={() => setOpen(true)}>
        See Complete Skillset
      </button>

      {open && (
        <div className="overlay" onClick={() => setOpen(false)}>

          <div className="popup" onClick={(e)=>e.stopPropagation()}>

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