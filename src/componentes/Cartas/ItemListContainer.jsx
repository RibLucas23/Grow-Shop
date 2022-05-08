import './ItemListContainer.css'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Utils/Loading';
import { getFirestore, getDocs, collection, query } from 'firebase/firestore'

// TRAIGO LOS PRODUCTOS
export default function ItemListContainer() {

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

            // Cuando no hay ninguna id espesifica, se muestran todos los productos
            if (id === undefined) {
                setItems(itemsCompletos)
            }
            // Si hay una id espesifica, se muestra solo el/los productos espesifico
            else if (id === 'Invernaderos y Carpas') {
                setItems(itemsCompletos.filter(item => item.category === 'carpas'))
            } else if (id === 'Luces de cultivo') {
                setItems(itemsCompletos.filter(item => item.category === 'luces'))
            } else if (id === 'Fertilizantes') {
                setItems(itemsCompletos.filter(item => item.category === 'fertilizantes'))
            } else if (id === 'Sustratos') {
                setItems(itemsCompletos.filter(item => item.category === 'sustratos'))
            } else if (id === 'Más Categorias') {
                setItems(itemsCompletos.filter(item => item.category === 'otros'))
            }
        })
            .catch(error => console.log(error))
            //cuando termina de cargar, se cambia el estado de loading a false
            .finally(() => setLoading(false))


    }, [id])
    // Y LE PASO LOS PRODUCTOS COMO PARAMETRO A ITEMLIST 
    return (


        <>
            {loading ? (
                <div className='cargando'>
                    <Loading />
                    <h1>Cargando los productos...</h1>
                </div>
            ) : (

                <div className='cartasTodas'>
                    <ItemList productos={items} />
                </div>

            )}
        </>




    )
}

