import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../Context/ContextProvider'
import CartProductos from './CartProductos'

export default function Cart() {
    let { carrito, clear } = useContext(Context)
    console.log(carrito)
    return (
        <>
            {carrito.map(item => (
                <CartProductos item={item}
                />
            ))}
            < Button variant="contained" color="error" onClick={() => {
                clear()
            }}>
                clear
            </Button >


        </>
    )
}
