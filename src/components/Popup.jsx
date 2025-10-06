import { X } from "lucide-react"
import { useState } from "react"


function Popup() {

    //Estados
    //const [var1,var2,...varN] = unArray
    /* console.log(useState(1))
    console.log(useState("Hola"))
    console.log(useState(true))
    console.log(useState()) */
    const [isOpen, setIsOpen] = useState(false)

    /* const miArray = useState(false)
    const isOpen = miArray[0];
    const setIsOpen = miArray[1]; */


    //Accion
    function handleOpenPopup() {
        setIsOpen(true)
    }
    
    function handleClosePopup() {
        setIsOpen(false)
    }


    //Vista
    if (isOpen) {
        return (
            <>
                <div className="popup" onClick={handleClosePopup}>
                    <div className="popup__container">
                        Soy un popup
                        <button onClick={handleClosePopup}>
                            <X />
                        </button>
                    </div>
                </div>
                <button onClick={handleOpenPopup}>abrir popup</button>
            </>
        )
    } else {
        return <button onClick={handleOpenPopup}>abrir popup</button>
    }
}

export default Popup