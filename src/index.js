import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";



initializeApp({
  apiKey: "AIzaSyD4rpSsi-ue96d1V1RLF7m78k8m4IwdDIQ",
  authDomain: "my-ecommerce-f05d4.firebaseapp.com",
  projectId: "my-ecommerce-f05d4",
  storageBucket: "my-ecommerce-f05d4.appspot.com",
  messagingSenderId: "737023651781",
  appId: "1:737023651781:web:4c9f554f616446923ca5ac"
});



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( <App />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


