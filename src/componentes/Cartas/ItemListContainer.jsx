import './ItemListContainer.css'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import customFetch from '../Utils/customFetch'
import { productos } from '../Utils/productos'
import { useParams } from 'react-router-dom';

// TRAIGO LOS PRODUCTOS
export default function ItemListContainer() {

    // CREO LOS ESTADOS 
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([]);
    const { id } = useParams()

    // DEFINO LOS EFECTOS 
    useEffect(() => {
        setLoading(true)
        customFetch(2000, productos)
            .then((resultado) => {
                if (id === undefined) {
                    setItems(resultado)
                }
                else if (id === 'Invernaderos y Carpas') {
                    setItems(resultado.filter(item => item.category === 'carpas'))
                } else if (id === 'Luces de cultivo') {
                    setItems(resultado.filter(item => item.category === 'luces'))
                } else if (id === 'Fertilizantes') {
                    setItems(resultado.filter(item => item.category === 'fertilizantes'))
                } else if (id === 'Sustratos') {
                    setItems(resultado.filter(item => item.category === 'sustratos'))
                } else if (id === 'Más Categorias') {
                    setItems(resultado.filter(item => item.category === 'otros'))
                }
            })

            .catch(error => console.log(error))
            .finally(() => setLoading(false))

    }, [id])


    // Y LE PASO LOS PRODUCTOS COMO PARAMETRO A ITEMLIST 
    return (


        <>
            {loading ? (
                <div className='cartas'>
                    <h1>Cargando los productos...</h1>
                </div>
            ) : (
                <div className='cartas'>
                    <ItemList productos={items} />
                </div>

            )}
        </>




    )
}

