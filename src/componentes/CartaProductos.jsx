import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { productosJson } from '../productos'



export default function CartaProductos() {


    return (

        <>
            {productosJson.map((producto) => {
                return (
                    <Card className='carta' key={producto.id} sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={producto.url}
                                alt="kit indoor"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {producto.titulo}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    • {producto.descripcion}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                )
            })}


        </>
    )
}

// export default function CartaProductos() {
//     let img = "../imgs/productos/kit1.jpg"
//     return (
//         <>
//             <div>
//                 <img src={img} alt="kit indoor" />
//                 <h5>KIT INDOOR LED MX 50 BLACK CARPA CULTIVO SUSTRATOS MACETAS NEGRO</h5>
//             </div>
//         </>
//     )
// }