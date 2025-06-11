import React from 'react';
import './NoResults.css';

const NoResults = () => {
  return (
    <div className="no-results">
      <div className="no-results-content">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          className="no-results-icon"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
        <h3>No se encontraron productos</h3>
        <p>No hay productos que coincidan con los filtros seleccionados.</p>
        <p className="suggestion">Sugerencias:</p>
        <ul>
          <li>Intenta ajustar los filtros de precio</li>
          <li>Prueba con otras tallas o colores</li>
          <li>Explora otras categorías</li>
        </ul>
      </div>
    </div>
  );
};

export default NoResults; 