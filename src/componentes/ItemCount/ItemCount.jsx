import React, { useState, useContext } from "react";
import Button from '@mui/material/Button'
import { Context } from "../Context/ContextProvider";
import { IconButton } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export default function ItemCount({ stock, onAdd, item }) {

    let { addToCart } = useContext(Context)

    const [cantProduc, setCantProduc] = useState(0);

    const suma = () => {
        if (cantProduc < stock) {
            setCantProduc(cantProduc + 1)
        }

    }
    const resta = () => {
        if (cantProduc > 0) {
            setCantProduc(cantProduc - 1)
        }

    }



    return (
        <>

            <div className='contador' >
                <div className='contador__botones'>

                    {/* <Button className='asdasd'
                        size="large" variant="outlined" color="success"
                        fullWidth={false}
                        onClick={resta}> -
                    </Button> */}
                    <IconButton className="contador__boton"
                        onClick={resta}>  <RemoveIcon fontSize="large" />
                    </IconButton>

                    <div className="contador__num">
                        {cantProduc}
                    </div>

                    {cantProduc < stock ? (
                        // <Button size="large" variant={"contained"} color={"success"} onClick={suma}> + </Button>

                        <IconButton className="contador__boton"
                            onClick={suma}>  <AddIcon fontSize="large" />
                        </IconButton>
                    )
                        : (
                            // <Button variant={"contained"} color={"error"} onClick={suma}> + </Button>
                            <IconButton className="contador__boton__rojo"
                                onClick={suma}>  <AddIcon fontSize="large" />
                            </IconButton>
                        )}

                </div>
                <div className='detallesComprar'>
                    <Button size="medium" variant="contained" color="primary" onClick={() => {
                        addToCart({ ...item, cantProduc })
                        onAdd(cantProduc)
                    }} >
                        COMPRAR
                    </Button>
                </div>
            </div>




        </>
    )
}
