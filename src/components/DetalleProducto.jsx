import { Image, Rate, Flex, Button } from "antd"
import Counter from "./Counter"
import PageTitle from "./PageTitle"
import { useProducts } from "../hooks/useProducts"

//Componente Padre
function DetalleProducto({ producto, formatedPrice }) {

    const elValorDelContexto = useProducts()
    let contadorActual = 0

    function handleEjemplo(contador) {
        contadorActual = contador
    }

    function handleAddToCart() {
        elValorDelContexto.addProducts(contadorActual, producto)
    }

    return (
        <Flex gap="middle">
            <Flex vertical gap="middle">
                <PageTitle title={`${producto.title} - ${formatedPrice}`} />
                <p>{producto.description}</p>
                <Counter handleEjemplo={handleEjemplo} stock={producto.stock} />
                <Button variant="solid" color="primary" onClick={handleAddToCart}>Agregar a carrito</Button>
            </Flex>
            <Flex vertical align="center">
                <Image
                    width={400}
                    src={producto.images[0]}
                />
                <Flex align="center" vertical>
                    <Rate allowHalf defaultValue={producto.rating} disabled tooltips={['pesimo', 'bad', 'normal', 'piola', 'god']} />
                    <p>{producto.rating}</p>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default DetalleProducto