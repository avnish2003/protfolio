import "./Projects.css";
import { useState } from "react";
import img1 from "../assets/Screenshot 2026-03-23 162306.png";
import img2 from "../assets/Screenshot 2026-03-23 162400.png";
import img3 from "../assets/Screenshot 2026-03-23 162439.png";
import img4 from "../assets/Screenshot 2026-03-23 162420.png";

const Projects = () => {

const [open,setOpen] = useState(false);

const projects = [

{
title:"SmartTicket System",
desc:"“Developed a full-stack ticketing system using MERN stack for managing user issues, tracking status, and resolving support requests.”",
tech:["TypeScript","Node","MongoDB"],
img:img1,
github:"https://github.com/avnish2003/dubai-ticket-app.git",
live:"https://zippy-taiyaki-d21c63.netlify.app/"
},

{
title:"E-Commerce",
desc:"“Built a  eCommerce platform using Web Tech stack with product listings, user authentication, and seamless checkout functionality.”",
tech:["JavaScript","Html","CSS"],
img:img2,
github:"https://github.com/avnish2003/avnishdev.git",
live:"https://moonlit-pavlova-49084f.netlify.app/"
},

{
title:"Studio Website",
desc:"“Developed a responsive website using HTML, CSS, and JavaScript for showcasing video production services with modern UI and smooth user experience.”",
tech:["JavaScript","Html","CSS"],
img:img3,
github:"https://github.com/avnish2003/project.git",
live:"https://heartfelt-blini-1671f2.netlify.app/"
},

{
title:"Portfolio Website",
desc:"“Developed a responsive portfolio website using React and CSS for showcasing projects, skills, and contact information with modern UI and smooth user experience.”",
tech:["React","CSS"],
img:img4,
github:"https://github.com/avnish2003/protfolio.git",
live:"http://avnishdev.netlify.app/"
},

{
title:"Chat Application",
desc:"Real time chat application using socket.io.",
tech:["React","Node","Socket"],
img:"https://picsum.photos/400/250?random=5",
github:"#",
live:"#"
},

{
title:"Task Manager",
desc:"Full stack task management application.",
tech:["React","Node","MongoDB"],
img:"https://picsum.photos/400/250?random=6",
github:"#",
live:"#"
},

{
title:"Weather App",
desc:"Weather forecast using API integration.",
tech:["React","API"],
img:"https://picsum.photos/400/250?random=7",
github:"#",
live:"#"
},

{
title:"Ecommerce UI",
desc:"Responsive ecommerce UI built in React.",
tech:["React","CSS"],
img:"https://picsum.photos/400/250?random=8",
github:"#",
live:"#"
},

/* add remaining projects here */
];

return (

<section className="projects-section">

<h2>My Projects</h2>

{/* HOME PAGE PROJECTS */}

<div className="projects-grid">

{projects.slice(0,8).map((project,index)=>(

<div className="project-card" key={index}>

<img src={project.img} alt={project.title}/>

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

<button className="view-btn" onClick={()=>setOpen(true)}>
View All Projects
</button>

{/* POPUP */}

{open && (

<div className="overlay" onClick={()=>setOpen(false)}>

<div className="popup" onClick={(e)=>e.stopPropagation()}>

<span className="close" onClick={()=>setOpen(false)}>✕</span>

<h3>All Projects</h3>

<div className="popup-grid">

{projects.map((project,index)=>(

<div className="project-card" key={index}>

<img src={project.img} alt={project.title}/>

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

</div>

</div>

)}

</section>

);

};

export default Projects;