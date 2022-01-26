import React from 'react'
import './Item.scss'
import { Link } from 'react-router-dom'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Item({ title, id, price, stock, image }) {





    return (
        <div className='item__container'>
            <div className='title__container'>
                <h2>{title}</h2>
                <p>Codigo item:{id}</p>
                <h2>${price}</h2>
                <h3>O 3 cuotas de $ {(price / 3).toFixed(2)} con Visa/Mastercard</h3>

            </div>

            <img src={image} alt={title} rel="preconnect" />

            <section className='item__navegation'>
                <Link to={`/products/${id}`}>
                    <button className='btn'>
                        Ver Detalle
                    </button>
                </Link>
                <Link to={`/products/${id}`}>
                    <button className='btn'>
                        <ShoppingCartIcon fontSize={'smaller'} />
                    </button>
                </Link>
            </section>


        </div>
    )
}

export default Item
