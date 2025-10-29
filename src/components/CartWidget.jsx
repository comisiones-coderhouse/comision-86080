import { Badge, Button } from "antd"
import { ShoppingCart } from "lucide-react"
import { useProducts } from "../hooks/useProducts"

function CartWidget() {

    //useContext(miContexto)
    const elValorDelContexto = useProducts() //{cant_productos : 4}

    return (
        <Badge count={elValorDelContexto.cant_productos}>
            <Button
                color="cyan"
                variant="filled"
                icon={(
                    <ShoppingCart size={18} />
                )}
                shape="circle"
            />
        </Badge>
    )
}

export default CartWidget