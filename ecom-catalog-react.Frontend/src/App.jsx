/**
 * Componente principal de la aplicación
 * 
 * Este componente maneja el enrutamiento y la estructura principal de la aplicación.
 * Define todas las rutas disponibles y los componentes asociados a cada una.
 * 
 * @component
 */
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <Router>
        <div className="App">
          {/* Header fijo en todas las páginas */}
          <Header onCartClick={() => setIsCartOpen(true)} />
          
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
            
            {/* Ruta de autenticación */}
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            
            {/* Ruta del carrito */}
            <Route path="/carrito" element={<Cart />} />

            {/* Nueva ruta para Devoluciones */}
            <Route path="/devoluciones" element={<Devoluciones />} />
          </Routes>

          {/* Footer fijo en todas las páginas */}
          <Footer />

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
