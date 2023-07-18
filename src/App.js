import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Products from "./Pages/Products/Products"

// const store = configureStore({
//   reducer: rootReducer
// });

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navbar />
        <Products />
      </PersistGate>
    </Provider>
  );
}

export default App;
