//Los props de un componente siempre siempre llegan en un objeto
//Por mas que no le envie props a un componente, igual el objeto prop existe aunque vacio
//Los props son de solo-lectura


/* 

const btn = document.querySelector(".mi-boton");

btn.addEventListener("click",function(){})


*/



function CustomButton(props) {

    //Acciones
    function handleClick(){
        console.log("Hola soy un click")
    }


    //Vista
    if (props.isAllowed) {

        return (
            <button onClick={handleClick}>Bienvenido</button>
        )

    } else {

        return (
            <button>Por favor sali</button>
        )

    }

    /* 
        const finalClass = "custom-button " + props.customClass
    
        return (
            <button className={finalClass}>
                {props.texto} {props.leadingIcon}
            </button>
        ) */

    /* return (
        <button>
            {props.children}
        </button>
    ) */
}

export default CustomButton