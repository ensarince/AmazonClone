import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsJ4oKol8S1nKUQsr-AG_ZLeOMKDk2oCU",
    authDomain: "clone-4dd78.firebaseapp.com",
    projectId: "clone-4dd78",
    storageBucket: "clone-4dd78.appspot.com",
    messagingSenderId: "18156162977",
    appId: "1:18156162977:web:d4ced88ad2c490b0de05e0",
    measurementId: "G-FYY63LKJSK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db, auth};