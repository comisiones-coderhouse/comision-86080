import { Card } from 'antd';
const { Meta } = Card;
//Presentacional : Solo se encarga de la vista
function ProductosCard({ producto }) {
    return (
        <Card
            hoverable
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