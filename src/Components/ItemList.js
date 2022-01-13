import React, { useState, useEffect } from 'react'
import Item from './Item'
import { TailSpin } from 'react-loader-spinner';
import { useParams } from 'react-router-dom'


function ItemList() {
    const [productData, setProductData] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    let dataUrl = ''

    useEffect(() => {

        if (id) {
            dataUrl = `https://fakestoreapi.com/products/category/${id}`
        } else {
            dataUrl = 'https://fakestoreapi.com/products'
        }


        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                fetch(dataUrl)
                    .then(res => res.json())
                    .then(json => res(json))
                    .catch(() => console.log("Algo falló"))


            }, 2000);
        })

        promesa.then((productos) => {
            setLoading(false)
            setProductData(productos)
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
