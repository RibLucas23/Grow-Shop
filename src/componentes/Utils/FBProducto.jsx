import { getFirestore, getDoc, doc } from 'firebase/firestore'
import { useEffect, useState } from 'react';

export default function FBProducto() {

    const [producto, setProducto] = useState([])


    useEffect(() => {
        const db = getFirestore();
        const produRef = doc(db, 'productos', "9Mf6XCrGh7Wfz65AjCPR");

        getDoc(produRef).then(res => {


            setProducto({ id: res.id, ...res.data() })
            // setProducto(id: res.id, ...res.data()) 
            //     es igual a  lo de abajo
            // const objetoEntero = { id: res.id, ...res.data() }
            // setProducto(objetoEntero)
        });
    }, []);
    return (
        <div>{producto.precio}</div>
    )
}
