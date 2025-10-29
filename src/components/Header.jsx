import { BrandLogo } from "./BrandLogo"
import { NavLink } from "react-router-dom"
import Nav from "./Nav"

function Header() {

    return (
        <header className="header">
            <NavLink to="/">
                <h1 className="header__title">
                    <BrandLogo />
                    Customicart
                </h1>
            </NavLink>
            <Nav hasButtons={true} />
        </header>
    );
}

export default Header;