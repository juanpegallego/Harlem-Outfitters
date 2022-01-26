import React, { useContext } from 'react'
import Cart from './Cart';
import { contexto } from './AppContext'
import { Link } from 'react-router-dom'
import './CartContainer.scss'



function CartContainer() {
    const { carrito } = useContext(contexto)

    return <section className='cart__container' >
        {carrito.length > 0 ?
            <Cart />
            :
            <div className='empty__cart'>
                <h1>Tu carrito esta vacio! </h1>
                <Link to={'/'}>
                    <button >Volver al inicio</button>
                </Link>
            </div>

        }
    </section>;
}

export default CartContainer;
