import { getProductsByCategory } from "../../utils"
import PageTitle from "../PageTitle"
import SearchBar from "../SearchBar"

function CategoryPage() {

    getProductsByCategory()
    
    return (
        <>
            <PageTitle title="Categoria" />
            <SearchBar />
        </>
    )
}

export default CategoryPage