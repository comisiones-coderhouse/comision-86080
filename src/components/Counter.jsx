import { Button } from "antd";
import { useState } from "react";

function Counter({ handleEjemplo, stock }) {


    const [contador, setContador] = useState(1)
    const showMinError = contador <= 0;
    const showMaxError = contador > stock;


    function handleSumar() {
        const nuevoContador = contador + 1;

        setContador(nuevoContador)
        handleEjemplo(nuevoContador)
    }

    function handleRestar() {
        setContador(contador - 1)
    }

    return (
        <div>
            <Button onClick={handleSumar} disabled={showMaxError}>+</Button>
            <p>El contador va : {contador}</p>
            <Button onClick={handleRestar} disabled={showMinError}>-</Button>
            {showMaxError
                ? <p className="error-message">Te pasaste del stock disponible, solo hay {stock}!</p>
                : null}
        </div>
    )
}

export default Counter