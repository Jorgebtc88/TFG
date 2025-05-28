/**
 * Componente CamisetasHombre
 * 
 * Este componente representa la página de camisetas para la sección de hombres.
 * Incluye una sección hero con imagen de fondo y un grid para mostrar los productos.
 * 
 * @component
 * @requires React
 * @requires CamisetasHombre.css
 */
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './CamisetasHombre.css';

/**
 * URL base para la API de productos de camisetas de hombre
 * @constant {string}
 */
const API_URL = 'http://localhost:8000/api/productos/categoria/3';

/**
 * Componente que renderiza la sección hero de la página
 * @component
 * @returns {JSX.Element} Sección hero con título y descripción
 */
const HeroSection = () => (
  <div className="camisetas-hombre-hero">
    <div className="camisetas-hombre-content">
      <h1>Camisetas</h1>
      <p>Descubre nuestra colección de camisetas para hombre</p>
    </div>
  </div>
);

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


const ProductGrid = ({ products }) => (
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
);

/**
 * Componente principal de la página de camisetas de hombre
 * @component
 * @returns {JSX.Element} Página completa de camisetas de hombre
 */
const CamisetasHombre = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Efecto para cargar los productos al montar el componente
   * Realiza una petición a la API y actualiza el estado correspondiente
   */

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Realiza la petición a la API
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

  const renderContent = () => {
    if (loading) return <LoadingState />;
    if (error) return <ErrorState message={error} />;
    return <ProductGrid products={products} />;
  };

  return (
    <div className="camisetas-hombre-container">
      <HeroSection />
      <div className="camisetas-hombre-grid">
        {renderContent()}
      </div>
    </div>
  );
};

export default CamisetasHombre; 