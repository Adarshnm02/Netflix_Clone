// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANnSMpdZK38gyKnuifUNCthqDw6MIlqCs",
    authDomain: "netflix-react-33bdd.firebaseapp.com",
    projectId: "netflix-react-33bdd",
    storageBucket: "netflix-react-33bdd.appspot.com",
    messagingSenderId: "708198372913",
    appId: "1:708198372913:web:f48294a962b14c765c2710"
  };
  
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)







//   const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
//     appId: process.env.REACT_APP_APP_ID
// };