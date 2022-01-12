import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount.js'
import './ItemDetail.scss'
import { contexto } from './AppContext'
import { Link } from 'react-router-dom'
function ItemDetail({ title, id, price, stock, image, description }) {

    const [initial, setInitial] = useState(1);
    const [showItem, setShowItem] = useState(true)
    const [selectedItemCount, setSelectedItemCount] = useState(0);
    const { agregarProducto } = useContext(contexto)
    const producto = { title, id, price, stock, image, description }

    const onAdd = (cantidad) => {
        agregarProducto(producto, cantidad)
        setShowItem(false)
        if (initial > 0) {
            setSelectedItemCount(initial)

        }
    }

    if (showItem)
        return (
            <div className='item__detail__container'>
                <div className='img__container'>
                    <img src={image} />
                    <p>{description}</p>
                </div>
                <div className='right__container'>
                    <div className='title__container'>
                        <h1>{title}</h1>
                        <p>ID Producto:{id}</p>
                        <h2>$ {price * 50}</h2>
                        <h3>O en 3 cuotas de $ {(price * 50 / 3).toFixed(2)} con Visa/Mastercard</h3>
                    </div>
                    <ItemCount
                        stock={stock}
                        onAdd={onAdd}
                        initial={initial}
                        setInitial={setInitial}
                    />
                    <Link to={'/cart'}>
                        <button className='btn'>Comprar</button>
                    </Link>
                </div>
            </div>
        )
    else return (
        <div className='item__detail__container'>
            <div className='img__container'>
                <img src={image} />
                <p>{description}</p>
            </div>
            <div className='right__container'>
                <div className='title__container'>
                    <h1>{title}</h1>
                    <p>ID Producto:{id}</p>
                    <h2>$ {price * 50}</h2>
                    <h3>O en 3 cuotas de $ {(price * 50 / 3).toFixed(2)} con Visa/Mastercard</h3>
                </div>

                <Link to={'/cart'}>
                    <button className='btn'>Comprar</button>
                </Link>
            </div>
        </div>
    )
}

export default ItemDetail