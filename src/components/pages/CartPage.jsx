import { Button } from "antd"
import PageTitle from "../PageTitle"
import { useNavigate } from "react-router-dom"

function CartPage() {

    const navigate = useNavigate()

    function handleFinalizarCompra() {
        navigate("/checkout")
    }

    return (
        <>
            <PageTitle title="Mi Carrito" />
            <p>*aca iria el desglose de productos*</p>
            <Button onClick={handleFinalizarCompra} type="primary">
                Finalizar compra
            </Button>
        </>
    )
}

export default CartPage