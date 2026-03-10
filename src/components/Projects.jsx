import "./Projects.css";

const Projects = () => {

  const projects = [
    {
      title: "3D Object Viewer",
      desc: "Full stack MERN app to upload and view 3D models using Three.js with authentication and cloud storage.",
      tech: ["React", "Node", "MongoDB", "Three.js"],
      img: "https://picsum.photos/500/300?random=1",
      github: "#",
      live: "#"
    },
    {
      title: "Leaderboard System",
      desc: "Interactive leaderboard UI with ranking, tabs and pagination built with React.",
      tech: ["React", "Bootstrap"],
      img: "https://picsum.photos/500/300?random=2",
      github: "#",
      live: "#"
    },
    {
      title: "AI Email Sender",
      desc: "AI powered email generator that creates email drafts and sends them using backend APIs.",
      tech: ["React", "Node", "AI API"],
      img: "https://picsum.photos/500/300?random=3",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section className="projects-section">

      <h2>My Projects</h2>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img src={project.img} alt={project.title} />

            <div className="project-content">

              <h3>{project.title}</h3>

              <p className="desc">{project.desc}</p>

              <div className="tech">

                {project.tech.map((t,i)=>(
                  <span key={i}>{t}</span>
                ))}

              </div>

              <div className="buttons">

                <a href={project.github}>GitHub</a>

                <a href={project.live} className="live">
                  Live Demo
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

      <button className="view-btn">View All Projects</button>

    </section>
  );
};

export default Projects;