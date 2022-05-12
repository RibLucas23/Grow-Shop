import { Grid } from '@mui/material'
import React from 'react'
import Item from '../Cartas/Item';
import '../Cartas/ItemListContainer.css'

export default function Promociones({ productos }) {
    return (
        <>
            <Grid container className='itemList'>


                {productos.map(producto => (
                    <Grid item lg={3} md={4} key={producto.id} >

                        <Item item={producto} />

                    </Grid>
                ))}

            </Grid>
        </>
    )
}
