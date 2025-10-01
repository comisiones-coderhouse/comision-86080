/* import { Button } from "antd"; */

import CustomButton from "./CustomButton"


function Nav(props) {
    if (props.hasButtons === true) {
        return (
            <nav className="nav">
                <a href="#">link</a>
                <a href="#">link</a>
                <a href="#">link</a>
                <CustomButton isAllowed={true} />
                <CustomButton isAllowed={false} />
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


/* function Nav() {
    return (
        <nav>
            <a href="#">link</a>
            <a href="#">link</a>
            <a href="#">link</a>
            <Button>login</Button>

            <CustomButton texto="login" edad="35"/>
            CustomButton("login")

            <CustomButton texto="ver mas" edad="20"/>
            CustomButton("ver mas")

            <CustomButton
                texto="soy un boton" 
                leadingIcon="😊"
                customClass="primary"
            />

            <CustomButton
                texto="soy otro boton" 
                leadingIcon="😂"
                customClass="danger"
            />

            <CustomButton>
                Login
            </CustomButton>

            <CustomButton children="Login"/>

            <button>
                Login
            </button>

            <CustomButton edad={35} />
            <CustomButton edad={25} />

            <CustomButton isAllowed={true}/>
            <CustomButton isAllowed={true}/>

        </nav>
    )
} */
export default Nav