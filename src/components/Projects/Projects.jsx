import React from "react";
import "./Proyects.css";

const Projects = () => {
  const projectList = [
    { 
      title: "Proyecto 1", 
      description: "Descripción del proyecto 1.", 
      link: "https://link-al-proyecto-1.com" 
    },
    { 
      title: "Proyecto 2", 
      description: "Descripción del proyecto 2.", 
      link: "https://link-al-proyecto-2.com" 
    },
    { 
      title: "Proyecto 3", 
      description: "Descripción del proyecto 3.",  
      link: "https://link-al-proyecto-3.com" 
    },
  ];

  return (
    <section id="projects" className="container">
      <h2>Proyectos</h2>
      <p>Estos son algunos de los proyectos en los que he trabajado recientemente.</p>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;