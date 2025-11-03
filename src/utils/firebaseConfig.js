//Firebase : Es la plataforma de google con TODO
//Firestore : Es la base de datos
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBM9OSsHu5VRiD6CyJdvaYFcK0A78rRMGo",
    authDomain: "comision-86080.firebaseapp.com",
    projectId: "comision-86080",
    storageBucket: "comision-86080.firebasestorage.app",
    messagingSenderId: "1050964021925",
    appId: "1:1050964021925:web:cbdf2b4bc757ce06f3b34c"
};

//La aplicacion ya conectada
const app = initializeApp(firebaseConfig);

//La conexion a la DB de una aplicacion ya conectada
export const db = getFirestore(app)