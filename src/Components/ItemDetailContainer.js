import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'

import { useParams } from 'react-router-dom'



function ItemDetailContainer() {
    const [productData, setProductData] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    let dataUrl = ''



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

        console.log(id)
    }, [id])







    if (loading) {
        return (
            <p>
                Cargando el detalle del producto, espere unos segundos.
            </p>
        )
    } else {
        return (

            <ItemDetail
                title={productData.title}
                id={productData.id}
                price={productData.price}
                image={productData.image}
                description={productData.description}
            />

        )
    }
}

export default ItemDetailContainer
