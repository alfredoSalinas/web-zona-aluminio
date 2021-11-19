import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "firebase/compat/firestore"

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaGaGI-3-JhOz0XBRYbeePhqK8N_H6oiM",
  authDomain: "tienda-76091.firebaseapp.com",
  projectId: "tienda-76091",
  storageBucket: "tienda-76091.appspot.com",
  messagingSenderId: "980828415808",
  appId: "1:980828415808:web:c25222741cb76f8b157ca5"
};
  

const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

//const auth = firebase.auth()

export const auth = getAuth(app);
onAuthStateChanged(auth, user => {
  // Check for user status
});


