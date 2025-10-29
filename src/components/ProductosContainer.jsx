import { useEffect, useState } from "react"
import ProductosCard from "./ProductosCard"
import { fetchProductosAsync } from "../utils"
import { Col, Row } from 'antd';
/* import { Route, Routes } from "react-router-dom" */

function ProductosContainer() {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        const respuesta = fetchProductosAsync()
        respuesta
            .then((respuesta) => {
                setProductos(respuesta.products)
            })
            .catch((respuesta) => {
                console.log(respuesta)
            })

    }, [])

    return (
        <Row gutter={[16, 16]} className="productos-container">
            {productos.map((producto) => {
                return (
                    <Col key={producto.id} xs={24} sm={12} md={8} lg={6} xl={4}>
                        <ProductosCard producto={producto} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default ProductosContainer