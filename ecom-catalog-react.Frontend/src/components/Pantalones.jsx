/**
 * Componente Pantalones
 * Muestra la sección de pantalones para mujeres con una sección hero y grid de productos
 */

import React, { useState, useEffect } from 'react';
import './Pantalones.css';
import ProductCard from './ProductCard';
import FilterPanel from './FilterPanel';

/**
 * URL base para la API de productos de pantalones de mujer
 * @constant {string}
 */
const API_URL = 'http://localhost:8000/api/productos/categoria/3';

/**
 * Componente que muestra el estado de carga
 * @component
 * @returns {JSX.Element} Mensaje de carga
 */
const LoadingState = () => (
  <div className="loading">Cargando productos...</div>
);

/**
 * Componente que muestra mensajes de error
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {string} props.message - Mensaje de error a mostrar
 * @returns {JSX.Element} Mensaje de error
 */
const ErrorState = ({ message }) => (
  <div className="error">{message}</div>
);

/**
 * Componente que renderiza la cuadrícula de productos
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Array} props.products - Lista de productos a mostrar
 * @returns {JSX.Element} Cuadrícula de productos
 */
const ProductGrid = ({ products }) => (
  <div className="products-grid">
    {products.map((product) => (
      <ProductCard 
        key={product.id} 
        product={{
          id: product.id,
          name: product.nombre,
          description: product.descripcion,
          price: product.precio,
          image: product.imagenUrl
        }} 
      />
    ))}
  </div>
);

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

const Pantalones = () => {
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
    if (loading) return <LoadingState />;
    if (error) return <ErrorState message={error} />;
    return <ProductGrid products={products} />;
  };

  return (
    <div className="pantalones-container">
      <div className="pantalones-hero">
        <div className="pantalones-content">
          <h1>Pantalones</h1>
          <p>Descubre nuestra colección de pantalones.</p>
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
        <div className="pantalones-grid">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Pantalones;