import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RecuperarContrasena.css';

const RecuperarContrasena = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Por favor, ingresa tu correo electrónico');
      return;
    }
    // TODO: Implementar lógica de recuperación de contraseña
    setSubmitted(true);
    setError('');
  };

  return (
    <div className="recuperar-contrasena-container">
      <div className="recuperar-contrasena-box">
        <h2>Recuperar Contraseña</h2>
        {submitted ? (
          <div className="success-message">
            <p>Se ha enviado un enlace de recuperación a tu correo electrónico.</p>
            <Link to="/login" className="back-to-login">Volver al inicio de sesión</Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="recuperar-contrasena-form">
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ejemplo@correo.com"
                required
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="submit-btn">Enviar enlace de recuperación</button>
            <div className="back-to-login">
              <Link to="/login">Volver al inicio de sesión</Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RecuperarContrasena; 