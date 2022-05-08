import React from 'react'
import Item from './Item'
import './ItemListContainer.css'

function ItemList({ productos }) {

    // USANDO LOS PRODUCTOS QUE ME PASA ItemListContainer,  MAPEO Y LE PASO POR PARAMETROS A ITEM 
    return (
        <div className='cartas'>

            {productos.map(producto => (
                <Item key={producto.id} item={producto}

                />
            ))}
        </div>

    )
}

export default ItemList

