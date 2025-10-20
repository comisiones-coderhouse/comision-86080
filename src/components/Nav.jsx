import { Button } from "antd"
import { ShoppingCart } from "lucide-react"
import { Link , NavLink } from "react-router-dom";

function Nav({ hasButtons }) {
    if (hasButtons === true) {
        return (
            <nav className="nav">
                
                {/* <a href="/">inicio</a> */}
                <NavLink to="/">inicio</NavLink>

                {/* <a href="/productos">productos</a> */}
                <NavLink to="/productos">productos</NavLink>


                {/* <a href="/contacto">contacto</a> */}
                <NavLink to="/contacto">contacto</NavLink>

                <Button color="cyan" variant="filled" icon={<ShoppingCart size={18} />} shape="circle" />
                <Button color="cyan" variant="filled">
                    Acceder
                </Button>
            </nav>
        )
    } else {
        return (
            <nav className="nav">
                <Link to="/">inicio</Link>
                <Link to="/productos">productos</Link>
                <Link to="/contacto">contacto</Link>
            </nav>
        )
    }
}


export default Nav