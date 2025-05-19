/**
 * Componente de Búsqueda de Envíos
 * 
 * Este componente permite a los usuarios buscar información sobre sus envíos
 * utilizando dos métodos diferentes:
 * 1. Búsqueda por correo electrónico y código postal
 * 2. Búsqueda por número de pedido
 * 
 * @component
 */
import React, { useState } from 'react';
import './Envios.css';

const Envios = () => {
  // Estados para controlar el tipo de búsqueda y los valores de los formularios
  const [searchType, setSearchType] = useState('email'); // 'email' o 'pedido'
  const [email, setEmail] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [pedido, setPedido] = useState('');

  /**
   * Maneja el envío del formulario de búsqueda por email
   * @param {Event} e - Evento del formulario
   */
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // TODO: Implementar la lógica de búsqueda por email y código postal
    console.log('Buscando por email:', email, 'y código postal:', codigoPostal);
  };

  /**
   * Maneja el envío del formulario de búsqueda por número de pedido
   * @param {Event} e - Evento del formulario
   */
  const handlePedidoSubmit = (e) => {
    e.preventDefault();
    // TODO: Implementar la lógica de búsqueda por número de pedido
    console.log('Buscando por pedido:', pedido);
  };

  return (
    <div className="envios-container">

      {/* Sección de búsqueda de envíos */}
      <div className="envios-search-section">
        
        {/* Botones para seleccionar el tipo de búsqueda */}
        <div className="search-type-buttons">
          <button 
            className={`search-type-btn ${searchType === 'email' ? 'active' : ''}`}
            onClick={() => setSearchType('email')}
          >
            Buscar por Correo Electrónico
          </button>
          <button 
            className={`search-type-btn ${searchType === 'pedido' ? 'active' : ''}`}
            onClick={() => setSearchType('pedido')}
          >
            Buscar por Número de Pedido
          </button>
        </div>

        {/* Formularios de búsqueda */}
        <div className="search-forms">
          {searchType === 'email' ? (
            // Formulario de búsqueda por email y código postal
            <form onSubmit={handleEmailSubmit} className="search-form">
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Introduce tu correo electrónico"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="codigoPostal">Código Postal</label>
                <input
                  type="text"
                  id="codigoPostal"
                  value={codigoPostal}
                  onChange={(e) => setCodigoPostal(e.target.value)}
                  placeholder="Introduce tu código postal"
                  pattern="[0-9]{5}"
                  maxLength="5"
                  required
                />
              </div>
              <button type="submit" className="search-submit-btn">
                Buscar Envíos
              </button>
            </form>
          ) : (
            // Formulario de búsqueda por número de pedido
            <form onSubmit={handlePedidoSubmit} className="search-form">
              <div className="form-group">
                <label htmlFor="pedido">Número de Pedido</label>
                <input
                  type="text"
                  id="pedido"
                  value={pedido}
                  onChange={(e) => setPedido(e.target.value)}
                  placeholder="Introduce tu número de pedido"
                  required
                />
              </div>
              <button type="submit" className="search-submit-btn">
                Buscar Envío
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Envios; 