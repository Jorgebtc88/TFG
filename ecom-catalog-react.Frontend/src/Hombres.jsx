import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import './Hombres.css';

const Hombres = () => {
  // Estados para manejar los productos, carga y errores
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Efecto para cargar los productos cuando el componente se monta
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/productos/genero/nombre/Hombres');
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
    <>
    <div className="hombres-container">
      <div className="hombres-content">
        <h1>Colección Hombres</h1>
        <p>Descubre nuestra nueva colección para hombres</p>
      </div>
    </div>

    <div className="hombres-section">
      {loading ? (
        <div className="loading">Cargando productos...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="hombres-grid">
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
   </>
  );
};

export default Hombres; 