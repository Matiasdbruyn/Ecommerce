import { useTheme } from "../../context/ThemeContext.jsx"
import Card from "../Card/Card.jsx"
import './ProductCard.css'
import { Link } from 'react-router-dom'

function ProductCard({category, imagen, description, price, stock, id}) {
    const {darkMode} = useTheme()
    const inStock = stock > 0

    return (
        <Card imagen={imagen}>
            <h4 className="h4">{category}</h4>
            <p className="description">{description}</p>
            <div className="compra">
                <p className="pcompra">Precio: ${price}</p>
                <Link to={`/detail/${id}`} className="bbutton">Ver Detalle</Link>
            </div>
            <h3 className={`item-card__stock ${inStock ? "" : "is-empty"}`}>{inStock ? `Stock: ${stock}` : "Sin stock"}</h3>
        </Card>
    )
}

export default ProductCard