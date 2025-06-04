import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import ProductCard from './ProductCard';
import './Favoritos.css';

const Favoritos = () => {
  const { user, isLoggedIn } = useAuth();
  const [favoritos, setFavoritos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavoritos = async () => {
      if (!isLoggedIn || !user?.token) {
        setError('Debes iniciar sesión para ver tus favoritos');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('http://localhost:8000/api/favoritos', {
          headers: {
            'Authorization': `Bearer ${user.token}`,
            'Content-Type': 'application/json'
          }
        });
        setFavoritos(response.data);
      } catch (error) {
        console.error('Error al cargar favoritos:', error);
        setError('Error al cargar tus favoritos');
      } finally {
        setLoading(false);
      }
    };

    fetchFavoritos();
  }, [isLoggedIn, user]);

  const handleFavoriteToggle = (productId) => {
    setFavoritos(favoritos.filter(fav => fav.producto.id !== productId));
  };

  if (loading) {
    return <div className="loading">Cargando favoritos...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!isLoggedIn) {
    return <div className="error">Debes iniciar sesión para ver tus favoritos</div>;
  }

  return (
    <div className="favoritos-container">
      <div className="favoritos-hero">
        <div className="favoritos-content">
          <h1>Mis Favoritos</h1>
          <p>Productos que te han gustado</p>
        </div>
      </div>

      <div className="products-container">
        {favoritos.length === 0 ? (
          <div className="no-favoritos">
            <p>No tienes productos favoritos aún</p>
          </div>
        ) : (
          <div className="products-grid">
            {favoritos.map((favorito) => (
              <ProductCard
                key={favorito.producto.id}
                product={favorito.producto}
                isFavorite={true}
                onFavoriteToggle={handleFavoriteToggle}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favoritos; 