import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';
import CategoryMenu from '../components/CategoryMenu';
import FilterPanel from '../components/FilterPanel';
import NoResults from '../components/NoResults';
import './TodosProductosMujer.css';

const API_URL = 'http://localhost:8000/api/productos/genero/nombre/Mujeres';

const LoadingState = () => (
  <div className="loading">Cargando productos...</div>
);

const ErrorState = ({ message }) => (
  <div className="error">{message}</div>
);

const ProductGrid = ({ products, favoritos, onFavoriteToggle }) => {
  if (!products || products.length === 0) {
    return (
      <div className="products-grid-container">
        <NoResults />
      </div>
    );
  }

  return (
    <div className="todos-productos-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favoritos.includes(product.id)}
          onFavoriteToggle={onFavoriteToggle}
          showFavoriteButton={true}
        />
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
    <span className="filter-text">Filtrar</span>
  </button>
);

const TodosProductosMujer = () => {
  const { user, isLoggedIn } = useAuth();
  const [products, setProducts] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
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
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchFavoritos = async () => {
      if (!isLoggedIn || !user?.token) return;
      try {
        const response = await axios.get('http://localhost:8000/api/favoritos', {
          headers: {
            'Authorization': `Bearer ${user.token}`,
            'Content-Type': 'application/json'
          }
        });
        setFavoritos(response.data.map(fav => fav.producto.id));
      } catch (error) {
        console.error('Error al cargar favoritos:', error);
      }
    };
    fetchFavoritos();
  }, [isLoggedIn, user]);

  const handleFavoriteToggle = (productId) => {
    setFavoritos(prevFavoritos => {
      if (prevFavoritos.includes(productId)) {
        return prevFavoritos.filter(id => id !== productId);
      } else {
        return [...prevFavoritos, productId];
      }
    });
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setShowFilters(false);
  };

  const handleCloseFilters = () => {
    setShowFilters(false);
  };

  const filteredProducts = products.filter(product => {
    if (!product) return false;
    
    // Convertir el precio a número y asegurarnos de que sea válido
    const productPrice = parseFloat(product.precio);
    const minPrice = parseFloat(filters.priceRange.min);
    const maxPrice = parseFloat(filters.priceRange.max);
    
    const matchesPrice = !isNaN(productPrice) && 
                        productPrice >= minPrice && 
                        productPrice <= maxPrice;
    
    // Verificar si el producto tiene tallas y si hay filtros de talla
    const matchesSize = !filters.size || 
                       (Array.isArray(product.tallas) && product.tallas.includes(filters.size));
    
    // Verificar si el producto tiene color y si hay filtros de color
    const matchesColor = !filters.color || 
                        (typeof product.color === 'string' && 
                         product.color.toLowerCase() === filters.color.toLowerCase());
    
    return matchesPrice && matchesSize && matchesColor;
  });

  // Ordenar productos según el criterio seleccionado
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (filters.sortBy === 'priceAsc') {
      return parseFloat(a.precio) - parseFloat(b.precio);
    } else if (filters.sortBy === 'priceDesc') {
      return parseFloat(b.precio) - parseFloat(a.precio);
    }
    return 0;
  });

  const renderContent = () => {
    if (loading) return <LoadingState />;
    if (error) return <ErrorState message={error} />;
    return <ProductGrid products={sortedProducts} favoritos={favoritos} onFavoriteToggle={handleFavoriteToggle} />;
  };

  return (
    <div className="todos-productos-mujer">
      <div className="filter-section">
        <div className="category-menu-container">
          <CategoryMenu />
        </div>
        <div className="filter-button-container">
          <FilterButton onClick={() => setShowFilters(!showFilters)} />
        </div>
      </div>
      <div className="products-container">
        {showFilters && (
          <div className="filter-sidebar">
            <FilterPanel 
              onFilterChange={handleFilterChange}
              onClose={handleCloseFilters}
              filters={filters}
            />
          </div>
        )}
        {renderContent()}
      </div>
    </div>
  );
};

export default TodosProductosMujer; 