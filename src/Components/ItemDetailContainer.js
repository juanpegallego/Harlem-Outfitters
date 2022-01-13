import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { TailSpin } from 'react-loader-spinner';
import { useParams } from 'react-router-dom'



function ItemDetailContainer() {
    const [productData, setProductData] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    let dataUrl = ''
    const stock = 10


    useEffect(() => {



        if (id) {
            dataUrl = `https://fakestoreapi.com/products/${id}`
        } else {
            dataUrl = 'https://fakestoreapi.com/products'
        }

        const promesa = new Promise((res, rej) => {
            fetch(dataUrl)
                .then(res => res.json())
                .then(json => res(json))
                .catch(() => console.log('algo fallo'))


        })

        promesa.then((productos) => {
            setLoading(false)
            setProductData(productos)
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
                stock={stock}
            />

        )
    }
}

export default ItemDetailContainer
