import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaPython, 
  FaGitAlt, 
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaCode
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMongodb, 
  SiPostgresql, 
  SiExpress,
  SiNextdotjs,
  SiTailwindcss
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", experience: "Intermedio", icon: <FaReact /> },
        { name: "JavaScript", experience: "Avanzado", icon: <FaJs /> },
        { name: "TypeScript", experience: "Intermedio", icon: <SiTypescript /> },
        { name: "HTML5", experience: "Avanzado", icon: <FaHtml5 /> },
        { name: "CSS3", experience: "Avanzado", icon: <FaCss3Alt /> },
        { name: "Vite", experience: "Intermedio", icon: <FaReact /> }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", experience: "Intermedio", icon: <FaNodeJs /> },
        { name: "Express", experience: "Intermedio", icon: <SiExpress /> },
        { name: "MongoDB", experience: "Intermedio", icon: <SiMongodb /> },
        { name: "Python", experience: "Intermedio", icon: <FaPython /> },
        { name: "Streamlit", experience: "Básico", icon: <FaPython /> }
      ]
    },
    {
      title: "Herramientas",
      skills: [
        { name: "Git", experience: "Intermedio", icon: <FaGitAlt /> },
        { name: "GitHub", experience: "Intermedio", icon: <FaGitAlt /> },
        { name: "VS Code", experience: "Avanzado", icon: <FaCode /> },
        { name: "npm", experience: "Intermedio", icon: <FaNodeJs /> }
      ]
    }
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };


  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInVariants}
        >
          <h2>Habilidades</h2>
          <p>Tecnologías y herramientas con las que trabajo</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              variants={fadeInVariants}
            >
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    variants={fadeInVariants}
                  >
                    <div className="skill-header">
                      <div className="skill-name">
                        <span className="skill-icon">{skill.icon}</span>
                        {skill.name}
                      </div>
                      <span className={`skill-level ${skill.experience.toLowerCase()}`}>
                        {skill.experience}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="skills-summary"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          variants={fadeInVariants}
        >
          <div className="summary-stats">
            <div className="stat">
              <h4>10+</h4>
              <p>Proyectos en GitHub</p>
            </div>
            <div className="stat">
              <h4>Full Stack</h4>
              <p>Frontend y Backend</p>
            </div>
            <div className="stat">
              <h4>Tecnologías</h4>
              <p>React, TypeScript, Node.js</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
