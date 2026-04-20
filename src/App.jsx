import './App.css'
import Header from './components/Header/Header.jsx'
import ProductList from "./components/ProductList/ProductList.jsx"
import NotFound from "./components/NotFound/NotFound.jsx"
import DetalleItemConteiner from "./components/DetalleItemConteiner/DetalleItemConteiner.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useTheme } from './context/ThemeContext.jsx'
import { addDoc, collection, getDoc, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from './servicios/firebase/firebase.js'

const coleccionProductos = collection(db, 'productos')

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)

  const fetchProducts = async () => {
    console.log("Pide los productos a la base de datso");
    setLoading(true);
    setError("");

    try {
      const q = query(productsCollection, orderBy("price"));
      const snapshot = await getDocs(q);

      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(docs);
      setProducts(docs);
    } catch (error) {
      console.log(error);
      setError("Hubo un error al cargar los productos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Agrega un nuevo producto a la base de datos");
    if (!name.trim() || !price.trim()) {
      setError('Campos obligatorios')
      return
    }
    setError('')
    try {
      await addDoc(productsCollection, {
        name: name.trim(),
        price: Number(price),
        createdAt: Date.now()
      })
      setName('')
      setPrice(0)
      fetchProducts()
    } catch (error) {
      console.log(error)
      setError('No se pudo agregar el producto')
    }
  }

  const { darkMode } = useTheme()
  const cardcount = 0

  return (
    <BrowserRouter>
      <div className={darkMode ? "app dark" : "app light"}>
        <Header cardcount={cardcount} titulo="Tienda Cafe" />
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/category/:categoryId' element={<ProductList />} />
          <Route path='/detail/:productId' element={<DetalleItemConteiner />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      <main className="container">
        <p className="subtitle">Consulta de producto y agrega nuevos registros</p>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre de produto"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Item price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <button type='submit'>Agregar producto</button>
        </form>

        {error && <p className="error">{error}</p>}

        <section>
          <div className="header-row">
            <h2>Productos</h2>
            <button disabled={loading}>
              {loading ? "Cargando" : "Recargar"}
            </button>
          </div>

          {loading ? (
            <p>cargando productos...</p>
          ) : products.length === 0 ? (
            <p>No hay productos registrados</p>
          ) : (
            <ul className="list">
              {products.map((product) => (
                <li key={product.id} className="item">
                  <span>{product.name}</span>
                  <strong>{product.price}</strong>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
      </div>
    </BrowserRouter>
  )
}

export default App

