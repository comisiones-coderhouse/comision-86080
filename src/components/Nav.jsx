import { Button } from "antd"
import { ShoppingCart } from "lucide-react"

function Nav({ hasButtons }) {
    if (hasButtons === true) {
        return (
            <nav className="nav">
                <a href="/">inicio</a>
                <a href="/productos">productos</a>
                <a href="/contacto">contacto</a>
                <Button color="cyan" variant="filled" icon={<ShoppingCart size={18}/>} shape="circle" />
                <Button color="cyan" variant="filled">
                    Acceder
                </Button>
            </nav>
        )
    } else {
        return (
            <nav className="nav">
                <a href="#">link</a>
                <a href="#">link</a>
                <a href="#">link</a>
            </nav>
        )
    }
}


export default Nav