import React, { useContext, useEffect } from 'react'
import { contexto } from './AppContext'
import './Cart.scss'
import CartItem from './CartItem'


function Cart() {
    const { cantidad_total, precio_total, limpiarCarrito, cantidadProductoElegido, carrito, eliminarProducto } = useContext(contexto)


    return (
        <div className='cart__container'>
            <h1>Cantidad Total: {cantidad_total}</h1>
            <h2>Precio total: ${Math.floor(precio_total)}</h2>
            <button onClick={limpiarCarrito}>Vaciar carrito</button>
            <button>Finalizar compra</button>

            <div className='selected__products__container'>
                {carrito.length > 0 && carrito.map(producto =>

                    < CartItem
                        key={producto.id}
                        cantidad={cantidadProductoElegido}
                        productTitle={producto.title}
                        productPrice={producto.price}
                        productId={producto.id}
                        productImg={producto.image}
                        eliminarProducto={eliminarProducto}
                    />

                )}
            </div>

        </div>
    )
}

export default Cart
