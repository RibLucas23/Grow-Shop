import React, { useState } from 'react'

export default function ItemDetailImgs({ producto }) {
    const [img, setImg] = useState(producto.url)

    const click = () => {
        setImg(producto.url)

    }
    const click2 = () => {
        setImg(producto.productosImgs.img1)
    }
    const click3 = () => {
        setImg(producto.productosImgs.img2)
    }

    return (

        <>
            {producto.productosImgs ? (

                < div className='itemDetail__imagenes'>

                    <div className='itemDetail__imagenes__chicas'>
                        <img onClick={click} src={producto.url} alt="imagen producto" />
                        <img onClick={click2} src={producto.productosImgs.img1} alt="carpa" />
                        <img onClick={click3} src={producto.productosImgs.img2} alt="extractor" />
                    </div>

                    <div>
                        <img src={img} alt="imagen producto" />
                    </div>
                </div>
            )
                : (
                    <div className='itemDetail__imagenes'>

                        <div className='itemDetail__imagenes__chicas'>
                            <img onClick={click} src={producto.url} alt="imagen producto" />
                        </div>
                        {/* caja que contiene imagen grande */}
                        <div>
                            <img src={img} alt="imagen producto" />
                        </div>
                    </div>
                )
            }



        </>
    )
}
