import { Badge, Button } from "antd"
import { ShoppingCart } from "lucide-react"
import { useProducts } from "../hooks/useProducts"
import { useNavigate } from "react-router-dom"

function CartWidget() {

    //useContext(miContexto)
    const elValorDelContexto = useProducts() //{cant_productos : 4}
    const navigate = useNavigate()

    function handleCartNavigation(){
        navigate("/cart")
    }

    return (
        <Badge count={elValorDelContexto.cant_productos}>
            <Button
                color="cyan"
                variant="filled"
                icon={(
                    <ShoppingCart size={18} />
                )}
                shape="circle"
                onClick={handleCartNavigation}
            />
        </Badge>
    )
}

export default CartWidget