import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBkyPCkp-EQXvloGCEU3raaeQh_h62b0Rs",
  authDomain: "auth-9e92b.firebaseapp.com",
  projectId: "auth-9e92b",
  storageBucket: "auth-9e92b.appspot.com",
  messagingSenderId: "259680843755",
  appId: "1:259680843755:web:b82a3490206691928c8bae",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
export default db;
