

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAnXUQgjwxmenJc7Ws0NsWYEarAjDFTBa4",
  authDomain: "netflix-clone-2811d.firebaseapp.com",
  projectId: "netflix-clone-2811d",
  storageBucket: "netflix-clone-2811d.appspot.com",
  messagingSenderId: "966961410632",
  appId: "1:966961410632:web:e27903a94120edb5e19e7d"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;