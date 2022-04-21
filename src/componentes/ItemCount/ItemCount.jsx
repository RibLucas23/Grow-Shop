import React, { useState, useContext } from "react";
import Button from '@mui/material/Button'
import { Context } from "../Context/ContextProvider";



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
                    <Button variant="contained" color="success" onClick={resta}> - </Button>
                    <div className="contador__num">
                        {cantProduc}
                    </div>

                    {cantProduc < stock ? (
                        <Button variant={"contained"} color={"success"} onClick={suma}> + </Button>
                    )
                        : (<Button variant={"contained"} color={"error"} onClick={suma}> + </Button>
                        )}

                </div>
                <div className='detallesComprar'>
                    <Button variant="contained" color="primary" onClick={() => {
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
