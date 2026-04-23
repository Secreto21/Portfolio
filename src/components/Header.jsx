import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';
import { profile } from '../data/profile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <a href="#main" className="skip-link">Saltar al contenido</a>
      <div className="container">
        <div className="logo">
          <h2>{profile.name}</h2>
        </div>
        
        <nav id="primary-navigation" className={`nav ${isMenuOpen ? 'nav-open' : ''}`} aria-label="Navegación principal">
          <ul>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Inicio</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Sobre mí</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Proyectos</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Habilidades</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contacto</a></li>
          </ul>
        </nav>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
