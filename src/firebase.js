import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyByG4g3d5lzfiaXra-Lbi7x_20HYj3zPNU",
    authDomain: "bennys-bevvies.firebaseapp.com",
    databaseURL: "https://bennys-bevvies.firebaseio.com",
    projectId: "bennys-bevvies",
    storageBucket: "bennys-bevvies.appspot.com",
    messagingSenderId: "131248313838",
    appId: "1:131248313838:web:c8497f8b5fca114378aaff"
  };

  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();

  export const provider = new firebase.auth.GoogleAuthProvider();

  export default firebase;