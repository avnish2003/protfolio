import "./Home.css";
import Skills from "../components/Skills";
import { TypeAnimation } from "react-type-animation";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import { useState } from "react";
import ContactPopup from "../components/ContactPopup";
const Home = () => {
  const [openForm, setOpenForm] = useState(false);
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-container">

          <div className="hero-left">

            {/* SMALL TEXT */}
            <p className="intro-text">I am</p>

            {/* BIG TYPING TEXT */}
            <h1 className="typing-text">
              <TypeAnimation
                sequence={[
                  "Web Designer",
                  2000,
                  "Web Developer",
                  2000,
                  "Full Stack Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </h1>
            <div className="hire-wrapper">
  <button 
  className="hire-btn"
  onClick={() => setOpenForm(true)}
>
  Hire Me Now
</button>
</div>

          </div>

          <div className="hero-right">
            <div className="image-box">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
                alt="profile"
              />
            </div>

            <div className="hero-text">
              <p>
                Hi, I'm Avnish, a UI/UX Designer creating intuitive digital
                experiences.
              </p>
            </div>
          </div>

        </div>
      </section>
     <Skills/>
     <Projects />
     <Experience/>
     <Contact/>
     <ContactPopup 
  isOpen={openForm}
  onClose={() => setOpenForm(false)}
/>

    </>
  );
};

export default Home;