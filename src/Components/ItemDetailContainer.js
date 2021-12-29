import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'



function ItemDetailContainer() {
    const [productData, setProductData] = useState([])
    const [loading, setLoading] = useState(true)



    const promesa = new Promise((res, rej) => {
        setTimeout(() => {
            fetch('https://fakestoreapi.com/products/1')
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
