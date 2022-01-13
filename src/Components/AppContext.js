import React, { useState, createContext } from 'react';

import Swal from 'sweetalert2'

export const contexto = createContext({
    carrito: [],
    precio_total: 0,
    cantidad_total: 0
})

const successNotification = (cantidad) => {
    Swal.fire({
        title: 'Agregado al carrito',
        text: `${cantidad} unidades.`,
        icon: 'success',
        confirmButtonText: ' Continuar'

    })
}

const { Provider } = contexto

const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [precio_total, setPrecio_total] = useState(0)
    const [cantidad_total, setCantidad_total] = useState(0)

    const agregarProducto = (producto, cantidad) => {
        setCarrito([...carrito, producto])
        setCantidad_total(cantidad_total + cantidad)
        setPrecio_total(precio_total + producto.price * cantidad)
        successNotification(cantidad)
    }

    const eliminarProducto = (id) => {
        const indexToEliminate = carrito.indexOf(id)
        carrito.splice(indexToEliminate, 1)
    }

    const limpiarCarrito = () => {
        setCarrito([])
        setPrecio_total(0)
        setCantidad_total(0)
    }

    const isInCart = (id) => {
        if (id in carrito) {
            return true
        } else {
            return false
        }
    }

    const valorDelContexto = {
        carrito,
        precio_total,
        cantidad_total,
        agregarProducto,
        eliminarProducto,
        limpiarCarrito,
        isInCart
    }
    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CartProvider