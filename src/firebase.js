import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getFirestore
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmyhYCID0H7PB3RPEQ3abDh75o4onKseI",
  authDomain: "disney-plus-clone-d46a4.firebaseapp.com",
  projectId: "disney-plus-clone-d46a4",
  storageBucket: "disney-plus-clone-d46a4.appspot.com",
  messagingSenderId: "972658502477",
  appId: "1:972658502477:web:8b83e2fa0f99a6fa596504"
};

  // init firebase app
  initializeApp(firebaseConfig);

  //init services
const db = getFirestore();
const auth = getAuth();

export {auth};
export default db;