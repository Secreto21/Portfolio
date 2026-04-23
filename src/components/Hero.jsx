import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';
import { profile } from '../data/profile';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {profile.hero.titlePrefix} <span className="highlight">{profile.name}</span>
          </motion.h1>
          
          <motion.h2 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {profile.hero.roleTagline}
          </motion.h2>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {profile.hero.description}
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className="btn btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              {profile.hero.ctaProjects}
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              {profile.hero.ctaContact}
            </button>
            <a
              className="btn btn-secondary"
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              {profile.hero.ctaCv}
            </a>
          </motion.div>
          
          <motion.div 
            className="hero-social"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={profile.social.email} aria-label="Email">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Opción 1: Avatar con iniciales */}
          <div className="avatar-circle" aria-hidden="true">
            <span className="avatar-initials">{profile.initials}</span>
          </div>
          
          {/* Opción 2: Descomentar para usar ícono de código */}
          {/* 
          <div className="code-icon-wrapper">
            <FaCode className="code-icon" />
          </div>
          */}
          
          {/* Opción 3: Descomentar para imagen real */}
          {/*
          <div className="profile-image">
            <img src="/tu-foto.jpg" alt={profile.name} />
          </div>
          */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
