import { useParams } from "react-router-dom"

function HomePage(){

    const params = useParams()
    console.log("🚀 ~ HomePage ~ params:", params)

    return (
        <h2>Home</h2>
    )
}

export default HomePage