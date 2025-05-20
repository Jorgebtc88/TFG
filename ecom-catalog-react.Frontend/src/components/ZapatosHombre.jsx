/**
 * Componente ZapatosHombre
 * 
 * Este componente representa la página de zapatos para la sección de hombres.
 * Incluye una sección hero con imagen de fondo y un grid para mostrar los productos.
 * 
 * @component
 */
import React from 'react';
import './ZapatosHombre.css';

const ZapatosHombre = () => {
  return (
    <div className="zapatos-hombre-container">
      {/* Sección Hero con imagen de fondo y texto */}
      <div className="zapatos-hombre-hero">
        <div className="zapatos-hombre-content">
          <h1>Zapatos</h1>
          <p>Descubre nuestra colección de zapatos para hombre</p>
        </div>
      </div>

      {/* Grid de productos - Pendiente de implementar */}
      <div className="zapatos-hombre-grid">
        {/* Aquí irá el grid de productos */}
      </div>
    </div>
  );
};

export default ZapatosHombre; 