import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBDpALUcgterUCi1nF9_ooVht5ap1i2W_0",
  authDomain: "disney-plus-clone-de8d7.firebaseapp.com",
  projectId: "disney-plus-clone-de8d7",
  storageBucket: "disney-plus-clone-de8d7.appspot.com",
  messagingSenderId: "962396994423",
  appId: "1:962396994423:web:2855c4ee2e7ddd31a1bf72",
  measurementId: "G-PMDKR3JVZV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
