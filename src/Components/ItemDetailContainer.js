import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { TailSpin } from 'react-loader-spinner';
import { useParams } from 'react-router-dom'
import db from './Firebase'
import { collection, getDocs, where, query } from "@firebase/firestore"


function ItemDetailContainer() {
    const [productData, setProductData] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()




    useEffect(() => {

        const coleccionProductos = collection(db, "camisetas")
        const filtro = where('id', '==', parseInt(id))
        const consulta = query(coleccionProductos, filtro)
        const pedido = getDocs(consulta);

        pedido
            .then((resultado) => {
                const data = resultado.docs.map(doc => ({ id, ...doc.data() }))
                setProductData(data[0]);
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
            })


    }, [id])


    const loadingSpinnerContainerStyle = {
        position: 'relative',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
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

            <ItemDetail
                title={productData.title}
                id={productData.id}
                price={productData.price}
                image={productData.image}
                description={productData.description}
                stock={productData.stock}
            />

        )
    }
}

export default ItemDetailContainer
