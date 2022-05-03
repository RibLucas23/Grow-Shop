import React, { useState, useEffect, useContext } from "react";
import { Context } from '../Context/ContextProvider'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './carrito.css'
import { Button } from "@mui/material";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";



export default function TestFormulario() {
    let { carrito, clear, totalDeDinero } = useContext(Context)

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [phone, setPhone] = useState("");

    function terminarCompra() {

        //example buyer

        let order = {

            buyer: { name, phone, email },

            items: carrito.map(item => {

                return {

                    id: item.id,

                    titulo: item.titulo,

                    precioUnidad: item.precio,

                    cantidad: item.cantProduc

                }

            }),

            total: totalDeDinero,

        };
        if (name === '' || email === '' || phone === '') {
            alert('Por favor completa todos los campos')
        } else if (carrito.length === 0) {
            alert('No hay productos en el carrito')
        } else {
            //crear una orden en la base de datos
            const db = getFirestore();
            const ordersCollection = collection(db, 'orders');
            addDoc(ordersCollection, order).then(({ id }) => { alert(order.buyer.name + ' Tu compra ha sido realizada con exito \n Tu orden de compra es: ' + id) });
            // despues borro el carrito 
            clear()
            console.log(order);
        }
    }
    //debugger
    // useEffect(() => {

    //     console.log(name, email, phone);

    // }, [name, email, phone]);

    return (

        <>
            {/* Si  hay productos mostra... */}
            {carrito.length > 0 ? (
                <>
                    <div className='terminarCompra'>

                        <h1>Ya casi terminamos!</h1>
                        <h2>Por favor completa estos datos para validar la compra.</h2>

                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" label="Nombre" variant="outlined"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                }} />

                            <TextField id="outlined-basic" label="Email" variant="outlined"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }} />

                            <TextField id="outlined-basic" label="Telefono" variant="outlined"
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value)
                                }} />
                            <div className="terminarCompraBoton">
                                <Button variant="contained" color="success" onClick={() => { terminarCompra() }}> Terminar compra </Button>

                            </div>
                        </Box>
                    </div>
                </>

            ) : (
                <>
                    {/* Si no hay productos mostra... */}
                    <div className='terminarCompra'>

                        <h1>No hay productos en el carrito</h1>
                        <Link to="/" className='link'>
                            <Button variant="contained" color="primary">
                                Ir al inicio
                            </Button>
                        </Link>
                    </div>
                </>
            )}
        </>
    );

}