import React from 'react';
import './Mujeres.css';

const Mujeres = () => {
  return (
    <section id="mujeres" className="mujeres-section">
      <h1>Sección Mujeres</h1>
      <p className="mujeres-description">
        Descubre nuestra colección exclusiva para mujeres, con prendas modernas y elegantes.
      </p>
      <div className="mujeres-grid">
        {/* Aquí irá el grid de productos */}
        <div className="producto-placeholder">Producto 1</div>
        <div className="producto-placeholder">Producto 2</div>
        <div className="producto-placeholder">Producto 3</div>
        <div className="producto-placeholder">Producto 4</div>
      </div>
    </section>
  );
};

export default Mujeres; 