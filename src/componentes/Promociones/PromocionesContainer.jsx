import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Utils/Loading';
import { getFirestore, getDocs, collection, query } from 'firebase/firestore'
import Promociones from './Promociones';

// TRAIGO LOS PRODUCTOS
export default function PromocionesContainer() {

    // CREO LOS ESTADOS 
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([]);
    const { id } = useParams()

    // DEFINO LOS EFECTOS 
    useEffect(() => {
        setLoading(true)
        const db = getFirestore();
        const productosRef = query(collection(db, 'productos'));
        getDocs(productosRef).then(res => {
            const itemsCompletos = res.docs.map(item => ({ id: item.id, ...item.data() }))
            setItems(itemsCompletos.filter(item => item.promocion === true))
            console.log(items)

        })
            .catch(error => console.log(error))
            //cuando termina de cargar, se cambia el estado de loading a false
            .finally(() => setLoading(false))


    }, [id])
    // Y LE PASO LOS PRODUCTOS COMO PARAMETRO A ITEMLIST 
    console.log(items)
    return (


        <>

            {loading ? (
                <div className='cargando'>
                    <Loading />
                    <h1>Cargando los productos...</h1>
                </div>
            ) : (

                <div className='cartasTodas'>
                    <Promociones productos={items} />
                </div>


            )}
        </>




    )
}

