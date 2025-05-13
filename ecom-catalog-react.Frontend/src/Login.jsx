/**
 * Componente de inicio de sesión
 * 
 * Este componente maneja la autenticación de usuarios a través de un formulario
 * que incluye campos para email y contraseña.
 * 
 * @component
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  /**
   * Maneja el envío del formulario
   * @param {Event} e - Evento del formulario
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implementar lógica de autenticación
    console.log('Datos del formulario:', formData);
  };

  /**
   * Maneja los cambios en los campos del formulario
   * @param {Event} e - Evento del input
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="login-form">
          {/* Campo de email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="ejemplo@correo.com"
            />
          </div>
          {/* Campo de contraseña */}
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Ingresa tu contraseña"
            />
          </div>
          {/* Botón de inicio de sesión */}
          <button type="submit" className="login-submit-btn">Iniciar Sesión</button>
          {/* Enlace para recuperar contraseña */}
          <div className="forgot-password">
            <a href="/recuperar-contrasena">¿Olvidaste tu contraseña?</a>
          </div>
        </form>
        {/* Enlace para registro de nuevos usuarios */}
        <div className="login-footer">
          <p>¿No tienes una cuenta? <a href="/registro">Regístrate</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;