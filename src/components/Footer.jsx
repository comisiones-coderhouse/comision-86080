import Nav from "./Nav"

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">Copyright &copy; - 2025</p>
            <p className="footer__text">Horacio Gutierrez</p>
            <Nav hasButtons={false}/>
        </footer>
    )
}

export default Footer