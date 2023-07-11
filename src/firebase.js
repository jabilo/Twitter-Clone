import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import { GoogleAuthProvider, signInWithPopup,getAuth } from "firebase/auth";

const firebaseConfig = {
   // enter your config details
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db =  firebase.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
export {auth,provider};
export default db;
