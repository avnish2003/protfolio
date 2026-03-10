import "./Projects.css";

const Projects = () => {

  const projects = [
    {
      title: "3D Object Viewer",
      desc: "Upload and view 3D models using MERN stack and Three.js.",
      tech: ["React", "Node", "MongoDB"],
      img: "https://picsum.photos/400/250?random=1",
      github: "#",
      live: "#"
    },
    {
      title: "Leaderboard System",
      desc: "Interactive leaderboard UI with ranking and pagination.",
      tech: ["React", "Bootstrap"],
      img: "https://picsum.photos/400/250?random=2",
      github: "#",
      live: "#"
    },
    {
      title: "AI Email Sender",
      desc: "Generate and send emails using AI API integration.",
      tech: ["React", "Node", "AI API"],
      img: "https://picsum.photos/400/250?random=3",
      github: "#",
      live: "#"
    },
    {
      title: "Portfolio Website",
      desc: "Personal developer portfolio built using React.",
      tech: ["React", "CSS"],
      img: "https://picsum.photos/400/250?random=4",
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
                <a href={project.live} className="live">Live Demo</a>
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