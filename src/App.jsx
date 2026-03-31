import './App.css'
import Header from './components/Header/Header.jsx'
import ProductList from "./components/ProductList/ProductList.jsx"
import NotFound from "./components/NotFound/NotFound.jsx"
import DetalleItemConteiner from "./components/DetalleItemConteiner/DetalleItemConteiner.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useTheme } from './context/ThemeContext.jsx'

function App() {
  const {darkMode} = useTheme()
  const cardcount = 0

  return (
    <BrowserRouter>
      <div className={darkMode ? "app dark" : "app light"}>
        <Header cardcount={cardcount} titulo="Tienda Cafe" />
        <Routes>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/category/:categoryId' element={<ProductList/>}/>
          <Route path='/detail/:productId' element={<DetalleItemConteiner/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

