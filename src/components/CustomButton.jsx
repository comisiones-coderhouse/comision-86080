//Los props de un componente siempre siempre llegan en un objeto
//Por mas que no le envie props a un componente, igual el objeto prop existe aunque vacio
//Los props son de solo-lectura


/* 

const btn = document.querySelector(".mi-boton");

btn.addEventListener("click",function(){})


*/



function CustomButton({ customClass, texto, leadingIcon, children, isAllowed }) {
    //const { isAllowed, customClass, texto, leadingIcon, children } = props

    //Acciones
    function handleClick() {
        console.log("Hola soy un click")
    }


    //Vista
    if (isAllowed) {

        return (
            <button onClick={handleClick}>Bienvenido</button>
        )

    } else {

        return (
            <button>Por favor sali</button>
        )

    }

    /* 
        const finalClass = "custom-button " + customClass
    
        return (
            <button className={finalClass}>
                {texto} {leadingIcon}
            </button>
        ) */

    /* return (
        <button>
            {children}
        </button>
    ) */
}

export default CustomButton