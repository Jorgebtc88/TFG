import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCategoriaBySlug, getSubcategoria } from '../data/categorias';
import './SubcategoriaDetalle.css';

/**
 * Componente SubcategoriaDetalle
 * Muestra la información detallada de una subcategoría específica
 * Incluye la descripción y un espacio para mostrar los productos
 */
const SubcategoriaDetalle = () => {
  const { categoriaSlug, subcategoriaSlug } = useParams();
  const categoria = getCategoriaBySlug(categoriaSlug);
  const subcategoria = getSubcategoria(categoriaSlug, subcategoriaSlug);

  if (!categoria || !subcategoria) {
    return (
      <div className="subcategoria-no-encontrada">
        <h2>Subcategoría no encontrada</h2>
        <Link to="/categorias" className="volver-link">
          Volver a categorías
        </Link>
      </div>
    );
  }

  return (
    <div className="subcategoria-detalle-container">
      <div className="subcategoria-header">
        <div className="breadcrumb">
          <Link to="/categorias">Categorías</Link>
          <span> / </span>
          <Link to={`/categoria/${categoria.slug}`}>{categoria.nombre}</Link>
          <span> / </span>
          <span className="current">{subcategoria.nombre}</span>
        </div>
      </div>

      <div className="subcategoria-content">
        <h1 className="subcategoria-titulo">{subcategoria.nombre}</h1>
        <p className="subcategoria-descripcion">{subcategoria.descripcion}</p>

        {/* Aquí irá el grid de productos cuando se implemente */}
        <div className="productos-placeholder">
          <p>Los productos de esta subcategoría se mostrarán aquí próximamente.</p>
        </div>
      </div>
    </div>
  );
};

export default SubcategoriaDetalle; 