import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'
import ItemDetailImgs from './ItemDetailImgs'

function ItemDetail({ item }) {

    const [cantProdCarro, setCantProdCarro] = useState(0);
    const onAdd = (cantidadProducto) => {
        setCantProdCarro(cantidadProducto)
    }
    // console.log(cantProdCarro)
    return (


        <>
            <div className='itemDetail'>

                <ItemDetailImgs producto={item} />

                <div className='itemDetail__detalles'>
                    <h1>{item.titulo}</h1>
                    <h2>$ {item.precio}</h2>
                    <h3>{item.descripcion}</h3>

                    {/* condicional carro. si cuando aprieto en comprar, y la cantidad de productos para el carro es mayor a 0, desaparece y aparece el boton de ir al carro */}
                    {cantProdCarro > 0 ? (
                        <>
                            <p>{cantProdCarro} productos en el carrito</p>
                            <Link to="/cart" className='link'>
                                <button>ir al carro</button>
                            </Link>
                        </>
                    ) : (
                        <div className="botoneraItemDetalle">
                            <ItemCount stock={item.stock} onAdd={onAdd} item={item} />

                        </div>
                    )}
                </div>

            </div>
        </>
    )
}


export default ItemDetail