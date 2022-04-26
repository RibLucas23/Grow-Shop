import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6A2QiTONR1j60qj_q5KNML-3vsHDtZxI",
  authDomain: "growshop-31140.firebaseapp.com",
  projectId: "growshop-31140",
  storageBucket: "growshop-31140.appspot.com",
  messagingSenderId: "280592221739",
  appId: "1:280592221739:web:490a631864958d004e8c6e"
};

initializeApp(firebaseConfig);




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
