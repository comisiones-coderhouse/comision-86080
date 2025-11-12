import { Button } from "antd"
import PageTitle from "../PageTitle"
import { useNavigate } from "react-router-dom"

function CartPage() {

    const navigate = useNavigate()

    function handleFinalizarCompra(){
        navigate("/checkout")
    }

    return (
        <>
            <PageTitle title="Mi Carrito" />
            {/* desglose de productos */}
            <p>*aca iria el desglose de productos*</p>
            {/* boton para finalizar compra */}
            <Button onClick={handleFinalizarCompra} type="primary">
                Finalizar compra
            </Button>
        </>
    )
}

export default CartPage