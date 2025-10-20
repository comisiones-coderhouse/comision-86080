import { Card } from 'antd';
import { Link } from "react-router-dom";

const { Meta } = Card;

function ProductosCard({ producto }) {
    return (
        <Card
            hoverable
            actions={[
                <Link to={`/detalle-producto/${producto.id}`}>
                    ver mas
                </Link>
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