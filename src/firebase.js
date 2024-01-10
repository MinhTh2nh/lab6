import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCLYxIXcImTavLLVPz9wI5I5LLLcEBw_kk",
    authDomain: "social-media-phake.firebaseapp.com",
    projectId: "social-media-phake",
    storageBucket: "social-media-phake.appspot.com",
    messagingSenderId: "344084724742",
    appId: "1:344084724742:web:8ecf09196503baf83d9787",
    measurementId: "G-B84ZBJTM5F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
export { db, auth, storage }