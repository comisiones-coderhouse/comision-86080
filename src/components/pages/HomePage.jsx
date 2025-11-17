import SearchBar from "../SearchBar"
import ProductosContainer from "../ProductosContainer"
import PageTitle from "../PageTitle"

function HomePage() {
    return (
        <>
            <PageTitle title="Home" />
            <SearchBar />
            <ProductosContainer />
        </>
    )
}

export default HomePage