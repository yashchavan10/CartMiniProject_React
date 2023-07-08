import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKePtzpm4KM1WJ094efRLC60XEifgJx5o",
  authDomain: "cart-miniproject.firebaseapp.com",
  projectId: "cart-miniproject",
  storageBucket: "cart-miniproject.appspot.com",
  messagingSenderId: "694303477884",
  appId: "1:694303477884:web:4a91273805071f256eb9f9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
