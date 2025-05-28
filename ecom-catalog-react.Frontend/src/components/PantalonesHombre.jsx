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

const PantalonesHombre = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Ajusta el ID de la categoría si es necesario para pantalones de hombre
        const response = await fetch('http://localhost:8000/api/productos/categoria/7');
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
    <div className="pantalones-hombre-container">
      {/* Sección Hero con imagen de fondo y texto */}
      <div className="pantalones-hombre-hero">
        <div className="pantalones-hombre-content">
          <h1>Pantalones</h1>
          <p>Descubre nuestra colección de pantalones para hombre</p>
        </div>
      </div>

      {/* Grid de productos - Pendiente de implementar */}
      <div className="pantalones-hombre-grid">
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

export default PantalonesHombre; 