import { useEffect, useState } from "react"
import ProductosCard from "./ProductosCard"
import { fetchProductosAsync } from "../utils"
import { Card, Col, Row, Skeleton } from 'antd';

function ProductosContainer() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const items = loading == true ? Array.from({ length: 10 }) : productos

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


    return (
        <Row gutter={[16, 16]} className="productos-container">
            {items.map((item, index) => {
                return (
                    <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
                        {loading === true
                            ? (
                                <Card hoverable actions={[
                                    <Skeleton.Button />,
                                    <Skeleton.Button />
                                ]}>
                                    <Skeleton />
                                </Card>
                            ) : (
                                <ProductosCard producto={item} />
                            )}
                    </Col>
                )
            })}
        </Row>
    )
}

export default ProductosContainer