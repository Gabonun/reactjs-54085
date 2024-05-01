import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDx_b9Sl8YM04JLru9R9t4j53znqvqYEzo",
  authDomain: "ecomercereact54085.firebaseapp.com",
  projectId: "ecomercereact54085",
  storageBucket: "ecomercereact54085.appspot.com",
  messagingSenderId: "444548799835",
  appId: "1:444548799835:web:196163f1c8ae5caceb8e7e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db