import React, { useState, useEffect, useContext } from "react";
import { Context } from '../Context/ContextProvider'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './carrito.css'
import { Button } from "@mui/material";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";



export default function TestFormulario() {
    let { carrito, clear, totalDeDinero } = useContext(Context)

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [phone, setPhone] = useState("");

    const [errorName, setErrorName] = useState("");
    const [leyendaName, setLeyendaName] = useState("");
    const [errorPhone, setErrorPhone] = useState("");
    const [leyendaPhone, setLeyendaPhone] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [leyendaMail, setLeyendaMail] = useState("");
    function terminarCompra() {

        //example buyer

        let order = {

            buyer: { name, phone, email },
            date: serverTimestamp(),

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
            console.log('Por favor completa todos los campos')
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
                            className="terminarCompra__formulario"
                            autoComplete="off"
                        >
                            {/* Form Nombre  */}
                            <TextField id="outlined-basic" label="Nombre" variant="outlined" required={true}
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                }
                                }
                                error={errorName}
                                helperText={leyendaName}
                            />

                            {/* Form Mail  */}
                            <TextField id="outlined-basic" label="Email" variant="outlined" required={true} type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }
                                }
                                error={errorMail}
                                helperText={leyendaMail} />

                            {/* Form Phone  */}
                            <TextField id="outlined-basic" label="Telefono" variant="outlined" required={true}
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value)
                                }
                                }
                                error={errorPhone}
                                helperText={leyendaPhone} />
                            {/* Boton de terminar Compra  */}
                            <div className="terminarCompraBoton">
                                <Button variant="contained" color="success" onClick={() => {
                                    // Hago una Validacion para saber si completo todos los campos
                                    if (name === "") {
                                        setErrorName('true')
                                        setLeyendaName('Por favor completa el nombre')
                                    } else {
                                        setErrorName('')
                                        setLeyendaName('')
                                    }
                                    if (email === "") {
                                        setErrorMail('true')
                                        setLeyendaMail('Por favor completa el email')
                                    } else {
                                        setErrorMail('')
                                        setLeyendaMail('')
                                    }
                                    if (phone === "") {
                                        setErrorPhone('true')
                                        setLeyendaPhone('Por favor completa el telefono')
                                    } else {
                                        setErrorPhone('')
                                        setLeyendaPhone('')
                                    }
                                    terminarCompra()
                                }}> Terminar compra </Button>

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