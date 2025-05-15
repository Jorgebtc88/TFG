import React, { useState } from 'react';
import './Coleccion.css';

const Coleccion = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    '/images/Coleciones1.jpg',
    '/images/Coleciones2.jpg',
    '/images/Colecciones3.jpg'
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="coleccion-container">
      <div className="carousel-wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-card ${index === currentImage ? 'active' : ''} 
                       ${index === (currentImage - 1 + images.length) % images.length ? 'prev' : ''}
                       ${index === (currentImage + 1) % images.length ? 'next' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <button className="nav-button prev" onClick={prevImage}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button className="nav-button next" onClick={nextImage}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Coleccion; 