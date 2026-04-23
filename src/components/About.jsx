import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaMobile } from 'react-icons/fa';
import './About.css';

const About = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInVariants}
        >
          <h2>Sobre Mí</h2>
          <p>Conoce más sobre mi experiencia y pasión por el desarrollo</p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeInVariants}
          >
            <h3>Mi Historia</h3>
            <p>
              Soy Santiago Romero, un desarrollador full stack de 18 años con una pasión 
              genuina por la programación. Mi viaje comenzó con cursos en Coderhouse y 
              proyectos personales, desarrollando tanto frontend como backend.
            </p>
            <p>
              Tengo experiencia en React, JavaScript, Node.js, Express, MongoDB y Python. 
              He completado cursos de desarrollo web y JavaScript, y estoy constantemente 
              expandiendo mis habilidades con nuevos proyectos y tecnologías.
            </p>
            <p>
              Mi objetivo es convertirme en un desarrollador full stack experto, creando 
              aplicaciones web completas desde cero. Siempre estoy buscando nuevas 
              oportunidades para crecer y aportar valor con mi trabajo.
            </p>
          </motion.div>

          <motion.div 
            className="about-cards"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={fadeInVariants}
          >
            <div className="card">
              <div className="card-icon">
                <FaCode />
              </div>
              <h4>Frontend</h4>
              <p>Desarrollo interfaces modernas con React, JavaScript ES6+, HTML5, CSS3 y diseño responsive.</p>
            </div>

            <div className="card">
              <div className="card-icon">
                <FaLaptopCode />
              </div>
              <h4>Backend</h4>
              <p>Construyo APIs con Node.js, Express, MongoDB y desarrollo de aplicaciones Python con Streamlit.</p>
            </div>

            <div className="card">
              <div className="card-icon">
                <FaMobile />
              </div>
              <h4>Full Stack</h4>
              <p>Creo aplicaciones web completas desde cero, integrando frontend y backend de manera eficiente.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
