import React from 'react'
import './Item.scss'
import { Link } from 'react-router-dom'

function Item({ title, id, price, stock, image }) {





    return (
        <div className='item__container'>
            <div className='title__container'>
                <h3>{title}</h3>
                <p>ID Producto:{id}</p>
                <h2>U$D {price}</h2>
                <h4>O 3 cuotas de U$D {(price / 3).toFixed(2)} con Visa/Mastercard</h4>

            </div>

            <img src={image} alt={title} />
            <Link to={`/products/${id}`}>
                <button className='btn'>
                    Ver mas
                </button>
            </Link>
        </div>
    )
}

export default Item
