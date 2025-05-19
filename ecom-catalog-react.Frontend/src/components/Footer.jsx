import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/hombres">Hombres</Link></li>
            <li><Link to="/mujeres">Mujeres</Link></li>
            <li><Link to="/coleccion">Colección</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Información</h3>
          <ul>
            <li><Link to="/envios">Envíos</Link></li>
            <li><Link to="/faq">Preguntas Frecuentes</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/privacidad">Política de Privacidad</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <ul>
            <li>Email: info@ecomcatalog.com</li>
            <li>Teléfono: +34 900 123 456</li>
            <li>Dirección: Calle Principal 123, Madrid</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 EcomCatalog. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer; 