import { Button } from "antd";
import { useState } from "react";

//Componente Hijo
function Counter({ handleEjemplo }) {


    //Estados
    const stock = 3;
    const [contador, setContador] = useState(2)
    const showMinError = contador <= 0;
    const showMaxError = contador > stock;


    //Acciones
    function handleSumar() {
        const nuevoContador = contador + 1;
        
        setContador(nuevoContador) //Los cambios de estado son asincronicos, entonces no tengo el calculo final una linea mas abajo
        handleEjemplo(nuevoContador)
    }

    function handleRestar() {
        //contador = contador - 1;
        setContador(contador - 1)
        console.log(contador)
    }


    //Vista
    if (!showMaxError) {
        return (
            <div>
                <Button onClick={handleSumar} disabled={showMaxError}>+</Button>
                <p>El contador va : {contador}</p>
                <Button onClick={handleRestar} disabled={showMinError}>-</Button>
            </div>
        )
    } else {
        return (
            <div>
                <Button onClick={handleSumar} disabled={showMaxError}>+</Button>
                <p>El contador va : {contador}</p>
                <Button onClick={handleRestar} disabled={showMinError}>-</Button>
                <p className="error-message">Te pasaste del stock disponible, solo hay {stock}!</p>
            </div>
        )
    }
}

export default Counter