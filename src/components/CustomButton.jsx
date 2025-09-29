function CustomButton({ texto, edad }) {
    return (
        <button className="custom-button">
            {texto} {edad}
        </button>
    )
}

export default CustomButton