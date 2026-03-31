import { createContext, useContext, useState } from "react";

const CartContext = createContext()


export function CartProvider({ children }) {
    const [products, setProducts] = useState([])


    const addProducto = (product) => {
        setProducts([...products, product])
    }

    const removeProduct = (id) => {
        setProducts(products.filter(product => product.id !== id))
    }



    return (
        <CartContext.Provider value={{ products, addProducto, removeProduct }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext)
}