import { useEffect, useState } from "react"
import ProductosCard from "./ProductosCard"
import { fetchProductosAsync } from "../utils"
import { Card, Col, Row, Skeleton } from 'antd';

function ProductosContainer() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const respuesta = fetchProductosAsync()
        respuesta
            .then((respuesta) => {
                setProductos(respuesta.products)
            })
            .catch((respuesta) => {
                console.log(respuesta)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])

    if (loading == true) return (
        <Row gutter={[16, 16]} className="productos-container">
            {Array.from({ length: 10 }).map(() => {
                return (
                    <Col xs={24} sm={12} md={8} lg={6} xl={4}>
                        <Card hoverable actions={[
                            <Skeleton.Button/>,
                            <Skeleton.Button/>
                        ]}>
                            <Skeleton />
                        </Card>
                    </Col>
                )
            })}
        </Row>
    )

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