import CustomButton from "./CustomButton"


/* 

props = {}

props = {
    hasButton : true|false
}


const {prop1:var1,prop2:var2, ....propN:varN} = unObjeto

*/



//function Nav(props) {
function Nav({ hasButtons }) {

    //const {hasButton:hasButtons} = props
    //const { hasButtons } = props

    if (hasButtons === true) {
        return (
            <nav className="nav">
                <a href="#">link</a>
                <a href="#">link</a>
                <a href="#">link</a>
                <CustomButton isAllowed={true} texto={"soy un boton"} />
                <CustomButton texto={"Soy otro boton"} isAllowed={false} />
            </nav>
        )
    } else {
        return (
            <nav className="nav">
                <a href="#">link</a>
                <a href="#">link</a>
                <a href="#">link</a>
            </nav>
        )
    }
}


export default Nav