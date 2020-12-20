import firebase from 'firebase'

import firestore from "firebase/firestore"

import auth from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBDggvdRUuy9eCZZC-kwozT5_0Ee6pkWak",
    authDomain: "final-helping-hand-firebase.firebaseapp.com",
    projectId: "final-helping-hand-firebase",
    storageBucket: "final-helping-hand-firebase.appspot.com",
    messagingSenderId: "859268825139",
    appId: "1:859268825139:web:5929bd78a3e811607fe346"
  };

  firebase.initializeApp(firebaseConfig)

  firebase.firestore()
  firebase.auth()

  export default firebase