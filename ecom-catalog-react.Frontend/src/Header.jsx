/**
 * Componente Header
 * 
 * Este componente representa la barra de navegación superior de la aplicación.
 * Incluye el menú de navegación, el logo y los botones de acción (búsqueda, carrito y login).
 * 
 * @component
 */
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      {/* Menú de navegación izquierdo */}
      <nav className="nav-left">
        <ul>
          <li>
            <Link to="/" className="nav-link home-link">Inicio</Link>
          </li>
          <li>
            <Link to="/mujeres" className="nav-link">Mujeres</Link>
          </li>
          <li>
            <Link to="/hombres" className="nav-link">Hombres</Link>
          </li>
          <li>
            <Link to="/coleccion" className="nav-link">Colección</Link>
          </li>
        </ul>
      </nav>

      {/* Logo central */}
      <div className="logo-center">
        <Link to="/" className="logo-link">
          <span className="logo-text">FASHION</span>
        </Link>
      </div>

      {/* Menú de acciones derechas */}
      <div className="nav-right">
        {/* Botón de búsqueda */}
        <button className="icon-btn" aria-label="Buscar">
          {/* Lupa SVG */}
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </button>

        {/* Botón del carrito */}
        <button className="icon-btn" aria-label="Carrito">
          {/* Carrito SVG */}
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        </button>

        {/* Botón de inicio de sesión */}
        <Link to="/login" className="login-btn">Iniciar sesión</Link>
      </div>
    </header>
  );
};

export default Header; 