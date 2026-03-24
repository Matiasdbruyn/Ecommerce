import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard.jsx"
import "./ProductList.css"

const Productos = [
    {
        id: 1,
        name: "Samsung",
        description:"aca va texzto description",
        price: 4.000,
    },
    {
        id: 2,
        name: "Iphone",
        description:"aca va texzto description",
        price: 5.000,
    },
    {
        id: 3,
        name: "Motorola",
        description:"aca va texzto description",
        price: 3.000,
    },
    {
        id: 4,
        name: "Xiaomi",
        description:"aca va texzto description",
        price: 2.000,
    },
    {
        id: 5,
        name: "Nokia",
        description:"aca va texzto description",
        price: 1.000,
    },
]

function ProductList({añadirCarrito}) {
    const [products] = useState(Productos)
    return (
        <div className="producto-lista">
            {products.map((item) => (
                <ProductCard
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    añadirCarrito={() => añadirCarrito(item)}
                >
                    <p>Producto ID: {item.id}</p>
                </ProductCard>
            ))}
        </div>
    )
}

export default ProductList