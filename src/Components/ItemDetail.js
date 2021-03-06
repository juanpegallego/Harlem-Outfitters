import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount.js'
import './ItemDetail.scss'
import { contexto } from './AppContext'
import { Link } from 'react-router-dom'
import { errorNotification } from './Notification'
import BtnHome from './Buttons/BtnHome'
import BtnCart from './Buttons/BtnCart'




function ItemDetail({ title, id, price, stock, image, description }) {

    const [initial, setInitial] = useState(1);
    const [showCounter, setShowCounter] = useState(true)
    const { agregarProducto, isInCart, cantidadProductoElegido } = useContext(contexto)
    const producto = { title, id, price, stock, image, description }

    const onAdd = (cantidad) => {
        producto.cantidad = cantidad
        isInCart(producto.id) ? errorNotification(producto.title) : agregarProducto(producto, cantidad)
    }

    return (
        <div className='item__detail__container'>
            <div className='img__container'>

                <h1>{title}</h1>
                <img src={image} alt={title} />

                <p>ID Producto:{id}</p>
                <p>{description}</p>
            </div>
            <div className='right__container'>
                <div className='title__container'>
                    <h2>$ {price}.-</h2>
                    <h3>O en 3 cuotas de $ {(price / 3).toFixed(2)}.- con Visa/Mastercard</h3>
                    {showCounter && <ItemCount
                        stock={stock}
                        onAdd={onAdd}
                        initial={cantidadProductoElegido ? cantidadProductoElegido : initial}
                    />}
                </div>



                <div className="right__container__navigation">
                    {!showCounter &&
                        <button className='btn btn__edit'
                            onClick={setShowCounter}
                        >Editar compra
                        </button>}



                    <BtnHome />
                    <BtnCart />

                    <Link to={'/cart'}>
                        <button className='btn btn__success'>Finalizar compra</button>
                    </Link>


                </div>



            </div>
        </div >
    )

}

export default ItemDetail