import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard.jsx"
import "./ProductList.css"
import { getProducts, getProductsByCategory } from "../Lista.js";
import { useParams } from "react-router-dom";

function ProductList({
    greetings = "Nuestros productos",
}) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        asyncFunction(categoryId)
            .then((res) => {
                setProducts(res)
            })
            .catch((err) => {
                console.log("Error al obtener los productos", err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (

        <section className='producto-lista'>
            <header className='producto-lista-header'>
                <h2>{greetings}</h2>
            </header>
            <div className="ProductCard">
                {loading
                    ? (
                        <div className='estado'>Cargando productos....</div>)
                    : products.length === 0 ? (
                        <div className='estado'>No hay productos disponibles </div>
                    ) : (
                        products.map((item) => (
                            <ProductCard
                                key={item.id}
                                id={item.id}
                                category={item.category}
                                description={item.description}
                                price={item.price}
                                imagen={item.imagen}
                                stock={item.stock}
                            >
                            </ProductCard>
                        )
                        )
                    )
                }
            </div>
        </section>
    )
}

export default ProductList