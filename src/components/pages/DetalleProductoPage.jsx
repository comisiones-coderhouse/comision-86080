import { Button } from "antd";
import { Link, useParams, useNavigate } from "react-router-dom"
import validator from 'validator';
import SearchBar from "../SearchBar";
import DetalleProductoContainer from "../DetalleProductoContainer";


function DetalleProductoPage() {

    const navigate = useNavigate()
    const params = useParams() //{ id : "carlos" }
    const valido = validator.isNumeric(params.id)


    function handleNavigateClick() {
        navigate("/productos")
    }


    if (!valido) {
        return (
            <>
                <h2>Detalle Producto : ID no valido</h2>
                <SearchBar />
                <Button onClick={handleNavigateClick}>
                    Volver a productos
                </Button>
            </>
        )
    }

    return (
        <>
            <h2>Detalle Producto : {params.id}</h2>
            <SearchBar />
            <DetalleProductoContainer id={params.id}/>
        </>
    )
}

export default DetalleProductoPage