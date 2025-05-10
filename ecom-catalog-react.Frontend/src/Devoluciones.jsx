import React, { useState } from 'react';
import './Devoluciones.css';

const Devoluciones = () => {
  const [pedido, setPedido] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pedido || !email) {
      setError('Por favor, completa ambos campos.');
      return;
    }
    setError('');
    // Aquí iría la lógica para buscar el pedido
    alert('Funcionalidad de búsqueda de pedido no implementada.');
  };

  return (
    <div className="devoluciones-bg">
      <div className="devoluciones-form-container">
        <h1 className="devoluciones-logo">Fashion<span className="brand-dot">.</span></h1>
        <h2 className="devoluciones-title">CAMBIOS Y DEVOLUCIONES</h2>
        <p className="devoluciones-desc">
          Introduce los datos de tu pedido original para iniciar el proceso
        </p>
        <form className="devoluciones-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="input-icon">📦</span>
            <input
              type="text"
              placeholder="Número de pedido"
              value={pedido}
              onChange={e => setPedido(e.target.value)}
              className="devoluciones-input"
            />
          </div>
          <div className="input-group">
            <span className="input-icon">@</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="devoluciones-input"
            />
          </div>
          {error && <div className="devoluciones-error">{error}</div>}
          <div className="devoluciones-legal">
            Al continuar, confirmas que aceptas los <a href="#">Términos y Condiciones</a>, <a href="#">Política de privacidad</a> y la <a href="#">Política de cookies</a>.
          </div>
          <button type="submit" className="devoluciones-btn">Buscar pedido</button>
        </form>
        <div className="devoluciones-powered">Atención al cliente Fashion</div>
      </div>
    </div>
  );
};

export default Devoluciones; 