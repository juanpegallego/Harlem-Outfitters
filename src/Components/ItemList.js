import React, { useState, useEffect } from 'react'
import Item from './Item'

import { useParams } from 'react-router-dom' 


function ItemList() {
    const [productData, setProductData] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    let dataUrl = ''

    useEffect(() => {

        if(id){
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

    

   

    if (loading) {
        return (
            <p>
                Cargando los productos, espere unos segundos.
            </p>
        )
    } else {
        return (
            productData.map(producto =>                
                <Item
                    productTitle={producto.title}
                    productId={producto.id}
                    productPrice={producto.price}
                    stock={producto.stock}
                    image={producto.image}
                />
            )
        )
    }
}

export default ItemList
