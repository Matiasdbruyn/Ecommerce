import "./DetalleItem.css"

function DetalleItem({ product }) {
    if (!product) {
        return null
    }

    const { stock, price, category, description, name, imagen } = product;
    const inStock = stock > 0
    const priceLabel = `$${price}`

    return (
        <section className='detail'>
            <div className='detail__media'>
                <img src={imagen} alt={name} loading="lazy" />
            </div>
            <div className='detail__info'>
                <span className='detail__category'>{category}</span>
                <h2>{description}</h2>
                <p className='detail__price'>{priceLabel}</p>
                <p className={`detail__stock ${inStock ? "" : "is-empty"}`}>
                    {inStock ? `Stock: ${stock}` : "Sin stock"}
                </p>
                <p className='detail__description'>{name}</p>
                <div className='detail__actions'>
                    <button className='detail__cta' disabled={!inStock}>
                        {inStock ? "Agregar al carrito" : "No disponible"}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default DetalleItem