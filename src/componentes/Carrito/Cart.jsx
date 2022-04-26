import React, { useContext } from "react";
import Button from '@mui/material/Button'
import { Context } from "../Context/ContextProvider";
import './carrito.css'


export default function CartProductos(item) {
    let { removeItem } = useContext(Context)


    return (
        <>
            <div key={item.item.id} className="itemCarrito" >

                <h5>producto : {item.item.titulo} </h5>
                <div className="itemCarritoImagen">
                    <img className="imagenCarrito" src={item.item.url} alt="" />
                </div>

                <div>
                    <p>precio unidad : {item.item.precio}</p>
                    <p>cantidad de unidades {item.item.cantProduc}</p>
                </div>
                < Button variant="contained" color="warning" onClick={() => {
                    removeItem(item.item.id)
                }}>
                    Quitar del carro
                </Button >

            </div>
        </>
    )
}
