import "./Experience.css";

const experiences = [
  {
    company: "White Gravity Web Solutions",
    role: "Web Developer",
    location: "Noida, UP",
    period: "Nov 2025 – Present",
    points: [
      "Developed dynamic websites using WordPress, Elementor, HTML, CSS and JavaScript.",
      "Implemented custom styling and frontend logic extending default WordPress capabilities."
    ]
  },
  {
    company: "Qspiders",
    role: "Full Stack Developer Trainee",
    location: "Noida, UP",
    period: "Jan 2025 – Oct 2025",
    points: [
      "Engineered full-stack applications integrating frontend and backend systems.",
      "Resolved 50+ critical bugs improving application stability."
    ]
  },
  {
    company: "Zidio Development",
    role: "Web Developer",
    location: "Remote",
    period: "Apr 2024 – Jun 2024",
    points: [
      "Optimized client web applications using HTML, CSS and JavaScript.",
      "Improved user engagement metrics by 40% across multiple projects."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Work Experience</h2>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-row" key={index}>
            <div className="experience-content">

              <div className="left">
                <h3>{exp.company}</h3>
                <p className="role">{exp.role}</p>
                <p className="location">{exp.location}</p>

                <ul>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="right">
                <span>{exp.period}</span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;