import React, { useState } from 'react'


function ItemDetailContainer() {

    const [productData, setProductData] = useState([])
    const [loading, setLoading] = useState(true)



    const promesa = new Promise((res, rej) => {
        setTimeout(() => {
            console.log('Soy el timeout')
            res(productosIniciales)
        }, 1000);
    })

    promesa.then((productos) => {
        setLoading(false)
        setProductData(productos)
    })
    promesa.catch(() => { })

    return (
        <div >


        </div>
    )
}

export default ItemDetailContainer
