/**
 * Componente CamisetasHombre
 * 
 * Este componente representa la página de camisetas para la sección de hombres.
 * Incluye una sección hero con imagen de fondo y un grid para mostrar los productos.
 * 
 * @component
 */
import React from 'react';
import './CamisetasHombre.css';

const CamisetasHombre = () => {
  return (
    <div className="camisetas-hombre-container">
      {/* Sección Hero con imagen de fondo y texto */}
      <div className="camisetas-hombre-hero">
        <div className="camisetas-hombre-content">
          <h1>Camisetas</h1>
          <p>Descubre nuestra colección de camisetas para hombre</p>
        </div>
      </div>

      {/* Grid de productos - Pendiente de implementar */}
      <div className="camisetas-hombre-grid">
        {/* Aquí irá el grid de productos */}
      </div>
    </div>
  );
};

export default CamisetasHombre; 