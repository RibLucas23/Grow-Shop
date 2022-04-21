import React, { createContext, useState } from 'react'

export const Context = createContext();



export default function ContextProvider({ children }) {

    const [carrito, setCarrito] = useState([]);
    // AGREGAR AL CARRO 
    function addToCart(item) {
        setCarrito([...carrito, item]);
        console.log(item)
    }
    // REMOVER DEL CARRO
    function removeItem(itemId) {
        setCarrito(carrito.filter((item) => item.id !== itemId))
        console.log(itemId)
    }
    // LIMPIAR CARRO
    function clear() {
        setCarrito([])
        console.log(carrito)
    }

    return (
        <Context.Provider value={{ carrito, setCarrito, addToCart, removeItem, clear }}>
            {children}
        </Context.Provider>
    )
}
