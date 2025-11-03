import { useEffect, useState } from "react"
import { fetchProductoAsync } from "../utils"
import DetalleProducto from "./DetalleProducto";

function DetalleProductoContainer({ id }) {

    const [producto, setProducto] = useState({})

    useEffect(() => {
        const respuesta = fetchProductoAsync(id)
        respuesta
            .then((respuesta) => {
                setProducto(respuesta)
            })
            .catch((respuesta) => {
                console.log(respuesta)
            })

    }, [])

    const formatedPrice = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(producto?.price)


    if (!producto.images) return null

    return (
        <DetalleProducto  formatedPrice={formatedPrice} producto={producto}/>
    )
}

export default DetalleProductoContainer