import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './CategoryMenu.css';

const CategoryMenu = () => {
  const location = useLocation();
  
  const categories = [
    { id: 0, name: 'Todos', path: '/todos-productos-mujer' },
    { id: 1, name: 'Camisetas', path: '/mujeres/camisetas' },
    { id: 2, name: 'Pantalones', path: '/mujeres/pantalones' },
    { id: 3, name: 'Vestidos', path: '/mujeres/vestidos' },
    { id: 4, name: 'Zapatos', path: '/mujeres/zapatos' },
    { id: 5, name: 'Colecciones', path: '/colecciones' }
  ];

  const categoriesHombre = [
    { id: 0, name: 'Todos', path: '/todos-productos-hombre' },
    { id: 1, name: 'Camisetas', path: '/hombres/camisetas' },
    { id: 2, name: 'Pantalones', path: '/hombres/pantalones' },
    { id: 3, name: 'Chaquetas', path: '/hombres/chaquetas' },
    { id: 4, name: 'Zapatos', path: '/hombres/zapatos' },
    { id: 5, name: 'Colecciones', path: '/colecciones' }
  ];

  // Determinar qué categorías mostrar basado en la ruta actual
  const isHombreSection = location.pathname.includes('/hombres') || location.pathname === '/todos-productos-hombre';
  const currentCategories = isHombreSection ? categoriesHombre : categories;

  return (
    <nav className="category-menu">
      <ul>
        {currentCategories.map((category) => (
          <li 
            key={category.id} 
            className={location.pathname === category.path ? 'active' : ''}
          >
            <Link to={category.path}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryMenu; 