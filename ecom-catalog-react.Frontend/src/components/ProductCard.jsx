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
import { useCart } from '../contexts/CartContext';
import { useNavigate, useLocation } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ 
  product, 
  showFavoriteButton = true 
}) => {
  const { user, isLoggedIn } = useAuth();
  const { favorites, toggleFavorite } = useFavorites();
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const favoriteButtonRef = useRef(null);

  const isFavoritesPage = location.pathname === '/favoritos';

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

  const handleAddToCart = async () => {
    if (!isLoggedIn) {
      setShowNotification(true);
      setNotificationMessage('Debes iniciar sesión para añadir productos al carrito');
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
      return;
    }

    try {
      setIsAddingToCart(true);
      await addToCart(product);
      setShowNotification(true);
      setNotificationMessage('Producto añadido al carrito');
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    } catch (error) {
      console.error('Error al añadir al carrito:', error);
      setShowNotification(true);
      setNotificationMessage('Error al añadir al carrito');
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    } finally {
      setIsAddingToCart(false);
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
        {isFavoritesPage && (
          <button 
            className="cart-btn"
            onClick={handleAddToCart}
            disabled={isAddingToCart}
            title="Agregar al carrito"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
              strokeWidth="2"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
              />
            </svg>
          </button>
        )}
        {showNotification && (
          <div className="cart-notification">
            {notificationMessage}
          </div>
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