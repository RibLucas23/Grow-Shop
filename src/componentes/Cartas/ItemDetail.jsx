import React from 'react'

function ItemDetail({ item }) {
    console.log(item.url)

    return (


        <>
            <div className='itemDetail'>

                <div className='itemDetail__imagenes'>
                    <div>
                        <img src="{item.productosImgs.carpa}" alt="" />
                    </div>
                    <img src="{item.url} " alt="imagen producto" />
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
// function ItemDetail({ id, precio, titulo, url, descripcion, stock }) {
//     console.log(url)

//     return (


//         <>
//             <div className='itemDetail'>

//                 <div className='itemDetail__imagenes'>
//                     <div>
//                         <img src="" alt="" />
//                     </div>
//                     <img src="{url} " alt="imagen producto" />
//                 </div>

//                 <div className='itemDetail__detalles'>
//                     <h1>{titulo}</h1>
//                     <h2>$ {precio}</h2>

//                     <h3>{descripcion}</h3>

//                 </div>
//             </div>
//         </>
//     )
// }

export default ItemDetail