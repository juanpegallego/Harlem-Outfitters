import React from 'react';
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './BtnCart.scss'


function BtnCart() {
    return <Link to={'/cart'} className='btn__cart'>
        <ShoppingCartIcon />    Carrito
    </Link>;
}

export default BtnCart;
