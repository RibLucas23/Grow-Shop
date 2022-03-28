import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const productos = require.context('../imgs/productos', true)
export default function CartaProductos() {


    return (

        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        image={productos("./kit1.jpg")}
                        alt="kit indoor"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            KIT INDOOR LED MX 50 BLACK CARPA CULTIVO SUSTRATOS MACETAS NEGRO
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            • Combo indoor completo incluye: carpa de cultivo con iluminación, ventilación, macetas, poleas, timer, fertilizantes y sustrato premium.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>


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