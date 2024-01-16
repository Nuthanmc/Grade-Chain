// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCNj_WAqYO9uvjAGBivxOEztLsjtN9WXg",
  authDomain: "certi-block.firebaseapp.com",
  projectId: "certi-block",
  storageBucket: "certi-block.appspot.com",
  messagingSenderId: "440331402484",
  appId: "1:440331402484:web:9807d56d15630ae05a32a1",
  measurementId: "G-6JCLVMTS98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export default db;
export { app, auth };
