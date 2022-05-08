import React, { useState } from "react";
//css
import './agregarProductos.css'
//mui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
//firebase
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function AgregarProductos() {
    //creo los estados (datos del producto nuevo)
    const [nombre, setNombre] = useState("");
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [imagen, setImagen] = useState("");
    const [categoria, setCategoria] = useState("");
    const [stock, setStock] = useState("");

    //Base de datos (database)
    const db = getFirestore();
    //creo variable del producto nuevo
    let productoNuevo = { nombre, titulo, descripcion, precio, url: imagen, category: categoria, stock };
    //creo una funcion para agregar el producto nuevo 
    function agregarProducto() {
        //si esta vacio algun campo no se puede agregar
        if (nombre === '' || titulo === '' || descripcion === '' || precio === '' || imagen === '' || categoria === '' || stock === '') {
            alert('Por favor completa todos los campos')
        } else {
            //Si todos los campos estan completos, se agrega el producto
            const productsCollection = collection(db, 'productos');
            addDoc(productsCollection, productoNuevo).then(() => { alert('Producto agregado con exito') });
        }
    }

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Nombre" variant="outlined"
                    value={nombre}
                    onChange={(e) => {
                        setNombre(e.target.value)
                    }} />

                <TextField id="outlined-basic" label="titulo" variant="outlined"
                    value={titulo}
                    onChange={(e) => {
                        setTitulo(e.target.value)
                    }} />

                <TextField id="outlined-basic" label="descripcion" variant="outlined"
                    value={descripcion}
                    onChange={(e) => {
                        setDescripcion(e.target.value)
                    }} />
                <TextField id="outlined-basic" label="precio" variant="outlined"
                    value={precio}
                    onChange={(e) => {
                        setPrecio(e.target.value)
                    }} />

                <TextField id="outlined-basic" label="imagen" variant="outlined"
                    value={imagen}
                    onChange={(e) => {
                        setImagen(e.target.value)
                    }} />
                <TextField id="outlined-basic" label="categoria" variant="outlined"
                    value={categoria}
                    onChange={(e) => {
                        setCategoria(e.target.value)
                    }} />
                <TextField id="outlined-basic" label="stock" variant="outlined"
                    value={stock}
                    onChange={(e) => {
                        setStock(e.target.value)
                    }} />

                <div className="terminarCompraBoton">
                    <Button variant="contained" color="success" onClick={() => { agregarProducto() }}> Agregar Producto </Button>

                </div>
            </Box>
        </>
    )
}
