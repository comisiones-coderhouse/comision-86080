/* import { Button } from "antd"; */

import CustomButton from "./CustomButton"

function Nav() {
    return (
        <nav>
            <a href="#">link</a>
            <a href="#">link</a>
            <a href="#">link</a>
            {/* <Button>login</Button> */}

            <CustomButton texto="login" edad="35"/>
            {/* CustomButton("login") */}

            <CustomButton texto="ver mas" edad="20"/>
            {/* CustomButton("ver mas") */}

        </nav>
    )
}
export default Nav