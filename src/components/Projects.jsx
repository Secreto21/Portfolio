import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Backend E-commerce",
      description: "Sistema completo de e-commerce con API REST, autenticación, gestión de productos, carrito de compras y pagos integrados.",
      image: "/api/placeholder/400/250",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      githubUrl: "https://github.com/Secreto21/backend-ecommerce",
      liveUrl: "https://github.com/Secreto21/backend-ecommerce",
      featured: true
    },
    {
      id: 2,
      title: "Sushi Time",
      description: "Aplicación web moderna desarrollada con TypeScript, ofreciendo una experiencia completa de gestión de restaurante de sushi.",
      image: "/api/placeholder/400/250",
      technologies: ["TypeScript", "React", "Node.js", "CSS3"],
      githubUrl: "https://github.com/Secreto21/sushi-time",
      liveUrl: "https://github.com/Secreto21/sushi-time",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Personal",
      description: "Mi portfolio personal desarrollado con React y Vite, incluyendo animaciones fluidas con Framer Motion y diseño responsive.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Vite", "Framer Motion", "CSS3"],
      githubUrl: "https://github.com/Secreto21/Portfolio",
      liveUrl: "https://secreto21.github.io/Portfolio",
      featured: true
    },
    {
      id: 4,
      title: "CRUD Express Mongoose",
      description: "API REST completa con operaciones CRUD, desarrollada con Node.js, Express y MongoDB. Incluye validaciones y manejo de errores.",
      image: "/api/placeholder/400/250",
      technologies: ["Node.js", "Express", "MongoDB", "JavaScript"],
      githubUrl: "https://github.com/Secreto21/crud-express_mongoose",
      liveUrl: "https://github.com/Secreto21/crud-express_mongoose",
      featured: false
    },
    {
      id: 5,
      title: "Chatbot Groq Streamlit",
      description: "Chatbot inteligente desarrollado con Python y Streamlit, integrando APIs de IA para conversaciones naturales.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Streamlit", "AI", "APIs"],
      githubUrl: "https://github.com/Secreto21/chatbot-groq-streamlit",
      liveUrl: "https://github.com/Secreto21/chatbot-groq-streamlit",
      featured: false
    },
    {
      id: 6,
      title: "Proyecto Coderhouse",
      description: "Proyecto final del curso de JavaScript de Coderhouse, demostrando habilidades en desarrollo web moderno.",
      image: "/api/placeholder/400/250",
      technologies: ["JavaScript", "HTML5", "CSS3", "DOM"],
      githubUrl: "https://github.com/Secreto21/entregable1-Romero",
      liveUrl: "https://github.com/Secreto21/entregable1-Romero",
      featured: false
    }
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const getTechIcon = (tech) => {
    switch (tech.toLowerCase()) {
      case 'react':
      case 'react native':
        return <FaReact />;
      case 'node.js':
      case 'express':
        return <FaNodeJs />;
      case 'mongodb':
      case 'postgresql':
      case 'mysql':
        return <FaDatabase />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInVariants}
        >
          <h2>Mis Proyectos</h2>
          <p>Una selección de mis trabajos más destacados</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              variants={fadeInVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <span>Imagen del Proyecto</span>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="projects-cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          variants={fadeInVariants}
        >
          <p>¿Quieres ver más proyectos?</p>
          <a href="https://github.com/Secreto21" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Ver en GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
