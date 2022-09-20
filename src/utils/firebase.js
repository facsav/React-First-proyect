import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDqd6JtlUpJis00pheBegRYzAI2SpEAS_w",
    authDomain: "react-tienda-coder.firebaseapp.com",
    projectId: "react-tienda-coder",
    storageBucket: "react-tienda-coder.appspot.com",
    messagingSenderId: "936252307825",
    appId: "1:936252307825:web:e22fa26eaa54936398ded0"
  };

  const app = initializeApp(firebaseConfig); 
  export const dataBase = getFirestore(app)



