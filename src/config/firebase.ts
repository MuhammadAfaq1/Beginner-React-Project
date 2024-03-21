// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider } from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_qUaVVx0NPeLMhpVmZpt-exxgOA1CEMQ",
  authDomain: "react-project-2d178.firebaseapp.com",
  projectId: "react-project-2d178",
  storageBucket: "react-project-2d178.appspot.com",
  messagingSenderId: "244423151854",
  appId: "1:244423151854:web:e50860adf2f2ef9cda23ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider=new GoogleAuthProvider();
export const db= getFirestore(app);