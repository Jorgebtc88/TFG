import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import FilterPanel from '../components/FilterPanel';
import CategoryMenu from '../components/CategoryMenu';
import './TodosProductos.css';

const API_URL = 'http://localhost:8000/api/productos/mujer';

const HeroSection = () => (
  <div className="todos-hero">
    <div className="todos-content">
      <h1>Todos los Productos</h1>
      <p>Descubre nuestra colección completa para mujer</p>
    </div>
  </div>
);

const HeaderImage = () => (
  <div className="header-image">
    <div className="header-image-content">
      <h2>Nueva Colección</h2>
      <p>Descubre las últimas tendencias</p>
    </div>
  </div>
);

const LoadingState = () => (
  <div className="loading">Cargando productos...</div>
);

const ErrorState = ({ message }) => (
  <div className="error">{message}</div>
);

const ProductGrid = ({ products }) => (
  <div className="todos-grid">
    {products.map((product) => (
      <div className="product-card" key={product.id}>
        <div className="image-container">
          <img src={product.imagenUrl} alt={product.nombre} className="product-image" />
        </div>
        <div className="product-info">
          <h6 className="product-title">{product.nombre}</h6>
          <p>{product.descripcion}</p>
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

const TodosProductos = () => {
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
        const response = await axios.get(API_URL);
        let filteredData = [...response.data];
        
        // Aplicar filtros
        if (filters.priceRange) {
          filteredData = filteredData.filter(product => 
            product.precio >= filters.priceRange.min && 
            product.precio <= filters.priceRange.max
          );
        }

        if (filters.size) {
          filteredData = filteredData.filter(product => 
            product.tallas && product.tallas.includes(filters.size)
          );
        }

        if (filters.color) {
          filteredData = filteredData.filter(product => 
            product.color && product.color.toLowerCase() === filters.color.toLowerCase()
          );
        }

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

  return (
    <div className="todos-container">
      <HeroSection />
      <HeaderImage />
      <div className="products-container">
        <div className="category-menu-container">
          <CategoryMenu />
        </div>
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
        {loading ? (
          <LoadingState />
        ) : error ? (
          <ErrorState message={error} />
        ) : (
          <ProductGrid products={products} />
        )}
      </div>
    </div>
  );
};

export default TodosProductos; 