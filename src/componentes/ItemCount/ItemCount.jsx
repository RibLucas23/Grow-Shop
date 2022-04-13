import React, { useState } from "react";
import Button from '@mui/material/Button'



export default function ItemCount({ stock }) {



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
                        {cantProduc}
                        <Button variant={"contained"} color={"success"} onClick={suma}> + </Button>
                    </div>
                    <button > AGREGAR AL CARRO </button>
                </div>
            )
                : (
                    <div className='contador' >
                        <div className='contador__botones'>
                            <Button variant="contained" color="success" onClick={resta}> - </Button>
                            {cantProduc}
                            <Button variant={"contained"} color={"error"} onClick={suma}> + </Button>
                        </div>
                        <button > AGREGAR AL CARRO </button>
                    </div>

                )
            }
        </>
    )
}
