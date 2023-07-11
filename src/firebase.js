import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import { GoogleAuthProvider, signInWithPopup,getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAArs7Q9inBa-ZoFl5qICLj3nLSkguXIfw",
    authDomain: "twitter-clone-aec3b.firebaseapp.com",
    projectId: "twitter-clone-aec3b",
    storageBucket: "twitter-clone-aec3b.appspot.com",
    messagingSenderId: "1049059486708",
    appId: "1:1049059486708:web:36f38fd83f55d9f555e7a1",
    measurementId: "G-G5EM7BDK1Y"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db =  firebase.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
export {auth,provider};
export default db;
