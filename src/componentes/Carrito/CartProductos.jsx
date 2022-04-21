import React, { useContext } from "react";
import Button from '@mui/material/Button'
import { Context } from "../Context/ContextProvider";
import './carrito.css'
export default function CartProductos(item) {
    let { removeItem } = useContext(Context)


    return (
        <div key={item.item.id}>

            <h1>producto : {item.item.titulo} </h1>

            <div>
                <img className="imagenCarrito" src={item.item.url} alt="" />
                <h2>precio : {item.item.precio}</h2>
                <h3>id: {item.item.id}</h3>
            </div>
            < Button variant="contained" color="warning" onClick={() => {
                removeItem(item.item.id)
            }}>
                Quitar del carro
            </Button >
        </div>
    )
}
