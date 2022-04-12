import * as React from 'react';
import './ItemListContainer.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

export default function Item({ item }) {
    // CREO LA CARTA PARA CADA PRODUCTO 
    return (

        <Card className='carta' key={item.id} sx={{ maxWidth: 345 }}>

            <Link to={"/item/" + item.id} className='link'>

                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        image={item.url}
                        alt="kit indoor"
                    />
                    <CardContent>
                        <Typography className='carta__titulo' gutterBottom variant="h5" component="div">
                            {item.titulo}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            • {item.descripcion}
                        </Typography>
                        <span className='carta__precio'>$ {item.precio}</span>
                    </CardContent>
                    <p>Stock: {item.stock}</p>
                </CardActionArea>
            </Link>
            {/* Contador */}

            <ItemCount stock={item.stock} />

        </Card >

    )
}


