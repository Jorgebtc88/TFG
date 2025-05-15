import React, { useState } from 'react';
import './Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="contacto-container">
      <div className="contacto-content contacto-content-simple">
        <h1>Contacto</h1>
        <p className="contacto-descripcion">
          No dudes en contactarnos si tienes alguna duda o propuesta a help@fashionshop.com
        </p>
        <form className="contacto-form contacto-form-simple" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="nombre"
              placeholder="Su nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Tu correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              name="telefono"
              placeholder="Tu teléfono (opcional)"
              value={formData.telefono}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <textarea
              name="mensaje"
              placeholder="Tu mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows="6"
            ></textarea>
          </div>
          <button type="submit" className="submit-button submit-button-simple">
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacto; 