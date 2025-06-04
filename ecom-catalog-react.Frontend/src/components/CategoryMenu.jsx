import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './CategoryMenu.css';

const CategoryMenu = () => {
  const location = useLocation();
  
  const categories = [
    { id: 0, name: 'Todos', path: '/mujeres/todos' },
    { id: 1, name: 'Camisetas', path: '/mujeres/camisetas' },
    { id: 2, name: 'Pantalones', path: '/mujeres/pantalones' },
    { id: 3, name: 'Vestidos', path: '/mujeres/vestidos' },
    { id: 4, name: 'Zapatos', path: '/mujeres/zapatos' },
    { id: 5, name: 'Accesorios', path: '/mujeres/accesorios' }
  ];

  return (
    <nav className="category-menu">
      <ul>
        {categories.map((category) => (
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