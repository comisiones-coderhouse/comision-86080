import { X } from "lucide-react"
import { useState } from "react"


function Popup() {

    const [isOpen, setIsOpen] = useState(false)

    function handleOpenPopup() {
        setIsOpen(true)
    }
    
    function handleClosePopup() {
        setIsOpen(false)
    }


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