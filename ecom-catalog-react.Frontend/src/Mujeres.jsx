import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import './Mujeres.css';

const Mujeres = () => {
  // Estados para manejar los productos, carga y errores
  const [products, setProducts] = useState([]); // Array que almacena los productos
  const [loading, setLoading] = useState(true); // Indica si los datos están cargando
  const [error, setError] = useState(null); // Almacena cualquier error que ocurra
  const [showAll, setShowAll] = useState(false); // Controla si se muestran todos los productos

  // Efecto para cargar los productos cuando el componente se monta
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Realiza la petición a la API para obtener los productos de la categoría mujeres
        const response = await fetch('http://localhost:8000/api/productos/genero/nombre/Mujeres');
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

  // Determina los productos a mostrar
  const productsToShow = showAll ? products : products.slice(0, 4);

  return (
    <>
      <div className="mujeres-container">
        <div className="mujeres-content">
          <h1>Colección Mujeres</h1>
          <p>Descubre nuestra nueva colección para mujeres</p>
        </div>
      </div>

      <div className="mujeres-section">
        {loading ? (
          <div className="loading">Cargando productos...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
          <>
            <div className="mujeres-grid">
              {productsToShow.map((product) => (
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
            {!showAll && products.length > 4 && (
              <div style={{textAlign: 'center', marginTop: '2rem'}}>
                <button 
                  className="ver-todo-btn" 
                  style={{
                    background: '#1d1a1a', color: 'white', border: 'none', borderRadius: '20px', padding: '0.7rem 2.5rem', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', letterSpacing: '0.5px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)'}}
                  onClick={() => setShowAll(true)}
                >
                  Ver todo
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Mujeres; 