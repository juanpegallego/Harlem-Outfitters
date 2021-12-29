import React, { useState, useEffect } from 'react'
import Item from './Item'



function ItemList() {
    const [productData, setProductData] = useState([])
    const [loading, setLoading] = useState(true)



    const promesa = new Promise((res, rej) => {
        setTimeout(() => {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => res(json))

        }, 2000);
    })

    promesa.then((productos) => {
        setLoading(false)
        setProductData(productos)
    })

   

    if (loading) {
        return (
            <p>
                Cargando los productos, espere unos segundos.
            </p>
        )
    } else {
        return (
            productData.map(item =>                
                <Item
                    productTitle={item.title}
                    productId={item.id}
                    productPrice={item.price}
                    stock={item.stock}
                    image={item.image}
                />
            )
        )
    }
}

export default ItemList
