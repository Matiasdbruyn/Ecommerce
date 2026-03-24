import './App.css'
import Header from './components/Header.jsx'
import ProductList from "./components/ProductList/ProductList.jsx"

function App() {

  return (
    <div className="app">
      <main>
        <Header/>
        <ProductList/>
      </main>
    </div>
  )
}

export default App

