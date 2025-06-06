import React, { useState, useEffect } from 'react';
import './Hombres.css';

const Hombres = () => {
  // Estados para manejar los productos, carga y errores
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/productos/genero/nombre/Hombres');
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

  const productsToShow = showAll ? products : products.slice(0, 4);

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
          <>
            <div className="hombres-grid">
              {productsToShow.map((product) => (
                <div className="card product-card" key={product.id}>
                  <div className="image-container">
                    <img src={product.imagenUrl} alt={product.nombre} className="card-img-top product-image" />
                  </div>
                  <div className="card-body product-info">
                    <h6 className="card-title product-title">{product.nombre}</h6>
                    <p className="card-text">{product.descripcion}</p>
                    <strong>{product.precio} €</strong>
                    <div className="tallas-lista">
                      {product.tallas && product.tallas.length > 0
                        ? product.tallas.map(t => t.nombre).join(' · ')
                        : 'Sin tallas'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="ver-todo-container">
              <button 
                className="ver-todo-btn" 
                onClick={() => setShowAll(true)}
              >
                Ver todo
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Hombres; 