import { useState, useEffect } from "react"
// import { getUnProducto } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { db } from "../../Services/Config"
import { getDoc, doc } from 'firebase/firestore';



const ItemDetailContainer = () => {
    const [producto, setProductos] = useState(null);
    const { idItem } = useParams();

    useEffect(() => {
        const nuevoDoc = doc(db, "Productos", idItem);

        getDoc(nuevoDoc)
            .then(res => {
                const data = res.data();
                const nuevoProducto = { id: res.id, ...data }
                setProductos(nuevoProducto);
            })
            .catch(error => console.log(error))
    }, [idItem])


    return (
        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer

