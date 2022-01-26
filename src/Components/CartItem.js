import React from 'react';
import './CartItem.scss'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function CartItem({ cantidad, productTitle, productPrice, eliminarProducto, productId, productImg }) {

    return <div className='cartitem__container'>
        <img src={productImg} alt="" />
        <h3>{productTitle}</h3>

        <p> Precio final/unidad  <strong>${productPrice}.-</strong></p>



        <p>
            {cantidad > 1 ? cantidad + ' Unidades' : cantidad + ' Unidad'}
        </p>


        <p>Total  <strong>$ {productPrice * cantidad}.-</strong> </p>



        <Link to={`/products/${productId}`}>
            <button className='btn btn-edit' onClick={() => eliminarProducto(productId, cantidad, productPrice)}>
                <EditIcon /> Editar</button>
        </Link>

        <button onClick={() => eliminarProducto(productId, cantidad, productPrice)}>
            <DeleteIcon />Eliminar item
        </button>

    </div >
}




export default CartItem;
