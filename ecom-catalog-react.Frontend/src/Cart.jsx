import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, totalItems, updateQuantity, removeFromCart, clearCart } = useCart();

  // Calcular el total
  const total = cartItems.reduce((sum, item) => sum + (item.precio * item.quantity), 0);

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon" style={{ marginBottom: '1.5rem' }}>
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#e26d4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </div>
          <p style={{ fontWeight: 500, fontSize: '1.25rem', color: '#444' }}>Tu carrito está vacío</p>
          <Link to="/" className="continue-shopping" style={{ background: '#e26d4a', fontWeight: 600, fontSize: '1.1rem', marginTop: '1.2rem' }}>
            Continuar Comprando
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.imagenUrl} alt={item.nombre} className="item-image" />
                <div className="item-details">
                  <h3>{item.nombre}</h3>
                  <p className="item-price">{item.precio}€</p>
                </div>
                <div className="quantity-controls">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                  title="Eliminar producto"
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>{total.toFixed(2)}€</span>
            </div>
            <div className="summary-row">
              <span>Envío:</span>
              <span>Gratis</span>
            </div>
            <div className="summary-row total" style={{ color: '#e26d4a', fontSize: '1.3rem' }}>
              <span>Total:</span>
              <span>{total.toFixed(2)}€</span>
            </div>
            <button className="checkout-btn" style={{ boxShadow: '0 2px 8px rgba(226,109,74,0.12)', fontWeight: 700 }}>
              Proceder al Pago
            </button>
            <button onClick={clearCart} className="clear-cart-btn">
              Vaciar Carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart; 