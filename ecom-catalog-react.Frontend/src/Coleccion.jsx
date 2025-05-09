import React from 'react';
import './Coleccion.css';

const Coleccion = () => {
  return (
    <section id="coleccion" className="coleccion-section">
      <h1>Nuestra Colección</h1>
      <p className="coleccion-description">
        Explora nuestras colecciones exclusivas, diseñadas con las últimas tendencias en moda.
      </p>
      <div className="coleccion-grid">
        <div className="coleccion-item">
          <h2>Colección Verano</h2>
          <p>Descubre las prendas más frescas y vibrantes para esta temporada.</p>
        </div>
        <div className="coleccion-item">
          <h2>Colección Invierno</h2>
          <p>Abraza el frío con estilo y elegancia.</p>
        </div>
        <div className="coleccion-item">
          <h2>Colección Casual</h2>
          <p>Estilo cómodo y moderno para el día a día.</p>
        </div>
        <div className="coleccion-item">
          <h2>Colección Formal</h2>
          <p>Elegancia y sofisticación para ocasiones especiales.</p>
        </div>
      </div>
    </section>
  );
};

export default Coleccion; 