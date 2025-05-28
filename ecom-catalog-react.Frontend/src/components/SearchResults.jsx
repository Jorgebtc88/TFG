/**
 * Componente SearchResults
 * 
 * Este componente muestra los resultados de la búsqueda por categoría.
 * 
 * @component
 * @requires React
 * @requires SearchResults.css
 */
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import './SearchResults.css';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { products, searchTerm } = location.state || { products: [], searchTerm: '' };

  return (
    <div className="search-results-container">
      <div className="search-results-header">
        <div className="search-results-title">
          <h1>Resultados de búsqueda</h1>
          <p className="search-term">Buscando: "{searchTerm}"</p>
        </div>
        <button onClick={() => navigate(-1)} className="back-button">
          Volver
        </button>
      </div>

      {products.length === 0 ? (
        <div className="no-results">
          <p>No se encontraron productos para la categoría "{searchTerm}"</p>
          <p className="suggestion">Intenta con otro término de búsqueda o navega por las categorías principales</p>
        </div>
      ) : (
        <>
          <div className="results-summary">
            <p>Se encontraron {products.length} productos</p>
          </div>
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={{
                  id: product.id,
                  name: product.nombre,
                  description: product.descripcion,
                  price: product.precio,
                  image: product.imagenUrl,
                  category: product.categoria?.nombre || 'Sin categoría'
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchResults; 