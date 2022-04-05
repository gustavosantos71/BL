import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCrTpB7pnTiOOvwshUNA6MTYl46szTH89M",
  authDomain: "bikelegal-598bb.firebaseapp.com",
  projectId: "bikelegal-598bb",
  storageBucket: "bikelegal-598bb.appspot.com",
  messagingSenderId: "742938632535",
  appId: "1:742938632535:web:cffbf44e8c0f74476bde12"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
