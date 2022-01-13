import React, { useContext } from 'react'
import { contexto } from './AppContext'
import Item from './Item'
function Cart() {

    const { carrito, cantidad_total, precio_total, limpiarCarrito } = useContext(contexto)



    return (
        <div>
            <h1>Cantidad productos: {cantidad_total}</h1>
            <p>precio total: ${Math.floor(precio_total)}</p>
            <button onClick={limpiarCarrito}>Vaciar carrito</button>
            <button>Finalizar compra</button>
        </div>
    )
}

export default Cart
