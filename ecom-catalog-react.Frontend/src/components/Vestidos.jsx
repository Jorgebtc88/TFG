/**
 * Componente Pantalones
 * 
 * Este componente representa la página de pantalones para la sección de mujeres.
 * Incluye una sección hero y un grid de productos.
 * 
 * @component
 * @requires React
 * @requires ProductCard
 * @requires Pantalones.css
 */
import React, { useState, useEffect } from 'react'; 
import ProductCard from './ProductCard';
import FilterPanel from './FilterPanel';
import './Vestidos.css';

/**
 * URL base para la API de productos de pantalones de mujer
 * @constant {string}
 */
const API_URL = 'http://localhost:8000/api/productos/categoria/9';
/**
 * Componente que renderiza la sección hero de la página
 * @component
 * @returns {JSX.Element} Sección hero con título y descripción
 */
const HeroSection = () => (
    <div className="vestidos-hero">
    <div className="vestidos-content">
      <h1>Vestidos</h1>
      <p>Descubre nuestra colección de vestidos para mujer</p>
    </div>
  </div>
);

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


const ProductGrid = ({ products }) => (
  <div className="vestidos-grid">
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

/**
 * Componente principal de la página de pantalones
 * @component
 * @returns {JSX.Element} Página completa de pantalones
 */
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
    <div className="vestidos-container">
      <HeroSection />
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
        <div className="vestidos-grid">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Pantalones;