import React, { useState } from 'react';
import './ItemListContainer.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

export default function Item({ item }) {
    const [cantProdCarro, setCantProdCarro] = useState(0);
    const onAdd = (cantidadProducto) => {
        setCantProdCarro(cantidadProducto)
    }
    // CREO LA CARTA PARA CADA PRODUCTO 
    return (

        <Card className='carta' elevation={10} key={item.id} sx={{ maxWidth: 450 }}>

            <Link to={"/item/" + item.id} className='link'>

                <CardActionArea>
                    <CardMedia
                        component="img"
                        className='carta__imagen'
                        image={item.url}
                        alt={item.nombre}
                    />
                    <CardContent>
                        <Typography className='carta__titulo' gutterBottom variant="h5" component="div">
                            {item.titulo}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='pItem'>
                            • {item.descripcion}
                        </Typography>
                        {item.promocion ? (
                            <>
                                <div className='preciosDiv'>
                                    <p className='carta__precio__viejo'> $ {item.precioViejo}</p>
                                    <p className='carta__precio'>$ {item.precio}</p>

                                </div>
                            </>
                        ) : (
                            <p className='carta__precio'>$ {item.precio}</p>
                        )}
                    </CardContent>
                    <Typography className='carta__stock' variant="h5" gutterBottom component="div">
                        Stock: {item.stock}
                    </Typography>
                </CardActionArea>
            </Link>
            {/* Contador */}
            {/* condicional carro. si cuando aprieto en comprar, y la cantidad de productos para el carro es mayor a 0, desaparece y aparece el boton de ir al carro */}
            {cantProdCarro > 0 ? (
                <>
                    <p>{cantProdCarro} productos en el carrito</p>
                    <Link to="/cart" className='link'>
                        <button>ir al carro</button>
                    </Link>
                </>
            ) : (
                <div className="botoneraItem">
                    <ItemCount stock={item.stock} onAdd={onAdd} item={item} />

                </div>
            )}
        </Card >

    )
}


