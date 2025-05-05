import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <nav className="nav-left">
        <ul>
          <li className="active">Inicio</li>
          <li>Hombres</li>
          <li>Mujeres</li>
          <li>Colección</li>
        </ul>
      </nav>
      <div className="logo-center">
        <span className="logo-text">FASHION</span>
      </div>
      <div className="nav-right">
        <button className="icon-btn" aria-label="Buscar">
          {/* Lupa SVG */}
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </button>
        <button className="icon-btn" aria-label="Carrito">
          {/* Carrito SVG */}
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        </button>
        <button className="login-btn">Iniciar sesión</button>
      </div>
    </header>
  );
};

export default Header; 