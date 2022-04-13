import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({ item }) {

    return (


        <>
            <div className='itemDetail'>

                <div className='itemDetail__imagenes'>
                    {/* <div className='itemDetail__imagenes__chicas'>
                        <img src={item.productosImgs.carpa} alt="carpa" />
                    </div> */}
                    <img src={item.url} alt="imagen producto" />
                </div>

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