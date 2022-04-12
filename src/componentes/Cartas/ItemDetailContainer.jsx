import React, { useState, useEffect } from 'react'
// import customFetch from '../Utils/customFetch';
import ItemDetail from './ItemDetail'
import { productos } from '../Utils/productos'
import { useParams } from 'react-router-dom';



function ItemDetailContainer() {
    const { id } = useParams()
    console.log(id)
    const [itemDetalle, setItemDetalle] = useState({})

    useEffect(() => {
        let producto = productos.filter(product => product.id == id)
        setItemDetalle(producto[0])
        console.log(itemDetalle)

    }, [id, itemDetalle])

    return (
        <>
            <ItemDetail item={itemDetalle} />

        </>
    )

}

export default ItemDetailContainer