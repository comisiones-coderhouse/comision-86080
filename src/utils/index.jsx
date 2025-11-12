import { db } from "./firebaseConfig"
import { collection, getDocs, addDoc, getDoc, doc/* getDoc, deleteDoc, , updateDoc */, query, where } from "firebase/firestore"


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

        const usuariosCollection = collection(db, "productos")

        const miConsulta = await getDocs(usuariosCollection)

        const usuariosFinales = miConsulta.docs.map((doc) => {

            const producto = doc.data() //{ id : 1, title : "Producto 1", price : 100 , ....}

            producto.firebaseID = doc.id //{ id : 1, title : "Producto 1", price : 100 , ...., firebaseID : "1234567890" }

            return producto
        })

        return {
            products: usuariosFinales
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

export async function saveSale(data) {

    try {

        const ventasCollection = collection(db, "ventas")

        const miConsulta = await addDoc(ventasCollection, data)

        return miConsulta.id //"1234567890"


    } catch (error) {
        console.log(error)
    }
}

export async function getProductsByCategory(category = "furniture") {
    try {

        const productosCollection = collection(db, "productos")

        const filtro = query(productosCollection, where("category", "==", category), where("price", ">", 0))

        const miConsulta = await getDocs(filtro)

        const productosFiltrados = miConsulta.docs.map((doc) => {
            return doc.data()
        })

        console.log("🚀 ~ getProductsByCategory ~ productosFiltrados:", productosFiltrados)

    } catch (error) {
        console.log(error)
    }
}

export async function getProductByID(id = 3) {
    try {

        const productosCollection = collection(db, "productos")

        const idNumerico = Number(id)

        const filtro = query(productosCollection, where("id", "==", idNumerico))

        const miConsulta = await getDocs(filtro)

        const productosFiltrados = miConsulta.docs.map((doc) => {
            return doc.data()
        })

        return productosFiltrados[0]

    } catch (error) {
        console.log(error)
    }
}

export async function getDocumentByID(id = 27) {
    try {

        const productosCollection = collection(db, "productos")

        const docRef = doc(productosCollection, id)

        const miConsulta = await getDoc(docRef)

        const elProducto = miConsulta.data()

        return elProducto

    } catch (error) {
        console.log(error)
    }
}