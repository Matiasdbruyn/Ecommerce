import Card from "../Card/Card.jsx"
import './ProductCard.css'

function ProductCard({ name, description,  price, añadirCarrito}) {
    return (
        <Card>
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="compra">
                <p>Precio: ${price}</p>
                <button onClick={añadirCarrito}>Agregar al carrito</button>
            </div>
        </Card>
    )
}

export default ProductCard