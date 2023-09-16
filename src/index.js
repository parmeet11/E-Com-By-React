import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AppProvider} from "./context/productContext";
import { FilterContextProvider } from './context/filterContext';
import { CartProvider } from './context/cartContext';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-pwt7l1juq5n42bzm.us.auth0.com"
    clientId="IjJG7GTvhgmNfJ38dnU11os2MFwlPacD"
    authorizationParams={{
      redirect_uri: window.location.origin}}>
   <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
   </AppProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
