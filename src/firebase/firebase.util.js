import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


//import firebase from 'firebase/compat/app';
//import 'firebase/compat/firestore';
//import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyCKcH0Ue13x0m0MyDPDlF1EbZAokdD0M80",
    authDomain: "clothing-white.firebaseapp.com",
    projectId: "clothing-white",
    storageBucket: "clothing-white.appspot.com",
    messagingSenderId: "128336034668",
    appId: "1:128336034668:web:80180fa81c71cd9967d149",
    measurementId: "G-50FDSM7XFK"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore  = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : "select_account"});
  export const signInwithGoogle = ()=> auth.signInWithPopup(provider);
  export default firebase;


  //.signInwithPopup(provider);

  //signInWithPopup(auth, provider)