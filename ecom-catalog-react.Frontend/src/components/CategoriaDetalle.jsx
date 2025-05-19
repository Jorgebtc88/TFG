import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCategoriaBySlug } from '../data/categorias';
import './CategoriaDetalle.css';

/**
 * Componente CategoriaDetalle
 * Muestra la información detallada de una categoría específica
 * Incluye la lista de subcategorías y una descripción general
 */
const CategoriaDetalle = () => {
  const { slug } = useParams();
  const categoria = getCategoriaBySlug(slug);

  if (!categoria) {
    return (
      <div className="categoria-no-encontrada">
        <h2>Categoría no encontrada</h2>
        <Link to="/categorias" className="volver-link">
          Volver a categorías
        </Link>
      </div>
    );
  }

  return (
    <div className="categoria-detalle-container">
      <div className="categoria-header">
        <h1 className="categoria-titulo">{categoria.nombre}</h1>
        <Link to="/categorias" className="volver-link">
          ← Volver a categorías
        </Link>
      </div>

      <div className="subcategorias-grid">
        {categoria.subcategorias.map((subcategoria) => (
          <Link
            key={subcategoria.slug}
            to={`/categoria/${categoria.slug}/${subcategoria.slug}`}
            className="subcategoria-card"
          >
            <div className="subcategoria-contenido">
              <h3 className="subcategoria-nombre">{subcategoria.nombre}</h3>
              <p className="subcategoria-descripcion">{subcategoria.descripcion}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriaDetalle; 