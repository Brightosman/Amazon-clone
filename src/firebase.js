import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDzbaf_tgPElyAzph9x8YOebWFZgkSxoUw",
    authDomain: "clone-55b66.firebaseapp.com",
    databaseURL: "https://clone-55b66.firebaseio.com",
    projectId: "clone-55b66",
    storageBucket: "clone-55b66.appspot.com",
    messagingSenderId: "398446198542",
    appId: "1:398446198542:web:6448258880ef0a9924e15f",
    measurementId: "G-MKKT93QT23",
  

});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth };