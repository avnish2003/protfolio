import { useState } from "react";
import "./Projects.css";

const allProjects = [
  {
    title: "Anonymous Feedback",
    image: "https://via.placeholder.com/600x350",
  },
  {
    title: "Chat Application",
    image: "https://via.placeholder.com/600x350",
  },
  {
    title: "E-Commerce Store",
    image: "https://via.placeholder.com/600x350",
  },
  {
    title: "Portfolio Website",
    image: "https://via.placeholder.com/600x350",
  },
  {
    title: "Task Manager",
    image: "https://via.placeholder.com/600x350",
  },
  {
    title: "Admin Dashboard",
    image: "https://via.placeholder.com/600x350",
  },
];

const Projects = () => {
  const [open, setOpen] = useState(false);

  const homeProjects = allProjects.slice(0, 4); // Only 4 on home

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {homeProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>

      <button className="hire-btn" onClick={() => setOpen(true)}>
        View All Projects
      </button>

      {open && (
        <div className="overlay" onClick={() => setOpen(false)}>
          <div
            className="projects-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close" onClick={() => setOpen(false)}>✕</span>
            <h3>All Projects</h3>

            <div className="popup-grid">
              {allProjects.map((project, index) => (
                <div key={index} className="project-card">
                  <img src={project.image} alt={project.title} />
                  <h3>{project.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;