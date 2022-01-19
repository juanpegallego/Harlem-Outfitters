import React from 'react';
import './CartItem.scss'

function CartItem({ cantidad, productTitle, productPrice, productImg, eliminarProducto, productId }) {


    return <div className='cartitem__container'>

        <h2>{productTitle}</h2>

        <p> id producto{productId}</p>

        <h2>${productPrice}</h2>

        <p>Precio total este producto $ {productPrice * cantidad}</p>

        <img src={productImg} alt={productTitle} />

        <p> {cantidad} Unidades</p>

        <button onClick={() => eliminarProducto(productId)}>
            Eliminar producto
        </button>

    </div>;
}

export default CartItem;
