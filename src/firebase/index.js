import { initializeApp } from 'firebase/app';
import {getFirestore}from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD4rpSsi-ue96d1V1RLF7m78k8m4IwdDIQ",
  authDomain: "my-ecommerce-f05d4.firebaseapp.com",
  projectId: "my-ecommerce-f05d4",
  storageBucket: "my-ecommerce-f05d4.appspot.com",
  messagingSenderId: "737023651781",
  appId: "1:737023651781:web:4c9f554f616446923ca5ac"
};

initializeApp(firebaseConfig);
// Initialize Firebase
export const db= getFirestore();