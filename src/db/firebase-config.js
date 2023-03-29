
import { initializeApp } from "firebase/app";
import { getFirestore as firestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBMcUxTmvAZJJF3gMfEWKtqUeSgP-MCNvg",
    authDomain: "tiendabebidas-81e3a.firebaseapp.com",
    projectId: "tiendabebidas-81e3a",
    storageBucket: "tiendabebidas-81e3a.appspot.com",
    messagingSenderId: "563667417170",
    appId: "1:563667417170:web:1cf39af9df3b38a924c78b"
};

const app = initializeApp(firebaseConfig);

export const getFirestore = () => {
    return firestore(app);
};