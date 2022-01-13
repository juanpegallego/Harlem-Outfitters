import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount.js'
import './ItemDetail.scss'
import { contexto } from './AppContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
function ItemDetail({ title, id, price, stock, image, description }) {

    const [initial, setInitial] = useState(1);
    const [showCounter, setShowCounter] = useState(true)
    const { agregarProducto } = useContext(contexto)
    const producto = { title, id, price, stock, image, description }

    const successNotification = (cantidad) => {
        Swal.fire({
            title: 'Agregado al carrito',
            text: `${cantidad} unidades.`,
            icon: 'success',
            confirmButtonText: ' Continuar'

        })
    }

    const onAdd = (cantidad) => {
        agregarProducto(producto, cantidad)
        setShowCounter(false)
        successNotification(cantidad)

    }

    return (
        <div className='item__detail__container'>
            <div className='img__container'>
                <img src={image} alt={title} />
                <p>{description}</p>
            </div>
            <div className='right__container'>
                <div className='title__container'>
                    <h1>{title}</h1>
                    <p>ID Producto:{id}</p>
                    <h2>U$D {price}</h2>
                    <h3>O en 3 cuotas de U$D {(price / 3).toFixed(2)} con Visa/Mastercard</h3>
                </div>
                {showCounter ? <ItemCount
                    stock={stock}
                    onAdd={onAdd}
                    initial={initial}
                    setInitial={setInitial}
                /> : null}

                <Link to={'/cart'}>
                    <button className='btn'>Finalizar compra</button>
                </Link>
            </div>
        </div>
    )

}

export default ItemDetail