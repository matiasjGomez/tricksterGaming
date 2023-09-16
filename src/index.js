import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//item provider
import ItemProvider from './contexts/ItemContext';
//sidebar provider
import SidebarProvider from './contexts/SidebarContext';
//cart provider
import CartProvider from './contexts/CartContext'



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARxFJwGgogevsv9x5VCQaaPkAx5giRRJA",
  authDomain: "my-app-react-c2efb.firebaseapp.com",
  projectId: "my-app-react-c2efb",
  storageBucket: "my-app-react-c2efb.appspot.com",
  messagingSenderId: "300021888566",
  appId: "1:300021888566:web:d35129443e7f7ddf41ca97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
  <CartProvider>
  <ItemProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ItemProvider>
  </CartProvider>
  </SidebarProvider>
);
