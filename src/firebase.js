import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAcFNHU9eVCevAxqSNPrJczP1WZLRn7kF0",
  authDomain: "vranic-port.firebaseapp.com",
  projectId: "vranic-port",
  storageBucket: "vranic-port.appspot.com",
  messagingSenderId: "407307472882",
  appId: "1:407307472882:web:04f0f1ca038f9bbe86256b",
  measurementId: "G-3VH7CX1MGQ"
});

var db = firebaseApp.firestore();

export { db };