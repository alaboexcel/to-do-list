import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyB2MDaWLHCh9cKxlyJy6sQqAIoIY02MVpE",
    authDomain: "todo-app-25ec7.firebaseapp.com",
    databaseURL: "https://todo-app-25ec7.firebaseio.com",
    projectId: "todo-app-25ec7",
    storageBucket: "todo-app-25ec7.appspot.com",
    messagingSenderId: "67239345144",
    appId: "1:67239345144:web:a5f527966a5aa2019eb40d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();


  export default db;