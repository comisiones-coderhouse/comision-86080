import { MailIcon, PhoneIcon, User2Icon } from "lucide-react";
import PageTitle from "../PageTitle"
import { Button, Flex, Input } from 'antd';
import { useRef, useState } from "react";
import { saveSale } from "../../utils";
import { serverTimestamp } from "firebase/firestore"
import { useProducts } from "../../hooks/useProducts";

function CheckoutPage() {

    const [id, setId] = useState(null)
    const nameRef = useRef()
    const phoneRef = useRef()
    const emailRef = useRef()
    const elValorDelContexto = useProducts()

    function handleConfirmarCompra(evt) {
        evt.preventDefault()

        const nombre = nameRef.current.input.value
        const telefono = phoneRef.current.input.value
        const email = emailRef.current.input.value

        const venta = {
            usuario: {
                nombre: nombre,
                telefono: telefono,
                email: email
            },
            fecha: serverTimestamp(),
            productos: [],
            total: 1000,
        }

        saveSale(venta)
            .then((id) => {

                console.log(id)

                nameRef.current.input.value = ""
                phoneRef.current.input.value = ""
                emailRef.current.input.value = ""

                elValorDelContexto.resetCart()

                setId(id)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <>
            <PageTitle title="Checkout" />
            {id != null
                ? <p>Gracias por su compra. Ticket : {id}</p>
                : (
                    <form onSubmit={handleConfirmarCompra}>
                        <Flex gap={8} vertical>
                            <Input placeholder="Nombre" prefix={<User2Icon color="rgba(0,0,0,0.2)" size={16} />} ref={nameRef} />
                            <Input placeholder="Telefono" prefix={<PhoneIcon color="rgba(0,0,0,0.2)" size={16} />} ref={phoneRef} />
                            <Input placeholder="Email" prefix={<MailIcon color="rgba(0,0,0,0.2)" size={16} />} ref={emailRef} />
                        </Flex>
                        <Button type="primary" htmlType="submit">Confirmar compra</Button>
                    </form>
                )}
        </>
    )
}

export default CheckoutPage