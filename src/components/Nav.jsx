import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

function Nav({ hasButtons }) {
    return (
        <nav className="nav">
            {hasButtons === false ? <Link to="/">inicio</Link> : null}
            <NavLink to="/contacto">contacto</NavLink>
            {hasButtons === false
                ? <Link to="/carrito">mi carrito</Link>
                : <CartWidget />
            }
        </nav>
    )
}


export default Nav