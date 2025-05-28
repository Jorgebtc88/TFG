/**
 * Componente ZapatosHombre
 * 
 * Este componente representa la página de zapatos para la sección de hombres.
 * Incluye una sección hero con imagen de fondo y un grid para mostrar los productos.
 * 
 * @component
 * @requires React
 * @requires ZapatosHombre.css
 */
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './ZapatosHombre.css';

/**
 * URL base para la API de productos de zapatos de hombre
 * @constant {string}
 */
const API_URL = 'http://localhost:8000/api/productos/categoria/8';

/**
 * Componente que renderiza la sección hero de la página
 * @component
 * @returns {JSX.Element} Sección hero con título y descripción
 */
const HeroSection = () => (
  <div className="zapatos-hombre-hero">
    <div className="zapatos-hombre-content">
      <h1>Zapatos</h1>
      <p>Descubre nuestra colección de zapatos para hombre</p>
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

/**
 * Componente que renderiza la cuadrícula de productos
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Array} props.products - Lista de productos a mostrar
 * @returns {JSX.Element} Cuadrícula de productos
 */
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
 * Componente principal de la página de zapatos de hombre
 * @component
 * @returns {JSX.Element} Página completa de zapatos de hombre
 */
const ZapatosHombre = () => {
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
    <div className="zapatos-hombre-container">
      <HeroSection />
      <div className="zapatos-hombre-grid">
        {renderContent()}
      </div>
    </div>
  );
};

export default ZapatosHombre; 