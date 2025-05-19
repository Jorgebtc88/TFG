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
import Colecciones from './pages/Colecciones';
import Login from './Login';
import Register from './Register';
import Cart from './Cart';
import { CartProvider } from './context/CartContext';
import Devoluciones from './Devoluciones';
import RecuperarContrasena from './RecuperarContrasena';
import Contacto from './Contacto';
import FaqAccordion from './FaqAccordion';
import FaqCategoria from './FaqCategoria';
import Envios from './Envios';
import Categorias from './components/Categorias';
import CategoriaDetalle from './components/CategoriaDetalle';
import SubcategoriaDetalle from './components/SubcategoriaDetalle';

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
          
          <main className="main-content">
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
              <Route path="/colecciones" element={<Colecciones />} />
              
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

              {/* Nueva ruta para FaqAccordion */}
              <Route path="/faq" element={<FaqAccordion />} />

              {/* Nueva ruta para FaqCategoria */}
              <Route path="/faq/:slug" element={<FaqCategoria />} />

              {/* Nueva ruta para Envios */}
              <Route path="/envios" element={<Envios />} />

              {/* Nueva ruta para categorías */}
              <Route path="/categorias" element={<Categorias />} />
              <Route path="/categoria/:slug" element={<CategoriaDetalle />} />
              <Route path="/categoria/:categoriaSlug/:subcategoriaSlug" element={<SubcategoriaDetalle />} />
            </Routes>
          </main>

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
