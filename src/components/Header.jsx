import Nav from "./Nav"

function Header() {
    return (
        <header class="header">
            <h1 class="header__title">Customicart</h1>
            <Nav hasButtons={true}/>
        </header>
    )
}

export default Header