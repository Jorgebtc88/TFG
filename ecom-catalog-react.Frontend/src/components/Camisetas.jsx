/**
 * Componente Camisetas
 * 
 * Este componente representa la página de camisetas para la sección de mujeres.
 * Incluye una sección hero y un grid de productos.
 * 
 * @component
 */
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './Camisetas.css';

const Camisetas = () => {
  // Estados para manejar los productos, carga y errores
  const [products, setProducts] = useState([]); // Array que almacena los productos
  const [loading, setLoading] = useState(true); // Indica si los datos están cargando
  const [error, setError] = useState(null); // Almacena cualquier error que ocurra

  // Efecto para cargar los productos cuando el componente se monta
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Realiza la petición a la API para obtener los productos
        const response = await fetch('http://localhost:8080/api/products');
        if (!response.ok) {
          throw new Error('Error al cargar los productos');
        }
        const data = await response.json();
        setProducts(data); // Actualiza el estado con los productos obtenidos
      } catch (err) {
        setError(err.message); // Maneja cualquier error que ocurra
      } finally {
        setLoading(false); // Indica que la carga ha terminado
      }
    };

    fetchProducts();
  }, []); // El array vacío significa que el efecto solo se ejecuta al montar el componente

  return (
    <div className="camisetas-container">
      {/* Sección hero con título y descripción */}
      <div className="camisetas-hero">
        <div className="camisetas-content">
          <h1>Camisetas</h1>
          <p>Descubre nuestra colección de camisetas para mujer</p>
        </div>
      </div>

      {/* Sección de grid que muestra los productos */}
      <div className="camisetas-grid">
        {loading ? (
          // Muestra un mensaje de carga mientras los datos se están obteniendo
          <div className="loading">Cargando productos...</div>
        ) : error ? (
          // Muestra un mensaje de error si algo falla
          <div className="error">{error}</div>
        ) : (
          // Muestra la lista de productos cuando los datos están disponibles
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

export default Camisetas;