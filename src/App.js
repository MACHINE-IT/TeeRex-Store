import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Products from "./Pages/Products/Products";
import Cart from "./Pages/Cart/Cart";
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Products />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </PersistGate>
    </Provider>
  );
}

export default App;
