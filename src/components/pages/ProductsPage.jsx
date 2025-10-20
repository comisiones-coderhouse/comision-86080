import ProductosContainer from "../ProductosContainer"
import SearchBar from "../SearchBar"

function ProductsPage() {
    return (
        <>
            <h2>Productos</h2>
            <SearchBar />
            <ProductosContainer />
        </>
    )
}

export default ProductsPage