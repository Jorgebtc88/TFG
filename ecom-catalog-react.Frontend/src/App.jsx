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
import { AuthProvider } from './contexts/AuthContext';
import { FavoritesProvider } from './contexts/FavoritesContext';
import { CartProvider } from './contexts/CartContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import AdminPanel from './components/admin/AdminPanel';
import AdminNav from './components/admin/AdminNav';

// Componentes de Layout
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import Newsletter from './Newsletter';

// Componentes de Categorías
import Hombres from './Hombres';
import Mujeres from './Mujeres';
import Colecciones from './pages/Colecciones';
import Favoritos from './components/Favoritos';

// Componentes de Categorías de Hombres
import CamisetasHombre from './components/CamisetasHombre';
import PantalonesHombre from './components/PantalonesHombre';
import ZapatosHombre from './components/ZapatosHombre';
import ChaquetasHombre from './components/ChaquetasHombre';

// Componentes de Categorías de Mujeres
import Camisetas from './components/Camisetas';
import Pantalones from './components/Pantalones';
import Vestidos from './components/Vestidos';
import Zapatos from './components/Zapatos';

// Componentes de Autenticación
import Login from './Login';
import Register from './Register';
import RecuperarContrasena from './RecuperarContrasena';

// Componentes de Carrito
import Cart from './Cart';

// Componentes de Información
import Devoluciones from './Devoluciones';
import Contacto from './Contacto';
import FaqAccordion from './FaqAccordion';
import FaqCategoria from './FaqCategoria';
import Envios from './Envios';
import SearchResult from './components/SearchResult';
import TodosProductosMujer from './pages/TodosProductosMujer';
import TodosProductosHombre from './pages/TodosProductosHombre';

function App() {
  // Estado para controlar la visibilidad del carrito
  const [isCartOpen, setIsCartOpen] = useState(false);

  /**
   * Componente que envuelve el header y lo muestra condicionalmente
   * No se muestra en la página de devoluciones
   */
  const HeaderWrapper = () => {
    const location = useLocation();
    if (location.pathname === '/devoluciones') {
      return null;
    }
    return <Header onCartClick={() => setIsCartOpen(true)} />;
  };

  /**
   * Componente que envuelve el footer y lo muestra condicionalmente
   * No se muestra en la página de devoluciones
   */
  const FooterWrapper = () => {
    const location = useLocation();
    if (location.pathname === '/devoluciones') {
      return null;
    }
    return <Footer />;
  };

  return (
    <AuthProvider>
      <FavoritesProvider>
        <CartProvider>
          <Router>
            <div className="min-h-screen bg-gray-100">
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
                    
                    {/* Rutas de categorías de Hombres */}
                    <Route path="/hombres" element={<Hombres />} />
                    <Route path="/hombres/camisetas" element={<CamisetasHombre />} />
                    <Route path="/hombres/pantalones" element={<PantalonesHombre />} />
                    <Route path="/hombres/zapatos" element={<ZapatosHombre />} />
                    <Route path="/hombres/chaquetas" element={<ChaquetasHombre />} />

                    {/* Rutas de categorías de Mujeres */}
                    <Route path="/mujeres" element={<Mujeres />} />
                    <Route path="/mujeres/camisetas" element={<Camisetas />} />
                    <Route path="/mujeres/pantalones" element={<Pantalones />} />
                    <Route path="/mujeres/vestidos" element={<Vestidos />} />
                    <Route path="/mujeres/zapatos" element={<Zapatos />} />
                    <Route path="/todos-productos-mujer" element={<TodosProductosMujer />} />
                    <Route path="/todos-productos-hombre" element={<TodosProductosHombre />} />
                    
                    {/* Ruta de favoritos */}
                    <Route path="/favoritos" element={<Favoritos />} />

                    {/* Ruta de colecciones */}
                    <Route path="/colecciones" element={<Colecciones />} />
                    
                    {/* Rutas de autenticación */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/registro" element={<Register />} />
                    <Route path="/recuperar-contrasena" element={<RecuperarContrasena />} />
                    
                    {/* Ruta del carrito */}
                    <Route path="/carrito" element={<Cart />} />

                    {/* Rutas de información */}
                    <Route path="/devoluciones" element={<Devoluciones />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/faq" element={<FaqAccordion />} />
                    <Route path="/faq/:slug" element={<FaqCategoria />} />
                    <Route path="/envios" element={<Envios />} />
                    
                    {/* Ruta de resultados de búsqueda */}
                    <Route path="/buscar" element={<SearchResult />} />

                    {/* Ruta del panel de administración */}
                    <Route
                      path="/admin"
                      element={
                        <ProtectedRoute requireAdmin={true}>
                          <AdminPanel />
                        </ProtectedRoute>
                      }
                    />
                  </Routes>
                </main>

                {/* Footer condicional */}
                <FooterWrapper />
              </div>
            </div>
          </Router>
        </CartProvider>
      </FavoritesProvider>
    </AuthProvider>
  );
}

export default App;
