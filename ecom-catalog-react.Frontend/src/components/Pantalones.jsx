/**
 * Componente Pantalones
 * Muestra la sección de pantalones para mujeres con una sección hero y grid de productos
 */

import React, { useState, useEffect } from 'react';
import './Pantalones.css';
import ProductCard from './ProductCard';

const Pantalones = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Asumiendo que el ID 3 es para la categoría de pantalones de mujer
        const response = await fetch('http://localhost:8000/api/productos/categoria/3');
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

  return (
    <div className="pantalones-container">
      <div className="pantalones-hero">
        <div className="pantalones-content">
          <h1>Pantalones</h1>
          <p>Descubre nuestra colección de pantalones.</p>
        </div>
      </div>
      <div className="pantalones-grid">
        {loading ? (
          <div className="loading">Cargando productos...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Pantalones;