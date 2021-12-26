import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBDpALUcgterUCi1nF9_ooVht5ap1i2W_0",
  authDomain: "disney-plus-clone-de8d7.firebaseapp.com",
  projectId: "disney-plus-clone-de8d7",
  storageBucket: "disney-plus-clone-de8d7.appspot.com",
  messagingSenderId: "962396994423",
  appId: "1:962396994423:web:8683ecb63114c02ca1bf72",
  measurementId: "G-7YF0VSHWF7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
