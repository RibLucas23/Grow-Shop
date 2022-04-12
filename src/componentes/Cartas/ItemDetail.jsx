import React from 'react'

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

                </div>
            </div>
        </>
    )
}


export default ItemDetail