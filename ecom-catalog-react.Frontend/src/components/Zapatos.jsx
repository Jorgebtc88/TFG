import React, { useState, useEffect } from 'react';
import './Zapatos.css';
import ProductCard from './ProductCard';
import FilterPanel from './FilterPanel';

const FilterButton = ({ onClick }) => (
  <button className="filter-toggle-button" onClick={onClick}>
    <div className="filter-icon">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <span className="filter-text">Filtro</span>
  </button>
);

const Zapatos = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: { min: 0, max: 250 },
    sortBy: 'priceAsc',
    size: '',
    color: ''
  });

  const API_URL = 'http://localhost:8000/api/productos/categoria/12';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Error al cargar los productos');
        }
        const data = await response.json();
        
        // Aplicar filtros
        let filteredData = [...data];
        
        // Filtrar por rango de precio
        filteredData = filteredData.filter(product => 
          product.precio >= filters.priceRange.min && 
          product.precio <= filters.priceRange.max
        );

        // Filtrar por talla si está seleccionada
        if (filters.size) {
          filteredData = filteredData.filter(product => 
            product.tallas && product.tallas.includes(filters.size)
          );
        }

        // Filtrar por color si está seleccionado
        if (filters.color) {
          filteredData = filteredData.filter(product => 
            product.color && product.color.toLowerCase() === filters.color
          );
        }

        // Ordenar por precio
        if (filters.sortBy === 'priceAsc') {
          filteredData.sort((a, b) => a.precio - b.precio);
        } else if (filters.sortBy === 'priceDesc') {
          filteredData.sort((a, b) => b.precio - a.precio);
        }

        setProducts(filteredData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setShowFilters(false);
  };

  const handleCloseFilters = () => {
    setShowFilters(false);
  };

  const renderContent = () => {
    if (loading) return <div className="loading">Cargando productos...</div>;
    if (error) return <div className="error">{error}</div>;
    return (
      <div className="products-grid">
        {products.map((product) => (
          <div className="card product-card" key={product.id}>
            <div className="image-container">
              <img src={product.imagenUrl} alt={product.nombre} className="card-img-top product-image" />
            </div>
            <div className="card-body product-info">
              <h6 className="card-title product-title">{product.nombre}</h6>
              <p className="card-text">{product.descripcion}</p>
              <strong>{product.precio} €</strong>
              <div className="tallas-lista">
                {product.tallas && product.tallas.length > 0
                  ? product.tallas.map(t => t.nombre).join(' · ')
                  : 'Sin tallas'}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="zapatos-container">
      <div className="zapatos-hero">
        <div className="zapatos-content">
          <h1>Zapatos</h1>
          <p>Descubre nuestra colección de zapatos</p>
        </div>
      </div>
      <div className="products-container">
        <div className="filter-button-container">
          <FilterButton onClick={() => setShowFilters(!showFilters)} />
        </div>
        {showFilters && (
          <div className="filter-sidebar">
            <FilterPanel 
              onFilterChange={handleFilterChange}
              onClose={handleCloseFilters}
            />
          </div>
        )}
        <div className="zapatos-grid">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Zapatos; 