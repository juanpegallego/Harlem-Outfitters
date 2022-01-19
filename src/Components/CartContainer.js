import React, { useContext } from 'react'
import Cart from './Cart';
import { contexto } from './AppContext'
import { Link } from 'react-router-dom'




function CartContainer() {
    const { carrito } = useContext(contexto)

    return <div>
        {carrito.length > 0 ?
            <Cart /> : <div>
                <h1>Tu carrito esta vacio! </h1>
                <Link to={'/'}>
                    <button >Volver al inicio</button>
                </Link>
            </div>

        }
    </div>;
}

export default CartContainer;
