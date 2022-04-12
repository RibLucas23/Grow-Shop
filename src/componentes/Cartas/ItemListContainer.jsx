import './ItemListContainer.css'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import customFetch from '../Utils/customFetch'
import { productos } from '../Utils/productos'

// TRAIGO LOS PRODUCTOS
export default function ItemListContainer() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        customFetch(2000, productos)
            .then(resultado => setItems(resultado))
            .catch(error => console.log(error))

    }, [items])
    console.log(items)
    // Y LE PASO LOS PRODUCTOS COMO PARAMETRO A ITEMLIST 
    return (



        <ItemList productos={items} />




    )
}

