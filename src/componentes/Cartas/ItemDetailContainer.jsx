import React, { useState, useEffect } from 'react'
import customFetch from '../Utils/customFetch';
import ItemDetail from './ItemDetail'
import { productos } from '../Utils/productos'
import { useParams } from 'react-router-dom';



function ItemDetailContainer() {
    const { id } = useParams()
    console.log(id)
    const [itemDetalle, setItemDetalle] = useState({})

    useEffect(() => {
        customFetch(2000, productos)
            .then((resultado) => {
                let producto = resultado.find(product => product.id === parseInt(id))
                setItemDetalle(producto)
            })
            .catch(error => console.log(error))
        console.log(itemDetalle)

    }, [id, itemDetalle])

    return (
        <>
            <ItemDetail item={itemDetalle} />

        </>
    )

}

export default ItemDetailContainer