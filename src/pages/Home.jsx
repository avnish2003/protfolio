import "./Home.css";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
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
  <button className="hire-btn">Hire Me</button>
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

      {/* TECH STRIP */}
      <div className="tech-strip">
        <div className="tech-track">

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="js" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="node" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="express" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="mongo" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" />

          {/* duplicate for smooth scroll */}
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="js" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="node" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="express" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="mongo" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" />

        </div>
      </div>
    </>
  );
};

export default Home;