import React, { useContext } from 'react'
import { contexto } from './AppContext'

function Cart() {

    const { carrito, cantidad_total } = useContext(contexto)

    return (
        <div>
            <p>Cantidad total: ${cantidad_total}</p>
        </div>
    )
}

export default Cart
