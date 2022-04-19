import React, { useState } from "react";
import Button from '@mui/material/Button'



export default function ItemCount({ stock, onAdd }) {



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
            {cantProduc < stock ? (
                <div className='contador' >
                    <div className='contador__botones'>
                        <Button variant="contained" color="success" onClick={resta}> - </Button>
                        <div className="contador__num">
                            {cantProduc}
                        </div>
                        <Button variant={"contained"} color={"success"} onClick={suma}> + </Button>
                    </div>
                    <div className='detallesComprar'>
                        <Button variant="contained" color="primary" onClick={() => onAdd(cantProduc)} >
                            COMPRAR
                        </Button>
                    </div>
                </div>
            )
                : (
                    <div className='contador' >
                        <div className='contador__botones'>
                            <Button variant="contained" color="success" onClick={resta}> - </Button>
                            <div className="contador__num">
                                {cantProduc}
                            </div>
                            <Button variant={"contained"} color={"error"} onClick={suma}> + </Button>
                        </div>
                        <div className='detallesComprar'>
                            <Button variant="contained" color="primary" >
                                COMPRAR
                            </Button>
                        </div>
                    </div>

                )
            }
        </>
    )
}
