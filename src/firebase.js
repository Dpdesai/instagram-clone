import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";
// import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyA_m2brF8cw4XRYcsJrm0jRn-13nUHuQPo",
    authDomain: "instagram-clone-react-48240.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-48240-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-react-48240",
    storageBucket: "instagram-clone-react-48240.appspot.com",
    messagingSenderId: "466303771950",
    appId: "1:466303771950:web:248bff7b85dbf157ae86bf",
    measurementId: "G-HK2DZBQR45"
}

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

export { db, auth, storage };