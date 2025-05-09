import React from 'react';
import './Hombres.css';

const Hombres = () => {
  return (
    <section id="hombres" className="hombres-section">
      <h1>Sección Hombres</h1>
      <p className="hombres-description">
        Descubre nuestra colección exclusiva para hombres, con prendas modernas y elegantes.
      </p>
      <div className="hombres-grid">
        {/* Aquí irá el grid de productos */}
        <div className="producto-placeholder">Producto 1</div>
        <div className="producto-placeholder">Producto 2</div>
        <div className="producto-placeholder">Producto 3</div>
        <div className="producto-placeholder">Producto 4</div>
      </div>
    </section>
  );
};

export default Hombres; 