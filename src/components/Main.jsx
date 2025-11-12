import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ContactoPage from "./pages/ContactoPage"
import DetalleProductoPage from "./pages/DetalleProductoPage"
import CategoryPage from "./pages/CategoryPage"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"

function Main() {
    return (
        <main className="main">
            <Routes>

                <Route path="/" element={<HomePage />} />

                <Route path="/contacto" element={<ContactoPage />} />

                <Route path="/detalle-producto/:id" element={<DetalleProductoPage />} />

                <Route path="/category/:id" element={<CategoryPage />} />

                <Route path="/cart" element={<CartPage />} />

                <Route path="/checkout" element={<CheckoutPage />} />

            </Routes>
        </main>
    )
}

export default Main