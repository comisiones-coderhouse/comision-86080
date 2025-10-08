function CustomButton({ customClass, texto, leadingIcon, isAllowed }) {

    const finalClass = "custom-button " + customClass

    function handleClick() {
        console.log("Hola soy un click")
    }


    if (isAllowed) {
        return (
            <button onClick={handleClick} className={finalClass}>
                {texto} {leadingIcon}
            </button>
        )
    } else {
        return (
            <button className={finalClass}>
                {texto} {leadingIcon}
            </button>
        )
    }
}

export default CustomButton