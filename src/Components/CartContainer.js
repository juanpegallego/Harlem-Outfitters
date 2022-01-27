import React, { useContext, useState } from 'react'
import Cart from './Cart';
import { contexto } from './AppContext'
import './CartContainer.scss'
import BtnHome from './Buttons/BtnHome';



function CartContainer() {
    const { carrito } = useContext(contexto)
    const [cartMessage, setCartMessage] = useState('Tu carrito esta vacio!')

    return <section className='cart__container' >
        {carrito.length > 0 ?
            <Cart
                setCartMessage={setCartMessage}
            />
            :
            <div className='empty__cart'>
                <h1> {cartMessage} </h1>
                <BtnHome />
            </div>

        }
    </section>;
}

export default CartContainer;
