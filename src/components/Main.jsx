import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import ContactoPage from "./pages/ContactoPage"
import DetalleProductoPage from "./pages/DetalleProductoPage"

function Main() {
    return (
        <main className="main">
            {/* <Counter /> */}
            {/* <Popup /> */}
            {/* <Form /> */}
            {/* <Form /> */}
            {/* <UserList /> */}
            {/* <ProductosContainer /> */}
            <Routes>
                {/* <Route path="/productos" element={<SearchBar />} /> */}
                {/* <Route path="/productos" element={<ProductosContainer />} /> */}
                {/* <Route path="/productos" element={<ProductosContainer />} /> */}
                
                {/* /detalle-producto */}
                <Route path="/" element={<HomePage />} />
                <Route path="/productos" element={<ProductsPage />} />
                <Route path="/contacto" element={<ContactoPage />} />
                
                <Route path="/detalle-producto/:id" element={<DetalleProductoPage />} />
                
            </Routes>
        </main>
    )
}

export default Main