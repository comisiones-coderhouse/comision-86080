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
        const pedido = await fetch('https://dummyjson.com/products')
        const respuesta = await pedido.json()

        return respuesta

    } catch (error) {
        console.log("Salio todo mal")
        console.log(error)
    }

    console.log("Termino todo ")

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