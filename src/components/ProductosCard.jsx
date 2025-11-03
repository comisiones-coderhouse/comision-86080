import { Button, Card } from 'antd';
import { ShoppingCart } from 'lucide-react';
import { Link } from "react-router-dom";
import { useProducts } from '../hooks/useProducts';

const { Meta } = Card;

function ProductosCard({ producto }) {

    const elValorDelContexto = useProducts()

    function handleAddToCart() {
        elValorDelContexto.addProducts(1, producto)
    }

    return (
        <Card
            hoverable
            actions={[
                <Link to={`/detalle-producto/${producto.id}`}>
                    ver mas
                </Link>,
                <Button icon={<ShoppingCart size={16}/>} onClick={handleAddToCart} shape='circle' type='primary'/>
            ]}
            cover={
                <img
                    draggable={false}
                    alt={producto.title}
                    src={producto.thumbnail}
                />
            }
        >
            <Meta title={producto.title} description={`$${producto.price}`} />
        </Card>
    )
}

export default ProductosCard