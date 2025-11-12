import { Button } from "antd";
import { useParams/* , useNavigate */ } from "react-router-dom"
/* import validator from 'validator'; */
import DetalleProductoContainer from "../DetalleProductoContainer";


function DetalleProductoPage() {

    /* const navigate = useNavigate() */
    const params = useParams()
    /* const valido = validator.isNumeric(params.id) */


    /* function handleNavigateClick() {
        navigate("/")
    } */

    return (
        <>
            <DetalleProductoContainer id={params.id} />
            {/* {!valido ? (
                <Button onClick={handleNavigateClick}>
                    Volver a productos
                </Button>
            ) : (
                <DetalleProductoContainer id={params.id} />
            )} */}
        </>
    )
}

export default DetalleProductoPage