import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import ContactoPage from "./pages/ContactoPage"
import DetalleProductoPage from "./pages/DetalleProductoPage"

function Main() {
    return (
        <main className="main">
            <Routes>

                <Route path="/" element={<HomePage />} />
                {/* <Route path="/productos" element={<ProductsPage />} /> */}
                <Route path="/contacto" element={<ContactoPage />} />

                <Route path="/detalle-producto/:id" element={<DetalleProductoPage />} />

            </Routes>
        </main>
    )
}

export default Main