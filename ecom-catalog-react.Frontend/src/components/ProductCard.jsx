/**
 * Componente ProductCard
 * 
 * Este componente representa una tarjeta de producto individual
 * que muestra la imagen, nombre, precio y botón de compra.
 * 
 * @component
 */
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { name, price, image, description } = product;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">{price}€</p>
        <button className="add-to-cart-btn">Añadir al carrito</button>
      </div>
    </div>
  );
};

export default ProductCard; 