import { useEffect, useState } from "react"
import { getDocumentByID } from "../utils"
import DetalleProducto from "./DetalleProducto";
import { Flex, Skeleton, } from "antd";

function DetalleProductoContainer({ id }) {
    
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        getDocumentByID(id)
            .then((respuesta) => {
                setProducto(respuesta)
            })
            .catch((respuesta) => {
                console.log(respuesta)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])

    const formatedPrice = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(producto?.price)


    if (loading == true) return (
        <Flex gap="middle">
            <Flex vertical gap="middle" style={{ flexGrow: 1 }}>
                <Skeleton />
                <Skeleton paragraph={{ rows: 3 }} />
            </Flex>
            <Flex vertical align="center" style={{ flexGrow: 1 }}>
                <Skeleton.Image active={loading} />
            </Flex>
        </Flex>
    )

    if (!producto.images) return null

    return (
        <DetalleProducto formatedPrice={formatedPrice} producto={producto} />
    )
}

export default DetalleProductoContainer