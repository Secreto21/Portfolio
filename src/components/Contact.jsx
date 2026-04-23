import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Contact.css';
import { profile } from '../data/profile';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const phoneHref = `tel:${profile.phone.replace(/[\s-]/g, '')}`;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      formData.subject || `Contacto desde portfolio - ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hola Santiago,

Mi nombre es ${formData.name}.
Email de contacto: ${formData.email}

${formData.message}

Saludos,`
    );

    window.location.href = `${profile.social.email}?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInVariants}
        >
          <h2>Contacto</h2>
          <p>¿Tienes un proyecto en mente? ¡Hablemos!</p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeInVariants}
          >
            <h3>Información de Contacto</h3>
            <p>
              Estoy buscando oportunidades para crecer como desarrollador frontend. 
              Si tienes un proyecto interesante o quieres conectar con un desarrollador 
              apasionado y en crecimiento, ¡no dudes en contactarme!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope />
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href={profile.social.email}>{profile.email}</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <FaPhone />
                <div>
                  <h4>Teléfono</h4>
                  <p>
                    <a href={phoneHref}>{profile.phone}</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <FaMapMarkerAlt />
                <div>
                  <h4>Ubicación</h4>
                  <p>{profile.location}</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Sígueme en:</h4>
              <div className="social-icons">
                <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href={profile.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">
                  <FaTwitter />
                </a>
              </div>
              <div className="contact-cv">
                <a
                  href={profile.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  download
                >
                  Descargar CV (PDF)
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={fadeInVariants}
          >
            <h3>Envíame un Mensaje</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Asunto"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tu mensaje"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
