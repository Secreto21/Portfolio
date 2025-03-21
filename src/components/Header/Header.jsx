import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header>
      <div className="logo">Mi Portfolio</div>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <nav>
        <ul className={menuActive ? "active" : ""}>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              Sobre Mi
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
              Proyectos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;