
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDv26i6lUWO5TqEAPVKfMguEDRLSY9TPtM",
  authDomain: "yuzu-shoponline.firebaseapp.com",
  projectId: "yuzu-shoponline",
  storageBucket: "yuzu-shoponline.appspot.com",
  messagingSenderId: "776602766901",
  appId: "1:776602766901:web:75ffa8c83fb963bac4ab7c"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);