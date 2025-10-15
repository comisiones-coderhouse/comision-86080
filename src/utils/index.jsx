//Si la promesa esta fuera de un .then, entonces le ponemos .then/.catch/.finally
//Si la promesa esta dentro de un .then, entonces la retornamos y continuamos abajo con el .then
/* const respuesta = fetchUsers()
respuesta
    .then((respuesta) => {
        console.log(respuesta)
    })
    .catch((respuesta) => {
        console.log(respuesta)
    })
*/


export function fetchUsers() {
    return fetch('https://dummyjson.com/users')
        .then(function (respuesta) {
            console.log("Salio todo bien, transformando a json...")
            return respuesta.json()
        })
        .then((respuesta) => {
            console.log("Salio todo bien, mostrando en consola...")
            console.log("🚀 ~ UserList ~ respuesta:", respuesta)
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

//Async-await

//export const fetchUsersAsync = async () => {...}
export async function fetchUsersAsync() {

    try {
        const pedido = await fetch('https://dummyjson.com/users')
        console.log("Salio todo bien, transformando a json...")

        const respuesta = await pedido.json()
        console.log("Salio todo bien, mostrando en consola...")
        console.log("🚀 ~ UserList ~ respuesta:", respuesta)

        return respuesta

    } catch (error) {
        console.log("Salio todo mal")
        console.log(error)
    }

    console.log("Termino todo ")

}


export async function fetchProductosAsync() {

    try {
        const pedido = await fetch('https://dummyjson.com/products')
        console.log("Salio todo bien, transformando a json...")

        const respuesta = await pedido.json()
        console.log("Salio todo bien, mostrando en consola...")
        console.log("🚀 ~ fetchProductosAsync ~ respuesta:", respuesta)

        return respuesta

    } catch (error) {
        console.log("Salio todo mal")
        console.log(error)
    }

    console.log("Termino todo ")

}