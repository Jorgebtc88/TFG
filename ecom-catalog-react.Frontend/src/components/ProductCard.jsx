/**
 * Componente ProductCard
 * 
 * Este componente representa una tarjeta de producto individual
 * que muestra la imagen, nombre, precio y botón de compra.
 * 
 * @component
 */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ 
  product, 
  onFavoriteToggle, 
  isFavorite = false,
  showFavoriteButton = true 
}) => {
  const { user, isLoggedIn } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleFavoriteClick = async (e) => {
    e.preventDefault();
    if (!isLoggedIn || !user?.token) {
      navigate('/login');
      return;
    }
    setIsLoading(true);
    try {
      const headers = {
        'Authorization': `Bearer ${user.token}`,
        'Content-Type': 'application/json'
      };

      if (isFavorite) {
        await axios.delete(`http://localhost:8000/api/favoritos/${product.id}`, { headers });
      } else {
        await axios.post(`http://localhost:8000/api/favoritos/${product.id}`, {}, { headers });
      }
      
      if (onFavoriteToggle) {
        onFavoriteToggle(product.id);
      }
    } catch (error) {
      console.error('Error al actualizar favoritos:', error.response?.data || error.message);
    } finally {
      setIsLoading(false);
    }
  };

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
          {product.tallas && product.tallas.length > 0
            ? product.tallas.map(t => t.nombre).join(' · ')
            : 'Sin tallas'}
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 