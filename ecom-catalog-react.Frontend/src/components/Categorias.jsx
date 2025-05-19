import React from 'react';
import { Link } from 'react-router-dom';
import { categorias } from '../data/categorias';
import './Categorias.css';

/**
 * Componente Categorias
 * Muestra una cuadrícula de categorías principales con sus subcategorías
 * Cada categoría es un enlace que lleva a su página específica
 */
const Categorias = () => {
  return (
    <div className="categorias-container">
      <h2 className="categorias-titulo">Nuestras Categorías</h2>
      <div className="categorias-grid">
        {Object.values(categorias).map((categoria) => (
          <div key={categoria.slug} className="categoria-card">
            <Link to={`/categoria/${categoria.slug}`} className="categoria-link">
              <div className="categoria-contenido">
                <h3 className="categoria-nombre">{categoria.nombre}</h3>
                <ul className="subcategorias-lista">
                  {categoria.subcategorias.map((subcategoria) => (
                    <li key={subcategoria.slug}>
                      <Link 
                        to={`/categoria/${categoria.slug}/${subcategoria.slug}`}
                        className="subcategoria-link"
                      >
                        {subcategoria.nombre}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorias; 