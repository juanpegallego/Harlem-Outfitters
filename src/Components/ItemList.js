import React, { useState, useEffect } from 'react'
import Item from './Item'
import { TailSpin } from 'react-loader-spinner';
import { useParams } from 'react-router-dom'
import db from './Firebase'
import { collection, getDocs, doc } from "@firebase/firestore"

function ItemList() {
    const [productData, setProductData] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    let dataUrl = ''



    useEffect(() => {
        const coleccionProductos = collection(db, 'camisetas')

        const pedido = getDocs(coleccionProductos)

        pedido
            .then((resultado) => {
                setProductData(resultado.docs.map(doc => ({ id: doc.id, ...doc.data() })))
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
            })


    }, [id])

    const loadingSpinnerContainerStyle = {
        marginTop: '200px'
    }


    if (loading) {
        return (
            <div style={loadingSpinnerContainerStyle}>
                <TailSpin arialLabel="loading-indicator" color='blue' height={100} width={100} />
            </div>
        )
    } else {
        return (
            productData.map(producto =>
                <Item
                    key={producto.id}
                    title={producto.title}
                    id={producto.id}
                    price={producto.price}
                    stock={producto.stock}
                    image={producto.image}
                />
            )
        )
    }
}

export default ItemList
