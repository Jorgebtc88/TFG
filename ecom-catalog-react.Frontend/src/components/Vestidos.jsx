/**
 * Componente Vestidos
 * Muestra la sección de vestidos para mujeres con una sección hero y grid de productos
 */

import React, { useState, useEffect } from 'react';
import './Vestidos.css';
import ProductCard from './ProductCard';

const Vestidos = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Asumiendo que el ID 3 es para la categoría de vestidos
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
    <div className="vestidos-container">
      <div className="vestidos-hero">
        <div className="vestidos-content">
          <h1>Vestidos</h1>
          <p>Descubre nuestra colección de vestidos.</p>
        </div>
      </div>
      <div className="vestidos-grid">
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

export default Vestidos; 