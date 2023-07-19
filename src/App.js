import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Products from "./Pages/Products/Products"
import Cart from "./Pages/Cart/Cart";

// const store = configureStore({
//   reducer: rootReducer
// });

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Products />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
