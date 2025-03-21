import React from "react";
import "./About.css";

const About = () => {
  const skills = [
    { name: "JavaScript", color: "#f0db4f" },
    { name: "React", color: "#61dafb" },
    { name: "Node.js", color: "#68a063" },
    { name: "CSS", color: "#673499" },
    { name: "HTML", color: "#e34c26" },
  ];

  return (
    <section id="about" className="container">
      <h2>Sobre Mí</h2>
      <p>
        Soy un desarrollador proactivo con experiencia en diversas tecnologías
        web. Me apasiona crear aplicaciones eficientes y escalables.
      </p>
      <p>
        Disfruto resolver problemas complejos y aprender nuevas habilidades.
        Siempre estoy buscando mejorar y crecer profesionalmente.
      </p>
      <h3>Habilidades</h3>
      <ul className="skills">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="skill"
            style={{ backgroundColor: skill.color }}
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;