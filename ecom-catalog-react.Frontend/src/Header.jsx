/**
 * Componente Header
 * 
 * Este componente representa la barra de navegación superior de la aplicación.
 * Incluye el menú de navegación, el logo y los botones de acción (búsqueda, carrito y login).
 * 
 * @component
 */
import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './context/CartContext';
import './Header.css';
import SearchPreviewPortal from './components/SearchPreviewPortal';

const Header = ({ onCartClick }) => {
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHombresMenuOpen, setIsHombresMenuOpen] = useState(false);
  const [isMujeresMenuOpen, setIsMujeresMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchPanelRef = useRef(null);
  const searchTimeoutRef = useRef(null);

  // Referencias para los contenedores de los menús
  const hombresMenuRef = useRef(null);
  const mujeresMenuRef = useRef(null);

  // Efecto para manejar el cierre del menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (hombresMenuRef.current && !hombresMenuRef.current.contains(event.target)) {
        setIsHombresMenuOpen(false);
      }
      if (mujeresMenuRef.current && !mujeresMenuRef.current.contains(event.target)) {
        setIsMujeresMenuOpen(false);
      }
      if (searchPanelRef.current && !searchPanelRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Efecto para la búsqueda en tiempo real
  useEffect(() => {
    if (searchTerm.trim()) {
      // Limpiar el timeout anterior
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }

      // Establecer un nuevo timeout para evitar demasiadas peticiones
      searchTimeoutRef.current = setTimeout(async () => {
        setIsLoading(true);
        try {
          const response = await fetch(`http://localhost:8000/api/productos/buscar/categoria/${encodeURIComponent(searchTerm)}`);
          if (!response.ok) {
            throw new Error('Error en la búsqueda');
          }
          const products = await response.json();
          setSearchResults(products);
        } catch (error) {
          console.error('Error:', error);
          setSearchResults([]);
        } finally {
          setIsLoading(false);
        }
      }, 300); // Esperar 300ms después de que el usuario deje de escribir
    } else {
      setSearchResults([]);
    }

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchTerm]);

  // Bloquear scroll del body cuando la búsqueda está abierta
  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSearchOpen]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setIsSearchOpen(false);
      navigate(`/buscar/${encodeURIComponent(searchTerm)}`, { state: { products: searchResults, searchTerm } });
    }
  };

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
              <Link to="/mujeres/camisetas" className="dropdown-item">Camisetas</Link>
              <Link to="/mujeres/pantalones" className="dropdown-item">Pantalones</Link>
              <Link to="/mujeres/vestidos" className="dropdown-item">Vestidos</Link>
              <Link to="/mujeres/zapatos" className="dropdown-item">Zapatos</Link>
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
              <Link to="/hombres/camisetas" className="dropdown-item">Camisetas</Link>
              <Link to="/hombres/pantalones" className="dropdown-item">Pantalones</Link>
              <Link to="/hombres/chaquetas" className="dropdown-item">Chaquetas</Link>
              <Link to="/hombres/zapatos" className="dropdown-item">Zapatos</Link>
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
        <button 
          className="icon-btn" 
          aria-label="Buscar"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </button>

        {/* Botón del carrito */}
        <button onClick={onCartClick} className="icon-btn cart-link" aria-label="Carrito">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          {totalItems > 0 && (
            <span className="cart-count">{totalItems}</span>
          )}
        </button>

        {/* Botón de inicio de sesión */}
        <Link to="/login" className="login-btn">Iniciar sesión</Link>
      </div>

      {/* Panel de búsqueda */}
      {isSearchOpen && (
        <SearchPreviewPortal>
          <div className="search-results-preview" ref={searchPanelRef}>
            <form className="search-form" onSubmit={handleSearch} autoComplete="off">
              <div className="search-input-container">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                  autoFocus
                />
                <button 
                  className="close-search-button" 
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  aria-label="Cerrar búsqueda"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              {/* Resultados de búsqueda en tiempo real */}
              {isLoading ? (
                <div className="search-results-loading">
                  <p>Buscando...</p>
                </div>
              ) : searchResults.length > 0 ? (
                <>
                  <div className="search-results-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2vw 0.5rem 2vw'}}>
                    <h4 style={{margin: 0, fontSize: '0.98rem', fontWeight: 500, color: '#333'}}>{searchResults.length} resultado{searchResults.length !== 1 ? 's' : ''}</h4>
                    <button
                      className="search-view-all-btn"
                      style={{background: 'none', border: 'none', color: '#1d1a1a', fontWeight: 500, cursor: 'pointer', fontSize: '0.95rem', padding: 0, marginLeft: '1rem'}}
                      onClick={() => {
                        setIsSearchOpen(false);
                        navigate(`/buscar/${encodeURIComponent(searchTerm)}`, { state: { products: searchResults, searchTerm } });
                      }}
                    >
                      Ver todo
                    </button>
                  </div>
                  <div className="search-results-list">
                    {searchResults.slice(0, 4).map((product) => (
                      <div 
                        key={product.id} 
                        className="search-result-item"
                        onClick={() => {
                          setIsSearchOpen(false);
                          navigate(`/buscar/${encodeURIComponent(searchTerm)}`, { 
                            state: { products: searchResults, searchTerm } 
                          });
                        }}
                      >
                        <img src={product.imagenUrl} alt={product.nombre} className="search-result-image" />
                        <div className="search-result-info">
                          <h5>{product.nombre}</h5>
                          <p>{product.categoria?.nombre}</p>
                          <p className="search-result-price">{product.precio}€</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : searchTerm.trim() ? (
                <div className="search-results-empty">
                  <p>No se encontraron productos para "{searchTerm}"</p>
                </div>
              ) : null}
            </form>
          </div>
        </SearchPreviewPortal>
      )}
    </header>
  );
};

export default Header; 