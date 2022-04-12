import React from 'react'
import Item from './Item'
import './ItemListContainer.css'

function ItemList({ productos }) {

    // USANDO LOS PRODUCTOS QUE ME PASA ItemListContainer,  MAPEO Y LE PASO POR PARAMETROS A ITEM 
    return (

        productos.map(producto => (
            <Item item={producto}

            />
        ))

    )
}

export default ItemList

