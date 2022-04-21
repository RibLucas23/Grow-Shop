import React, { useContext } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from "@mui/material";
import { Context } from "../Context/ContextProvider";


export default function CarritoNav() {
    let { carrito } = useContext(Context);
    return (
        <>
            <IconButton aria-label="ShoppingCartIcon">
                <ShoppingCartIcon htmlColor="white" />
            </IconButton>
            <span>({carrito.length})</span>
        </>
    );
}

