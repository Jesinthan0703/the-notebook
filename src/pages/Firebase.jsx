import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhVzn3bDvP25Bubp2r93ukukyRw0SmCFU",
  authDomain: "the-notebook-jesin.firebaseapp.com",
  projectId: "the-notebook-jesin",
  storageBucket: "the-notebook-jesin.appspot.com",
  messagingSenderId: "641151674521",
  appId: "1:641151674521:web:d68c702d151c23d1497008",
  measurementId: "G-L1FVNGKBEY",
};

firebase.initializeApp(firebaseConfig);
