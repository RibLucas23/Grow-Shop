import React from 'react'
import Item from './Item'
import './ItemListContainer.css'

function ItemList({ productos }) {
    console.log(productos)

    return (

        productos.map(producto => (
            <Item
                key={producto.id}
                titulo={producto.titulo}
                precio={producto.precio}
                url={producto.url}
                descripcion={producto.descripcion}
                stock={producto.stock}
            />
        ))

    )
}

export default ItemList

