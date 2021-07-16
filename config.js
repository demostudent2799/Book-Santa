import firebase from 'firebase';
require('@firebase/firestore')
  var firebaseConfig = {
    apiKey: "AIzaSyCdlRkt9JUJiDMMsKENiN8e9lmb4Uuc5Dw",
    authDomain: "booksanta-eb3cc.firebaseapp.com",
    databaseURL: "https://booksanta-eb3cc-default-rtdb.firebaseio.com/",
    projectId: "booksanta-eb3cc",
    storageBucket: "booksanta-eb3cc.appspot.com",
    messagingSenderId: "1099022806321",
    appId: "1:1099022806321:web:a859a736f5d087998e1410"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }
  export default firebase.firestore();