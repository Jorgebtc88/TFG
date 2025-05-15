/**
 * Componente principal de la aplicación
 * 
 * Este componente maneja el enrutamiento y la estructura principal de la aplicación.
 * Define todas las rutas disponibles y los componentes asociados a cada una.
 * 
 * @component
 */
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import Newsletter from './Newsletter';
import Hombres from './Hombres';
import Mujeres from './Mujeres';
import Coleccion from './Coleccion';
import Login from './Login';
import Register from './Register';
import Cart from './Cart';
import { CartProvider } from './context/CartContext';
import Devoluciones from './Devoluciones';
import RecuperarContrasena from './RecuperarContrasena';
import Contacto from './Contacto';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Componente que envuelve el header y lo muestra condicionalmente
  const HeaderWrapper = () => {
    const location = useLocation();
    // No mostrar el header en la página de devoluciones
    if (location.pathname === '/devoluciones') {
      return null;
    }
    return <Header onCartClick={() => setIsCartOpen(true)} />;
  };

  // Componente que envuelve el footer y lo muestra condicionalmente
  const FooterWrapper = () => {
    const location = useLocation();
    // No mostrar el footer en la página de devoluciones
    if (location.pathname === '/devoluciones') {
      return null;
    }
    return <Footer />;
  };

  return (
    <CartProvider>
      <Router>
        <div className="App">
          {/* Header condicional */}
          <HeaderWrapper />
          
          {/* Sistema de rutas */}
          <Routes>
            {/* Ruta principal con Hero y Newsletter */}
            <Route path="/" element={
              <>
                <Hero />
                <Newsletter />
              </>
            } />
            
            {/* Rutas de categorías */}
            <Route path="/hombres" element={<Hombres />} />
            <Route path="/mujeres" element={<Mujeres />} />
            <Route path="/coleccion" element={<Coleccion />} />
            
            {/* Rutas de autenticación */}
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/recuperar-contrasena" element={<RecuperarContrasena />} />
            
            {/* Ruta del carrito */}
            <Route path="/carrito" element={<Cart isOpen={true} onClose={() => {}} />} />

            {/* Nueva ruta para Devoluciones */}
            <Route path="/devoluciones" element={<Devoluciones />} />

            {/* Nueva ruta para Contacto */}
            <Route path="/contacto" element={<Contacto />} />
          </Routes>

          {/* Footer condicional */}
          <FooterWrapper />

          {/* Carrito flotante */}
          <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          {isCartOpen && (
            <div 
              className="cart-overlay" 
              onClick={() => setIsCartOpen(false)}
            />
          )}
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
