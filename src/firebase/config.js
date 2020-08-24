import * as firebase from 'firebase/app'
 import 'firebase/storage'
 import 'firebase/firestore'

   // Your web app's Firebase configuration
   var firebaseConfig = {
    apiKey: "AIzaSyApL0nXORxkZKBFQ2ptDK8eF09VX2JxKGU",
    authDomain: "tienda-vidvie.firebaseapp.com",
    databaseURL: "https://tienda-vidvie.firebaseio.com",
    projectId: "tienda-vidvie",
    storageBucket: "tienda-vidvie.appspot.com",
    messagingSenderId: "464332715076",
    appId: "1:464332715076:web:89ac8d8b284759a0db7811",
    measurementId: "G-MDHS7BK3ZD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

  export{projectFirestore,projectStorage};