import React from 'react';
import './CartItem.scss'
import { Link } from 'react-router-dom'


function CartItem({ cantidad, productTitle, productPrice, eliminarProducto, productId }) {

    return <div className='cartitem__container'>

        <h3>{productTitle}</h3>

        <p> Producto ${productPrice}</p>


        <p> {cantidad} Unidades</p>


        <p>Total  $ {productPrice * cantidad}</p>



        <Link to={`/products/${productId}`}>
            <button className='btn' onClick={() => eliminarProducto(productId, cantidad, productPrice)}>Editar cantidad</button>
        </Link>

        <button onClick={() => eliminarProducto(productId, cantidad, productPrice)}>
            Eliminar
        </button>

    </div >
}




export default CartItem;
