import React, { useContext } from "react";
import { Context } from '../Context/ContextProvider'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './carrito.css';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalCompra({ openModal, name, setOpenModal, idOrden }) {
    let { clear } = useContext(Context)

    // Al cerrar el modal se limpia el carro
    function handleClose() {
        setOpenModal(false);
        clear()
    }
    return (
        <div>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style}>
                    <div className='modal-header'>

                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Gracias por tu compra!
                        </Typography>
                        <IconButton onClick={handleClose}  > <CloseIcon /></IconButton>
                    </div>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Gracias {name} te contactaremos a la brevedad.

                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Tu orden de compra es: {idOrden}


                    </Typography>
                </Box>

            </Modal>
        </div >
    );
}































// import React, { useState } from 'react'
// import CloseIcon from '@mui/icons-material/Close';
// import { IconButton } from '@mui/material';

// export default function Modal() {
//     const [open, setOpen] = useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);
//     return (
//         <>
//             <div className='fondo'>
//                 <div className='modal'>
//                     <div className='modal-header'>
//                         <h2>¡Gracias por tu compra!</h2>
//                         <IconButton onClick={handleClose()} > <CloseIcon /></IconButton>
//                     </div>
//                     <div className='modal-body'>
//                         <h4> Te vamos a estar contactando para finalizar tu compra</h4>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
