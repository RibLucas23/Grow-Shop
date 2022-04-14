import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemDetailImgs from './ItemDetailImgs'

function ItemDetail({ item }) {

    return (


        <>
            <div className='itemDetail'>

                <ItemDetailImgs producto={item} />

                <div className='itemDetail__detalles'>
                    <h1>{item.titulo}</h1>
                    <h2>$ {item.precio}</h2>
                    <h3>{item.descripcion}</h3>

                    <div className="botoneraItemDetalle">
                        <ItemCount stock={item.stock} />

                    </div>
                </div>
            </div>
        </>
    )
}


export default ItemDetail