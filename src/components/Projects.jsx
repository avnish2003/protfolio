import "./Projects.css";
import { useState } from "react";

const Projects = () => {

const [open,setOpen] = useState(false);

const projects = [

{
title:"3D Object Viewer",
desc:"Upload and view 3D models using MERN stack and Three.js.",
tech:["React","Node","MongoDB"],
img:"https://picsum.photos/400/250?random=1",
github:"#",
live:"#"
},

{
title:"Leaderboard System",
desc:"Interactive leaderboard UI with ranking and pagination.",
tech:["React","Bootstrap"],
img:"https://picsum.photos/400/250?random=2",
github:"#",
live:"#"
},

{
title:"AI Email Sender",
desc:"Generate and send emails using AI API integration.",
tech:["React","Node","AI API"],
img:"https://picsum.photos/400/250?random=3",
github:"#",
live:"#"
},

{
title:"Portfolio Website",
desc:"Personal developer portfolio built using React.",
tech:["React","CSS"],
img:"https://picsum.photos/400/250?random=4",
github:"#",
live:"#"
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