/**
 * Componente ChaquetasHombre
 * 
 * Este componente representa la página de chaquetas para la sección de hombres.
 * Incluye una sección hero con imagen de fondo y un grid para mostrar los productos.
 * 
 * @component
 */
import React from 'react';
import './ChaquetasHombre.css';

const ChaquetasHombre = () => {
  return (
    <div className="chaquetas-hombre-container">
      {/* Sección Hero con imagen de fondo y texto */}
      <div className="chaquetas-hombre-hero">
        <div className="chaquetas-hombre-content">
          <h1>Chaquetas</h1>
          <p>Descubre nuestra colección de chaquetas para hombre</p>
        </div>
      </div>

      {/* Grid de productos - Pendiente de implementar */}
      <div className="chaquetas-hombre-grid">
        {/* Aquí irá el grid de productos */}
      </div>
    </div>
  );
};

export default ChaquetasHombre; 