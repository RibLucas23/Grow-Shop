import { Grid } from '@mui/material'
import React from 'react'
import Item from './Item'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom';

function ItemList({ productos }) {
    const { id } = useParams()
    // USANDO LOS PRODUCTOS QUE ME PASA ItemListContainer,  MAPEO Y LE PASO POR PARAMETROS A ITEM 
    return (
        <>

            {id !== "/" ? (
                <h1 className='titulosCat'>{id}</h1>

            ) : (<></>)}

            <Grid container className='itemList'>


                {productos.map(producto => (
                    <Grid item lg={3} md={6} key={producto.id} >

                        <Item item={producto} />

                    </Grid>
                ))}

            </Grid>


        </>

    )
}

export default ItemList

