import { useState, useEffect } from "react"
import { fetchUsersAsync } from "../utils"

function UserList() {

    //Estados
    const [usuarios, setUsuarios] = useState([])



    //useEffect(()=>{},[])

    //Acciones : Cuando quiero escribir algo dentro de un componente y eso me da bucle infinito, entonces lo envuelvo en un useEffect
    useEffect(() => {

        const respuesta = fetchUsersAsync()

        respuesta
            .then((respuesta) => {
                console.log(respuesta)
                setUsuarios(respuesta.users)
            })
            .catch((respuesta) => {
                console.log(respuesta)
            })

    }, [])



    //Vista
    return (
        <div>
            User List
            {usuarios.map((usuario) => {
                return (
                    <li key={usuario.id}>
                        <img src={usuario.image} alt={usuario.firstName} />
                        <h3>Hola, {usuario.firstName}!</h3>
                        <p>{usuario.username}</p>
                    </li>
                )
            })}
        </div>
    )
}

export default UserList