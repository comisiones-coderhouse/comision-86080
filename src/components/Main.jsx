/* import miImagen from "../fondo.jpg" */

import Counter from "./Counter"



function Main() {
    return (
        <main className="main">
            <div>
                {/* <img src={miImagen} alt="" /> */}
                {/* <img src="/fondo.jpg" alt="" /> */}
                {/* 😀 */}
                {/* <svg viewBox="0 0 36 36" fill="url(#facebook__a)"><path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" /><path fill="#FFF" d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z" /></svg> */}
            </div>
            <h2>Soy Main</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, id maxime impedit repellendus similique, distinctio tempora ut dolor necessitatibus voluptatibus cum aperiam veritatis, quo porro quibusdam! Soluta repellat minus necessitatibus.</p>
            <Counter />
        </main>
    )
}

export default Main