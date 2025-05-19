/**
 * Componente Header
 * 
 * Este componente representa la barra de navegación superior de la aplicación.
 * Incluye el menú de navegación, el logo y los botones de acción (búsqueda, carrito y login).
 * 
 * @component
 */
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './context/CartContext';
import { categorias } from './data/categorias';
import './Header.css';

const Header = ({ onCartClick }) => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHombresMenuOpen, setIsHombresMenuOpen] = useState(false);
  const [isMujeresMenuOpen, setIsMujeresMenuOpen] = useState(false);

  // Referencias para los contenedores de los menús
  const hombresMenuRef = useRef(null);
  const mujeresMenuRef = useRef(null);

  // Obtener las subcategorías
  const subcategoriasHombres = categorias.hombres.subcategorias;
  const subcategoriasMujeres = categorias.mujeres.subcategorias;

  // Efecto para manejar el cierre del menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (hombresMenuRef.current && !hombresMenuRef.current.contains(event.target)) {
        setIsHombresMenuOpen(false);
      }
      if (mujeresMenuRef.current && !mujeresMenuRef.current.contains(event.target)) {
        setIsMujeresMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="main-header">
      {/* Botón de menú hamburguesa para móviles */}
      <button 
        className="menu-toggle" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {/* Menú de navegación izquierdo */}
      <nav className={`nav-left ${isMenuOpen ? 'nav-open' : ''}`}>
        <ul>
          <li>
            <Link to="/" className="nav-link home-link" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
          </li>
          <li 
            className="dropdown-container" 
            ref={mujeresMenuRef}
            onMouseEnter={() => setIsMujeresMenuOpen(true)}
            onMouseLeave={() => setIsMujeresMenuOpen(false)}
          >
            <Link 
              to="/mujeres"
              className="nav-link dropdown-trigger"
              onClick={() => setIsMujeresMenuOpen(!isMujeresMenuOpen)}
            >
              Mujeres
              <svg 
                className={`dropdown-arrow ${isMujeresMenuOpen ? 'open' : ''}`}
                width="12" 
                height="12" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </Link>
            <div className={`dropdown-menu ${isMujeresMenuOpen ? 'show' : ''}`}>
              {subcategoriasMujeres.map((subcategoria) => (
                <Link
                  key={subcategoria.slug}
                  to={`/categoria/mujeres/${subcategoria.slug}`}
                  className="dropdown-item"
                  onClick={() => {
                    setIsMujeresMenuOpen(false);
                    setIsMenuOpen(false);
                  }}
                >
                  {subcategoria.nombre}
                </Link>
              ))}
            </div>
          </li>
          <li 
            className="dropdown-container" 
            ref={hombresMenuRef}
            onMouseEnter={() => setIsHombresMenuOpen(true)}
            onMouseLeave={() => setIsHombresMenuOpen(false)}
          >
            <Link 
              to="/hombres"
              className="nav-link dropdown-trigger"
              onClick={() => setIsHombresMenuOpen(!isHombresMenuOpen)}
            >
              Hombres
              <svg 
                className={`dropdown-arrow ${isHombresMenuOpen ? 'open' : ''}`}
                width="12" 
                height="12" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </Link>
            <div className={`dropdown-menu ${isHombresMenuOpen ? 'show' : ''}`}>
              {subcategoriasHombres.map((subcategoria) => (
                <Link
                  key={subcategoria.slug}
                  to={`/categoria/hombres/${subcategoria.slug}`}
                  className="dropdown-item"
                  onClick={() => {
                    setIsHombresMenuOpen(false);
                    setIsMenuOpen(false);
                  }}
                >
                  {subcategoria.nombre}
                </Link>
              ))}
            </div>
          </li>
          <li>
            <Link to="/colecciones" className="nav-link" onClick={() => setIsMenuOpen(false)}>Colecciones</Link>
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
        <button onClick={onCartClick} className="icon-btn cart-link" aria-label="Carrito">
          {/* Carrito SVG */}
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          {totalItems > 0 && (
            <span className="cart-count">{totalItems}</span>
          )}
        </button>

        {/* Botón de inicio de sesión */}
        <Link to="/login" className="login-btn">Iniciar sesión</Link>
      </div>
    </header>
  );
};

export default Header; 