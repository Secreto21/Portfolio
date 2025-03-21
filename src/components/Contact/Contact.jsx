import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="container">
      <h2>Contacto</h2>
      <form>
  <div className="form-group">
    <label htmlFor="name">Nombre:</label>
    <input type="text" id="name" name="name" required />
  </div>
  <div className="form-group">
    <label htmlFor="email">Correo Electrónico:</label>
    <input type="email" id="email" name="email" required />
  </div>
  <div className="form-group">
    <label htmlFor="message">Mensaje:</label>
    <textarea id="message" name="message" required></textarea>
  </div>
  <div className="form-group" style={{ textAlign: "center" }}>
    <button type="submit">Enviar</button>
  </div>
</form>
    </section>
  );
};

export default Contact;