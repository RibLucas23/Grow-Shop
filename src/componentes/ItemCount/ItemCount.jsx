import React, { useState } from "react";
import Button from '@mui/material/Button'

// Creo hook para las funciones del contador  (logica del contador) 
// const useContador = (stock) => {
//     const [cantProduc, setCantProduc] = useState(0);

//     const suma = () => {
//         // if (cantProduc < stock) {
//         //     setCantProduc(cantProduc + 1)
//         // }
//         console.log(stock)

//     }
//     const resta = () => {
//         if (cantProduc > 0) {
//             setCantProduc(cantProduc - 1)
//         }

//     }

//     return {
//         cantProduc,
//         suma,
//         resta

//     }
// }


export default function ItemCount({ stock }) {
    console.log(stock)

    // const { cantProduc, suma, resta } = useContador()


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
            <div>

                <div className='contador'>
                    <Button variant="contained" color="success" onClick={resta}> - </Button>
                    {cantProduc}
                    <Button variant={"contained"} color={"success"} onClick={suma}> + </Button>
                </div>

                <button > AGREGAR AL CARRO </button>
            </div>
        </>
    )
}
