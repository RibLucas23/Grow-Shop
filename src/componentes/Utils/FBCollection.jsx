import { getFirestore, getDocs, collection } from 'firebase/firestore'
import { useEffect, useState } from 'react';

export default function FBCollection() {
    const [productos, setProductos] = useState([])


    useEffect(() => {
        const db = getFirestore();
        const productosRef = collection(db, 'productos');
        getDocs(productosRef).then(res => {
            setProductos(res.docs.map(item => ({ id: item.id, ...item.data() })))
        });

    }, [])

    console.log(productos)


    return productos

}
