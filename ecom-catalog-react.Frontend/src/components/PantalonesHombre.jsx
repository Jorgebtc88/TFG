/**
 * Componente PantalonesHombre
 * 
 * Este componente representa la página de pantalones para la sección de hombres.
 * Incluye una sección hero con imagen de fondo y un grid para mostrar los productos.
 * 
 * @component
 */
import React, { useState, useEffect } from 'react';
import './PantalonesHombre.css';
import ProductCard from './ProductCard';
import FilterPanel from './FilterPanel';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

/**
 * URL base para la API de productos de pantalones de hombre
 * @constant {string}
 */
const API_URL = 'http://localhost:8000/api/productos/categoria/14';

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
const ProductGrid = ({ products }) => {
  const { user, isLoggedIn } = useAuth();
  const [favorites, setFavorites] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkFavorites = async () => {
      if (isLoggedIn && user?.token) {
        console.log('Usuario autenticado:', user.email);
        console.log('Token presente:', user.token ? 'Sí' : 'No');

        try {
          const response = await axios.get('http://localhost:8000/api/favoritos', {
            headers: {
              'Authorization': `Bearer ${user.token}`,
              'Content-Type': 'application/json'
            }
          });
          
          // Verificar que la respuesta sea un array
          if (!Array.isArray(response.data)) {
            console.error('La respuesta no es un array:', response.data);
            return;
          }

          const favoritesMap = {};
          response.data.forEach(fav => {
            if (fav.producto && fav.producto.id) {
              favoritesMap[fav.producto.id] = true;
            }
          });
          setFavorites(favoritesMap);
        } catch (error) {
          console.error('Error al verificar favoritos:', error.response?.data || error.message);
          if (error.response?.status === 403) {
            console.error('Error de autorización. Verifica que el token sea válido.');
          }
        }
      }
    };
    checkFavorites();
  }, [user, isLoggedIn]);

  const toggleFavorite = async (productId) => {
    if (!isLoggedIn || !user?.token) {
      console.error('Usuario no autenticado');
      return;
    }

    setIsLoading(true);
    try {
      const headers = {
        'Authorization': `Bearer ${user.token}`,
        'Content-Type': 'application/json'
      };

      if (favorites[productId]) {
        await axios.delete(`http://localhost:8000/api/favoritos/${productId}`, { headers });
      } else {
        await axios.post(`http://localhost:8000/api/favoritos/${productId}`, {}, { headers });
      }
      
      setFavorites(prev => ({
        ...prev,
        [productId]: !prev[productId]
      }));
    } catch (error) {
      console.error('Error al actualizar favoritos:', error.response?.data || error.message);
      if (error.response?.status === 403) {
        console.error('Error de autorización. Verifica que el token sea válido.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="products-grid">
      {products.map((product) => (
        <div className="card product-card" key={product.id}>
          <div className="image-container">
            <img src={product.imagenUrl} alt={product.nombre} className="card-img-top product-image" />
            <button 
              className={`favorite-btn ${favorites[product.id] ? 'active' : ''}`}
              onClick={() => toggleFavorite(product.id)}
              disabled={isLoading}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill={favorites[product.id] ? "currentColor" : "none"} 
                stroke="currentColor"
                strokeWidth="2"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                />
              </svg>
            </button>
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

const PantalonesHombre = () => {
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
    <div className="pantalones-hombre-container">
      {/* Sección Hero con imagen de fondo y texto */}
      <div className="pantalones-hombre-hero">
        <div className="pantalones-hombre-content">
          <h1>Pantalones</h1>
          <p>Descubre nuestra colección de pantalones para hombre</p>
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
        <div className="pantalones-hombre-grid">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default PantalonesHombre; 