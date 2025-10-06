import { useState } from "react";

function Counter() {

    //Estados
    const stock = 3;
    const [contador, setContador] = useState(2)
    const showError = contador > stock;

    
    //Acciones
    function handleSumar() {
        //contador = contador + 1;
        setContador(contador + 1)
        console.log(contador)
    }

    function handleRestar() {
        //contador = contador - 1;
        setContador(contador - 1)
        console.log(contador)
    }


    //Vista
    if (!showError) {
        return (
            <div>
                <button onClick={handleSumar} /* disabled={disabled} */>+</button>
                <p>El contador va : {contador}</p>
                <button onClick={handleRestar}>-</button>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={handleSumar} /* disabled={disabled} */>+</button>
                <p>El contador va : {contador}</p>
                <button onClick={handleRestar}>-</button>
                <p className="error-message">Te pasaste del stock disponible, solo hay {stock}!</p>
            </div>
        )
    }
}

export default Counter