import { useEffect, useState } from 'react'
import { getProductoById } from "../Lista"
import DetalleItem from "../DetalleItem/DetalleItem"
import { useParams } from 'react-router-dom'
import "./DetalleItemConteiner.css"

function DetalleItemConteiner() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const {productId} = useParams()

  useEffect(() => {
    getProductoById(productId)
      .then((res) => {
        setProduct(res || null)
      })
      .catch((err) => {
        console.log("Error al obtener el producto", err)
        setProduct(null)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [productId])

  return (
    <section className='conteinerDescrip'>
      {loading ? (
        <div className='status'>Cargando producto...</div>
      ) : product ? (
        <DetalleItem product={product} />
      ) : (
        <div className='status'>Producto no encontrado</div>
      )}
    </section>
  )
}

export default DetalleItemConteiner