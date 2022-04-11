import React, { useState, useEffect } from 'react'
import customFetch from '../Utils/customFetch';
import ItemDetail from './ItemDetail'
import { productoUnico } from '../Utils/productos'




function ItemDetailContainer() {

    const [itemDetalle, setItemDetalle] = useState({})

    useEffect(() => {
        customFetch(1000, productoUnico)
            .then(resultado => setItemDetalle(resultado))
            .catch(error => console.log(error))

    }, [itemDetalle])
    return (
        <>
            <ItemDetail item={itemDetalle} />

        </>
    )
    // return (
    //     <>
    //         <ItemDetail
    //             key={itemDetalle.id}
    //             titulo={itemDetalle.titulo}
    //             precio={itemDetalle.precio}
    //             url={itemDetalle.url}
    //             descripcion={itemDetalle.descripcion}
    //             stock={itemDetalle.stock} />

    //     </>
    // )
}

export default ItemDetailContainer