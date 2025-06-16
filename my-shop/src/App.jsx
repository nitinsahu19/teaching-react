import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { getUser } from "./components/LocalStorage";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CartSidebar from "./components/CartSidebar";


const App = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]); // Cart state
  const [showCart, setShowCart] = useState(false); // Sidebar visibility state

  useEffect(() => {
    const savedUser = getUser();
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const openCart = () => {
    setShowCart(true); // Open the cart sidebar
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} openCart={openCart} />
      {showCart && <CartSidebar cartItems={cart} setCart={setCart} setShowCart={setShowCart} />}
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login setUser={setUser} />}
        />
        <Route
          path="/"
          element={
            user ? (
              <Home cart={cart} setCart={setCart} showCart={showCart} setShowCart={setShowCart} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
    
      </Routes>
    </BrowserRouter>
  );
};

export default App;