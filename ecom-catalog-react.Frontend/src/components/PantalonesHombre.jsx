/**
 * Componente PantalonesHombre
 * 
 * Este componente representa la página de pantalones para la sección de hombres.
 * Incluye una sección hero con imagen de fondo y un grid para mostrar los productos.
 * 
 * @component
 */
import React from 'react';
import './PantalonesHombre.css';

const PantalonesHombre = () => {
  return (
    <div className="pantalones-hombre-container">
      {/* Sección Hero con imagen de fondo y texto */}
      <div className="pantalones-hombre-hero">
        <div className="pantalones-hombre-content">
          <h1>Pantalones</h1>
          <p>Descubre nuestra colección de pantalones para hombre</p>
        </div>
      </div>

      {/* Grid de productos - Pendiente de implementar */}
      <div className="pantalones-hombre-grid">
        {/* Aquí irá el grid de productos */}
      </div>
    </div>
  );
};

export default PantalonesHombre; 