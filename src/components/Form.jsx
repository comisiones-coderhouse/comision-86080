import { Button, Input } from "antd"
import { User } from "lucide-react"
import { useState } from "react"

function Form() {

    const [nombre, setNombre] = useState("")//"Horacio"
    const [usuarios, setUsuarios] = useState([])

    function handleSaveClick(/* evt */) {
        //console.log("click en boton")
        //console.log(evt)//{...., target : {}}
        //console.log(evt.target)
        //console.log(nombre)

        //1- Copio el array
        //const elNuevoArray = [...elArrayACopiar]
        const copiaUsuarios = [...usuarios]

        //2- Modifico la copia
        //Array.push() -> Agrega algo al final de un array
        //usuarios.push("Horacio")
        copiaUsuarios.push(nombre)

        //3- Piso el estado original con la copia
        //setUsuarios()
        setUsuarios(copiaUsuarios)
    }

    function handleInputChange(evt) {
        //console.log("input changed")
        //console.log(evt)//{..., target : {}}
        //console.log(evt.target)
        const elInput = evt.target
        //console.log(elInput.value)
        setNombre(elInput.value)
    }

    return (
        <form>
            <Input type="text" placeholder="Ej : Horacio" onChange={handleInputChange} id="test" prefix={<User color="rgba(0,0,0,0.5)" />} />
            <Button onClick={handleSaveClick}>
                guardar
            </Button>
        </form>
    )
}

export default Form