import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categorias } from './FaqAccordion';
import './FaqAccordion.css';

const FaqCategoria = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const categoria = categorias.find(cat => cat.slug === slug);
  const [open, setOpen] = useState({});

  if (!categoria) {
    return <div className="faq-accordion-container"><h2>Categoría no encontrada</h2></div>;
  }

  const handleToggle = (qIdx) => {
    setOpen((prev) => ({
      ...prev,
      [qIdx]: !prev[qIdx]
    }));
  };

  return (
    <div className="faq-accordion-container">
      <button className="faq-back-btn" onClick={() => navigate('/faq')}>← Volver a categorías</button>
      <h2 className="faq-category-title">{categoria.icono} {categoria.nombre}</h2>
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