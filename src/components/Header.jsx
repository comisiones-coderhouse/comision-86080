
import Nav from "./Nav"

function Header() {

    return (
        <header className="header">
            <h1 className="header__title">Customicart</h1>
            <Nav hasButtons={true} />
        </header>
    )
}

export default Header