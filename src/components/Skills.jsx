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
  SiAdobephotoshop,
  SiPython
} from "react-icons/si";

const Skills = () => {

  const [open,setOpen] = useState(false);

  const skills = [

    {icon:<FaReact color="#61DBFB"/>, name:"React"},
    {icon:<FaNodeJs color="#3C873A"/>, name:"NodeJS"},
    {icon:<SiMongodb color="#4DB33D"/>, name:"MongoDB"},
    {icon:<FaJsSquare color="#F7DF1E"/>, name:"JavaScript"},
    {icon:<SiTailwindcss color="#38BDF8"/>, name:"Tailwind"},
    {icon:<SiCplusplus color="#00599C"/>, name:"C++"},
    {icon:<FaHtml5 color="#E34F26"/>, name:"HTML"},
    {icon:<FaCss3Alt color="#264de4"/>, name:"CSS"},

    {icon:<SiC color="#A8B9CC"/>, name:"C"},
    {icon:<FaGithub color="#ffffff"/>, name:"GitHub"},
    {icon:<FaWordpress color="#21759B"/>, name:"WordPress"},
    {icon:<SiExpress color="#ffffff"/>, name:"ExpressJS"},
    {icon:<SiLinux color="#FCC624"/>, name:"Linux"},
    {icon:<SiReactrouter color="#CA4245"/>, name:"React Router"},
    {icon:<SiElementor color="#92003B"/>, name:"Elementor"},
    {icon:<SiHostinger color="#673DE6"/>, name:"Hostinger"},
    {icon:<SiCanva color="#00C4CC"/>, name:"Canva"},
    {icon:<SiAdobephotoshop color="#31A8FF"/>, name:"Photoshop"},
    {icon:<SiPython color="#3776AB"/>, name:"Python"}

  ];

  return (

    <section className="skills-section">

      <h2>My Tech Stack</h2>

      {/* MAIN 8 SKILLS */}

      <div className="main-grid">

        {skills.slice(0,8).map((skill,index)=>(
          <div className="skill-card" key={index}>
            <div className="icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}

      </div>

      <button className="skill-btn" onClick={()=>setOpen(true)}>
        View All Skills
      </button>

      {/* POPUP */}

      {open && (

        <div className="overlay" onClick={()=>setOpen(false)}>

          <div className="popup" onClick={(e)=>e.stopPropagation()}>

            <span className="close" onClick={()=>setOpen(false)}>✕</span>

            <h3>All Skills</h3>

            <div className="popup-grid">

              {skills.map((skill,index)=>(
                <div className="popup-item" key={index}>
                  <div className="popup-icon">{skill.icon}</div>
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