import React, { useState, useContext } from 'react'
import ItemCount from './ItemCount.js'
import './Item.scss'
import { Link } from 'react-router-dom'
import { contexto } from './AppContext'

import Swal from 'sweetalert2'

function Item({ title, id, price, stock, image }) {

    const [initial, setInitial] = useState(1);
    const { agregarProducto, isInCart } = useContext(contexto)
    const producto = { title, id, price, stock, image }



    const errorNotification = (producto) => {
        Swal.fire({
            title: 'Ya lo agregaste',
            text: `El producto ${producto} ya existe en tu carrito.`,
            icon: 'error',
            confirmButtonText: ' Volver'

        })
    }
    const onAdd = (cantidad) => {
        isInCart(producto.id) ? errorNotification(producto.title) : agregarProducto(producto, cantidad)
    }


    return (
        <div className='item__container'>
            <div className='title__container'>
                <h3>{title}</h3>
                <p>ID Producto:{id}</p>
                <h2>U$D {price}</h2>
                <h3> O 3 cuotas de U$D {(price / 3).toFixed(2)} con Visa/Mastercard</h3>

            </div>

            <img src={image} alt={title} />
            <Link to={`/products/${id}`}>Ver mas</Link>
            <ItemCount
                stock={stock}
                onAdd={onAdd}
                initial={initial}
                setInitial={setInitial}
            />


        </div>
    )
}

export default Item
