import React, { useState } from 'react';
import './FilterPanel.css';

const FilterPanel = ({ onFilterChange, onClose }) => {
  const [filters, setFilters] = useState({
    priceRange: { min: 0, max: 250 },
    sortBy: 'priceAsc',
    size: '',
    color: ''
  });

  const handlePriceChange = (type, value) => {
    const newFilters = {
      ...filters,
      priceRange: {
        ...filters.priceRange,
        [type]: Number(value)
      }
    };
    setFilters(newFilters);
  };

  const handleSortChange = (sortBy) => {
    const newFilters = {
      ...filters,
      sortBy
    };
    setFilters(newFilters);
  };

  const handleSizeChange = (size) => {
    const newFilters = {
      ...filters,
      size
    };
    setFilters(newFilters);
  };

  const handleColorChange = (color) => {
    const newFilters = {
      ...filters,
      color
    };
    setFilters(newFilters);
  };

  const handleApplyFilters = () => {
    onFilterChange(filters);
  };

  return (
    <div className="filter-panel">
      <div className="filter-header">
        <h3>Filtros</h3>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
      
      {/* Ordenar por precio */}
      <div className="filter-section">
        <h4>Ordenar por precio</h4>
        <div className="sort-options">
          <button
            className={filters.sortBy === 'priceAsc' ? 'active' : ''}
            onClick={() => handleSortChange('priceAsc')}
          >
            PRECIO ASCENDENTE
          </button>
          <button
            className={filters.sortBy === 'priceDesc' ? 'active' : ''}
            onClick={() => handleSortChange('priceDesc')}
          >
            PRECIO DESCENDENTE
          </button>
        </div>
      </div>

      {/* Filtro de Precio con Slider */}
      <div className="filter-section">
        <h4>Rango de Precio</h4>
        <div className="price-slider">
          <input
            type="range"
            min="0"
            max="250"
            value={filters.priceRange.max}
            onChange={(e) => handlePriceChange('max', e.target.value)}
            className="price-range"
          />
          <div className="price-values">
            <span>0€</span>
            <span>{filters.priceRange.max}€</span>
          </div>
        </div>
      </div>

      {/* Filtro de Color */}
      <div className="filter-section">
        <h4>Color</h4>
        <div className="color-options">
          <button
            className={`color-button ${filters.color === 'negro' ? 'active' : ''}`}
            style={{ backgroundColor: '#000' }}
            onClick={() => handleColorChange('negro')}
          />
          <button
            className={`color-button ${filters.color === 'blanco' ? 'active' : ''}`}
            style={{ backgroundColor: '#fff', border: '1px solid #ddd' }}
            onClick={() => handleColorChange('blanco')}
          />
          <button
            className={`color-button ${filters.color === 'azul' ? 'active' : ''}`}
            style={{ backgroundColor: '#0066cc' }}
            onClick={() => handleColorChange('azul')}
          />
          <button
            className={`color-button ${filters.color === 'rojo' ? 'active' : ''}`}
            style={{ backgroundColor: '#cc0000' }}
            onClick={() => handleColorChange('rojo')}
          />
          <button
            className={`color-button ${filters.color === 'verde' ? 'active' : ''}`}
            style={{ backgroundColor: '#006633' }}
            onClick={() => handleColorChange('verde')}
          />
          <button
            className={`color-button ${filters.color === 'marron' ? 'active' : ''}`}
            style={{ backgroundColor: '#8B4513' }}
            onClick={() => handleColorChange('marron')}
          />
        </div>
      </div>

      {/* Filtro de Talla */}
      <div className="filter-section">
        <h4>Talla</h4>
        <div className="size-options">
          <button
            className={filters.size === 'S' ? 'active' : ''}
            onClick={() => handleSizeChange('S')}
          >
            S
          </button>
          <button
            className={filters.size === 'M' ? 'active' : ''}
            onClick={() => handleSizeChange('M')}
          >
            M
          </button>
          <button
            className={filters.size === 'L' ? 'active' : ''}
            onClick={() => handleSizeChange('L')}
          >
            L
          </button>
          <button
            className={filters.size === 'XL' ? 'active' : ''}
            onClick={() => handleSizeChange('XL')}
          >
            XL
          </button>
        </div>
      </div>

      <button className="apply-filters-button" onClick={handleApplyFilters}>
        Ver resultados
      </button>
    </div>
  );
};

export default FilterPanel; 