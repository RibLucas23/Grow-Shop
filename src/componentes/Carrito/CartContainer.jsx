
import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context/ContextProvider'
import Cart from './Cart'
import './carrito.css'


export default function CartContainer() {
    let { carrito, clear, totalDeDinero } = useContext(Context)
    // console.log(carrito)

    return (
        <>
            {/* Si  hay productos mostra... */}
            {carrito.length > 0 ? (
                <>
                    <div className='carritoEntero'>

                        {/* MAPEO EL CARRITO */}
                        <div className='itemsCarritoCompleto'>
                            {carrito.map(item => (
                                <Cart key={item.id} item={item}
                                />
                            ))}
                        </div>

                        {/* BOTONES*/}
                        <div className='botones'>
                            < Button variant="contained" color="error" onClick={() => { clear() }}>
                                clear
                            </Button >
                            <h1>Total: $ {totalDeDinero} </h1>
                            < Button variant="contained" color="success">
                                Terminar compra
                            </Button >
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {/* Si no hay productos mostra... */}
                    <h1>No hay productos en el carrito</h1>
                    <Link to="/" className='link'>
                        <button>ir al Inicio</button>
                    </Link>
                </>
            )}


        </>
    )
}
