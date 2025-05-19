/**
 * Vista de preguntas frecuentes para una sola categoría
 * Muestra el acordeón de preguntas de la categoría seleccionada
 * Incluye botón para volver a la vista de categorías
 */
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categorias } from './FaqAccordion';
import './FaqAccordion.css';

const FaqCategoria = () => {
  // Obtiene el slug de la categoría desde la URL
  const { slug } = useParams();
  const navigate = useNavigate();
  // Busca la categoría correspondiente
  const categoria = categorias.find(cat => cat.slug === slug);
  // Estado para controlar qué pregunta está abierta
  const [open, setOpen] = useState({});

  // Si la categoría no existe, muestra mensaje de error
  if (!categoria) {
    return <div className="faq-accordion-container"><h2>Categoría no encontrada</h2></div>;
  }

  // Alterna la apertura/cierre de una pregunta
  const handleToggle = (qIdx) => {
    setOpen((prev) => ({
      ...prev,
      [qIdx]: !prev[qIdx]
    }));
  };

  return (
    <div className="faq-accordion-container">
      {/* Botón para volver a la vista de categorías */}
      <button className="faq-back-btn" onClick={() => navigate('/faq')}>← Volver a categorías</button>
      {/* Título de la categoría con ícono */}
      <h2 className="faq-category-title">{categoria.icono} {categoria.nombre}</h2>
      {/* Acordeón de preguntas */}
      {categoria.preguntas.map((item, qIdx) => (
        <div key={qIdx} className={`faq-item ${open[qIdx] ? 'open' : ''}`}>
          <div className="faq-question" onClick={() => handleToggle(qIdx)}>
            <span>{item.pregunta}</span>
            <span className={`arrow ${open[qIdx] ? 'rotated' : ''}`}>▼</span>
          </div>
          <div className="faq-answer">
            {open[qIdx] && <p>{item.respuesta}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqCategoria; 