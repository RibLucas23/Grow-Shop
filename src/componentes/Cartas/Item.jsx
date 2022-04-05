import * as React from 'react';
import './ItemListContainer.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';

export default function Item({ id, precio, titulo, url, descripcion, stock }) {

    return (

        <Card className='carta' key={id} sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image={url}
                    alt="kit indoor"
                />
                <CardContent>
                    <Typography className='carta__titulo' gutterBottom variant="h5" component="div">
                        {titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        • {descripcion}
                    </Typography>
                    <span className='carta__precio'>$ {precio}</span>
                </CardContent>
                <p>Stock: {stock}</p>
            </CardActionArea>
            {/* Contador */}

            <ItemCount stock={stock} />

        </Card>

    )
}