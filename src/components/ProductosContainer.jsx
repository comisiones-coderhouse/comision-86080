import { useEffect, useState } from "react"
import ProductosCard from "./ProductosCard"
import { fetchProductosAsync } from "../utils"
import { Card, Col, Row, Skeleton } from 'antd';
import toast from "react-hot-toast";

function ProductosContainer() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const items = loading == true ? Array.from({ length: 10 }) : productos

    useEffect(() => {
        toast.promise(fetchProductosAsync, {
            loading: "Cargando productos...",
            success: (respuesta) => {
                setProductos(respuesta.products)
                setLoading(false)
                return "Productos cargados exitosamente!"
            },
            error: () => {
                setLoading(false)
                return "Hubo un error al cargar los productos"
            },
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