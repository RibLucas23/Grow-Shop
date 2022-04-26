import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from "@mui/material";


export default function CarritoNav({ total }) {

    return (
        <>
            <IconButton aria-label="ShoppingCartIcon">
                <ShoppingCartIcon htmlColor="white" />
            </IconButton>
            <span>({total})</span>
        </>
    );
}

