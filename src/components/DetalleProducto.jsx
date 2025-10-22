import { Image, Rate, Flex, Button } from "antd"
import Counter from "./Counter"

//Componente Padre
function DetalleProducto({ producto, formatedPrice }) {

    function handleEjemplo (contador) {
        console.log("Soy handle ejemplo")
        console.log(contador)
    }

    return (
        <Flex gap="middle">
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
            <Flex vertical gap="middle">
                <h2>{producto.title} - {formatedPrice}</h2>
                <p>{producto.description}</p>
                <Counter handleEjemplo={handleEjemplo}/>
                <Button variant="solid" color="primary">Agregar a carrito</Button>
            </Flex>
        </Flex>
    )
}

export default DetalleProducto