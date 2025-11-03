import { collection, getDocs /* getDoc, getDocs, deleteDoc, addDoc, updateDoc */ } from "firebase/firestore"
import { db } from "./firebaseConfig"



export function fetchUsers() {
    return fetch('https://dummyjson.com/users')
        .then(function (respuesta) {
            return respuesta.json()
        })
        .then((respuesta) => {
            return respuesta
        })
        .catch(function (respuesta) {
            console.log("Salio todo mal")
            console.log(respuesta)
        })
        .finally(function () {
            console.log("Termino todo")
        })
}

export async function fetchUsersAsync() {

    try {
        const pedido = await fetch('https://dummyjson.com/users')
        const respuesta = await pedido.json()

        return respuesta

    } catch (error) {
        console.log("Salio todo mal")
        console.log(error)
    }

    console.log("Termino todo ")

}

export async function fetchProductosAsync() {

    try {
        /*  const pedido = await fetch('https://dummyjson.com/products')
         const respuesta = await pedido.json()
 
         return respuesta */

        //Consultas en firebase/firestore
        //1) necesitas una app ya conectada
        // Es la constante "app" del archivo firebaseConfig.js

        //2) necesitas una referencia a la DB
        // Es la constante "db" del archivo firebaseConfig.js


        //3) necesitas una referencia una collection de la DB
        const usuariosCollection = collection(db, "usuarios")

        //4) necesitas la consulta
        //getDocs(unaCollection) -> Te trae todo lo que hay en la collection (SELECT * from unaCollection)
        const miConsulta = await getDocs(usuariosCollection)

        console.log("🚀 ~ fetchProductosAsync ~ miConsulta:", miConsulta)

        return {
            products: []
        }

    } catch (error) {
        console.log("Salio todo mal")
        console.log(error)
    }

    /*  console.log("Termino todo ") */

}

export async function fetchProductoAsync(id) {

    try {
        const pedido = await fetch(`https://dummyjson.com/products/${id}`)
        const respuesta = await pedido.json()

        return respuesta

    } catch (error) {
        console.log("Salio todo mal")
        console.log(error)
    }

    console.log("Termino todo ")

}