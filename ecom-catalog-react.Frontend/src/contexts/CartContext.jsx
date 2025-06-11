import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const { user, isLoggedIn } = useAuth();
  const [cart, setCart] = useState([]);

  // Cargar el carrito del usuario cuando inicia sesión
  useEffect(() => {
    if (isLoggedIn && user) {
      try {
        const savedCart = localStorage.getItem(`cart_${user.id}`);
        const parsedCart = savedCart ? JSON.parse(savedCart) : [];
        setCart(Array.isArray(parsedCart) ? parsedCart : []);
      } catch (error) {
        console.error('Error al cargar el carrito del usuario:', error);
        setCart([]);
      }
    } else {
      // Limpiar el carrito cuando el usuario cierra sesión
      setCart([]);
    }
  }, [isLoggedIn, user]);

  // Guardar el carrito en localStorage cuando cambia
  useEffect(() => {
    if (isLoggedIn && user) {
      try {
        localStorage.setItem(`cart_${user.id}`, JSON.stringify(cart));
      } catch (error) {
        console.error('Error al guardar el carrito:', error);
      }
    }
  }, [cart, isLoggedIn, user]);

  const addToCart = (product) => {
    if (!isLoggedIn) {
      console.log('Debes iniciar sesión para añadir productos al carrito');
      return;
    }

    console.log('Añadiendo al carrito:', product);
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    if (user) {
      localStorage.removeItem(`cart_${user.id}`);
    }
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.precio * item.quantity), 0);
  };

  const getCartItemsCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
    cartItemsCount: getCartItemsCount(),
    isLoggedIn
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}; 