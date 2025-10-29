import { Button } from "antd";
import { useParams, useNavigate } from "react-router-dom"
import validator from 'validator';
import SearchBar from "../SearchBar";
import DetalleProductoContainer from "../DetalleProductoContainer";


function DetalleProductoPage() {

    const navigate = useNavigate()
    const params = useParams()
    const valido = validator.isNumeric(params.id)


    function handleNavigateClick() {
        navigate("/")
    }

    return (
        <>
            {/* <h2>{!valido ? "Detalle Producto : ID no valido" : `Detalle Producto : ${params.id}`}</h2> */}
            {/* <SearchBar /> */}
            {!valido ? (
                <Button onClick={handleNavigateClick}>
                    Volver a productos
                </Button>
            ) : (
                <DetalleProductoContainer id={params.id} />
            )}
        </>
    )
}

export default DetalleProductoPage