import { createContext, useState } from "react";

//paso 1
//Esta constante "miContexto" es de hecho el contexto literalmente
export const miContexto = createContext();


//paso 2
//Esta constante "Provider" es el provider del contexto de arriva. Se puede usar "miContexto.Provider" o crearle una constante para si mismo
const Provider = miContexto.Provider


//paso 3
function ProductoProvider({ children }) {

    const [cantProd, setCantProd] = useState(0)
    const [carrito, setCarrito] = useState([])


    function addProducts(nuevaCantidad, producto) {

        //carrito.push()
        //const carrito_copia = carrito
        //carrito_copia.push()

        //const carrito_copia = carrito.slice(0)
        //const carrito_copia = carrito.map(item => item)
        //const carrito_copia = [...carrito, producto]
        const carrito_copia = [...carrito]
        carrito_copia.push(producto)

        const nuevasUnidades = cantProd + nuevaCantidad

        setCantProd(nuevasUnidades)
        setCarrito(carrito_copia)
    }

    function removeProducts() { }

    function resetCart() {
        setCantProd(0)
        setCarrito([])
    }

    function updateProductUnits(id, units) { }

    const elValorDelContexto = {
        cant_productos: cantProd,
        addProducts: addProducts,
        resetCart: resetCart,
    }

    return (
        <Provider value={elValorDelContexto}>
            {children}
        </Provider>
    )
}


export default ProductoProvider