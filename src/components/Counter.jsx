import { useState } from "react";

function Counter() {

    //Estados
    //let contador = 0;

    //const [a,setA] = useState(valorInicial)
    const [contador, setContador] = useState(0)


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
    return (
        <div>
            <button onClick={handleSumar}>+</button>
            <p>El contador va : {contador}</p>
            <button onClick={handleRestar}>-</button>
        </div>
    )
}

export default Counter