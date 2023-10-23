import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthProvider from './context/AuthContext';
import DrinkProvider from './context/DrinksContext';
import HangoverProvider from './context/HangoversContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <DrinkProvider>
        <HangoverProvider>
          <App />
        </HangoverProvider>
      </DrinkProvider>
    </AuthProvider>
  </React.StrictMode>
);

