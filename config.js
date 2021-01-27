import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDspvoS5wFr_LEv86VpnnqDcbElu3HJv8U",
    authDomain: "barter-system-app-af890.firebaseapp.com",
    projectId: "barter-system-app-af890",
    storageBucket: "barter-system-app-af890.appspot.com",
    messagingSenderId: "494342620252",
    appId: "1:494342620252:web:66fa843c3e233c6aef1299",
    measurementId: "G-GN3CXSEKRB"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
