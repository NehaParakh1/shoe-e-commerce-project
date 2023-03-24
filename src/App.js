import React, { useState } from 'react';
import CartProvider from './Components/store/CartProvider'
import './App.css';
import ShoeForm from './Components/Shoes/ShoesForm'
import Header from './Components/Header/Header';
import Shoes from './Components/Shoes/Shoes';
import Cart from './Components/Cart/Cart';

function App() {
  const [showCart, setShowCart] = useState(false);

  const cartOpenHandler = (event) => {
    event.preventDefault();
    setShowCart(true);
  }

  const closeHandler = (event) => {
    event.preventDefault();
    setShowCart(false);
  }

  return (
    <CartProvider>
      <Header onClick={cartOpenHandler} />
      <ShoeForm />
      {showCart && <Cart onClose={closeHandler} />}
      <Shoes />
    </CartProvider>
  );
}

export default App;
