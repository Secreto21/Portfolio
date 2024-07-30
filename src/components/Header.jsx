import React from "react";
import "./Header.css";

const Header = () => {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault(); // Previene el comportamiento por defecto del enlace
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#home" onClick={(event) => scrollToSection(event, 'home')}>Inicio</a>
          </li>
          <li>
            <a href="#about" onClick={(event) => scrollToSection(event, 'about')}>Sobre Mí</a>
          </li>
          <li>
            <a href="#projects" onClick={(event) => scrollToSection(event, 'projects')}>Proyectos</a>
          </li>
          <li>
            <a href="#contact" onClick={(event) => scrollToSection(event, 'contact')}>Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
