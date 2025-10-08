import { Button, Input } from "antd"
import { User } from "lucide-react"
import { useRef, useState } from "react"

function Form() {

    //useRef
    const ref = useRef()
    //ref == { current : undefined }
    //ref == { current : <input/> }
    const [usuarios, setUsuarios] = useState([])

    function handleSaveClick() {
        //const copia = [...usuarios]
        //copia.push(ref.current.input.value)
        //ref.current.input.value == "Horacio"
        //setUsuarios(copia)
        setUsuarios([...usuarios, ref.current.input.value])
    }

    return (
        <div>
            <form>
                <Input placeholder="ej : Horacio" prefix={<User color="rgba(0,0,0,0.5)" />} ref={ref} />
                <Button onClick={handleSaveClick}>agregar</Button>
            </form>
            <ul>
                {usuarios.map((usuario, indice) => {
                    return <li key={indice}>{usuario}</li>
                })}
            </ul>
        </div>
    )
}

export default Form