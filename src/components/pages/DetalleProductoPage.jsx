import { useParams } from "react-router-dom"

function DetalleProductoPage() {

    //console.log(location.pathname)
    const params = useParams() //{"id": "49823794823794823"}

    return (
        <h2>Detalle Producto : {params.id}</h2>
    )
}

export default DetalleProductoPage