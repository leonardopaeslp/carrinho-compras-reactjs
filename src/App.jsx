import React from 'react';
import Header from './components/Header/Header';
import Products from './components/Produtcs/Produtcs';
import Provider from './context/provider';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Provider>
      <Header />
      <Products />
      <Cart />
    </Provider>
  );
}

export default App;
