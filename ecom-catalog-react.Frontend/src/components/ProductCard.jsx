/**
 * Componente ProductCard
 * 
 * Este componente representa una tarjeta de producto individual
 * que muestra la imagen, nombre, precio y botón de compra.
 * 
 * @component
 */
import React, { useState, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ 
  product, 
  showFavoriteButton = true 
}) => {
  const { user, isLoggedIn } = useAuth();
  const { favorites, toggleFavorite } = useFavorites();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const favoriteButtonRef = useRef(null);

  const handleFavoriteClick = async (e) => {
    e.preventDefault();
    if (!isLoggedIn || !user?.token) {
      navigate('/login');
      return;
    }
    setIsLoading(true);
    try {
      await toggleFavorite(product.id, favoriteButtonRef.current);
    } catch (error) {
      console.error('Error al actualizar favoritos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const isFavorite = favorites.includes(product.id);

  return (
    <div className="card product-card">
      <div className="image-container">
        <img 
          src={product.imagenUrl} 
          alt={product.nombre} 
          className="card-img-top product-image" 
        />
        {showFavoriteButton && (
          <button 
            ref={favoriteButtonRef}
            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
            onClick={handleFavoriteClick}
            disabled={isLoading}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill={isFavorite ? "currentColor" : "none"} 
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
        )}
      </div>
      <div className="card-body product-info">
        <h6 className="card-title product-title">{product.nombre}</h6>
        <p className="card-text">{product.descripcion}</p>
        <strong>{product.precio} €</strong>
        <div className="tallas-lista">
          {product.tallas && Array.isArray(product.tallas) && product.tallas.length > 0 && product.tallas.some(t => t && t.nombre)
            ? product.tallas.map(t => t.nombre).join(' · ')
            : 'Sin tallas'}
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 