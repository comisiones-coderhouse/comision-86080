import { useParams } from "react-router-dom"
import DetalleProductoContainer from "../DetalleProductoContainer";


function DetalleProductoPage() {

    const params = useParams()

    return (
        <DetalleProductoContainer id={params.id} />
    )
}

export default DetalleProductoPage