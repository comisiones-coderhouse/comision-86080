import { useEffect, useState } from "react"
import ProductosCard from "./ProductosCard"
import { fetchProductosAsync } from "../utils"
import { Col, Row } from 'antd';
import { Route, Routes } from "react-router-dom"

//Container : Se encarga de la logica y se comunica con el padre
function ProductosContainer() {

    const [productos, setProductos] = useState([])

    useEffect(() => {

        //Async Mock
        const respuesta = fetchProductosAsync()

        respuesta
            .then((respuesta) => {
                console.log(respuesta)
                setProductos(respuesta.products)
            })
            .catch((respuesta) => {
                console.log(respuesta)
            })

    }, [])

    return (
        <Row gutter={[16, 16]}>
            <Routes>
                {/* if(urlDelNavegador === "/contacto") {} */}
                <Route path="/contacto" element={<p>Soy un parrafo</p>} />
            </Routes>
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