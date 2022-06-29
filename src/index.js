import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyBdb1jbWe2Ltd714CwdNXWVGpxbDTITrcI",
  authDomain: "ecommerce-b6267.firebaseapp.com",
  projectId: "ecommerce-b6267",
  storageBucket: "ecommerce-b6267.appspot.com",
  messagingSenderId: "395219475896",
  appId: "1:395219475896:web:ebd51d95c75846bde5034d",
  measurementId: "G-KW0BRD87Y3"
};
  
initializeApp(firebaseConfig);

  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

