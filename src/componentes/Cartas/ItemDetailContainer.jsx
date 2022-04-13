import React, { useState, useEffect } from 'react'
import customFetch from '../Utils/customFetch';
import ItemDetail from './ItemDetail'
import { productos } from '../Utils/productos'
import { useParams } from 'react-router-dom';
import Loading from '../Utils/Loading';



function ItemDetailContainer() {

    // CREO LOS ESTADOS
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    console.log(id)
    const [itemDetalle, setItemDetalle] = useState({})

    // DEFINO LOS EFECTOS (loadin y separar el itemdetalle)
    useEffect(() => {
        setLoading(true)
        customFetch(2000, productos)
            .then((resultado) => {
                let producto = resultado.find(product => product.id === parseInt(id))
                setItemDetalle(producto)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))

    }, [id, itemDetalle])

    return (
        <>
            {loading ? (
                <div className='cargando'>
                    <h1>Cargando el producto...</h1>
                    <Loading />
                </div>) : (
                <ItemDetail item={itemDetalle} />
            )
            }
        </>
    )
}

export default ItemDetailContainer