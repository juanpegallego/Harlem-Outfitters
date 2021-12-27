import React, { useState, useEffect } from 'react'
import Item from './Item'

const productosIniciales = [
    {id:1, nombre: "Producto 1", stock: 5, precio:20},
    {id:2, nombre: "Producto 2", stock: 50, precio:120},
    {id:3, nombre: "Producto 3", stock: 500, precio:300},
    {id:4, nombre: "Producto 4", stock: 25, precio:200},
    {id:5, nombre: "Producto 5", stock: 250, precio:190},
]

function ItemList() {
    const [productData, setProductData] = useState([])
    const [loading, setLoading] = useState(true)



    const promesa = new Promise((res, rej) => {
        setTimeout(() => {
            console.log('Soy el timeout')
            res(productosIniciales)
        }, 2000);
    })

    promesa.then((productos)=>{
        setLoading(false)
        setProductData(productos)
        console.log(productData)
    })
    promesa.catch(()=>{})

    if (loading) {
        return (
            <p>
                Cargando la info, espera unos segundos.
            </p>
        )
    } else {
        return (

            productData.map(item => 
                <Item
                    productTitle={item.nombre}
                    productId={item.id}
                    productPrice={item.precio}
                    stock={item.stock}
                    />
                )


            
        )
    }








}

export default ItemList
