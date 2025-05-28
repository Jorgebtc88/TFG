import React, { useState, useEffect } from 'react';
import './Zapatos.css';
import ProductCard from './ProductCard';

const Zapatos = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => { 
      try {
        const response = await fetch('http://localhost:8000/api/productos/categoria/4');
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
    <div className="zapatos-container">
      <div className="zapatos-hero">
        <div className="zapatos-content">
          <h1>Zapatos</h1>
          <p>Descubre nuestra colección de zapatos</p>
        </div>
      </div>
      <div className="zapatos-grid">
        {loading ? (
          <div className="loading">Cargando productos...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
          <div className="products-grid">
            {products.map(product => (
              <ProductCard 
              key={product.id} 
              product={{
                id: product.id,
                name: product.nombre,
                description: product.descripcion,
                price: product.precio,
                image: product.imagenUrl
              }} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Zapatos; 