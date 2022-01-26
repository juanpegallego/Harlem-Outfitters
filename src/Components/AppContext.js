import React, { useState, createContext } from 'react';
import { successNotification } from './Notification'


export const contexto = createContext({
    carrito: [],
    precio_total: 0,
    cantidad_total: 0,
    cantidad: 0
})

const { Provider } = contexto

const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [precio_total, setPrecio_total] = useState(0)
    const [cantidad_total, setCantidad_total] = useState(0)
    const [cantidadProductoElegido, setCantidadProductoElegido] = useState(0)



    const agregarProducto = (producto, cantidad) => {
        setCantidadProductoElegido(cantidad)
        setCarrito([...carrito, producto])
        setCantidad_total(cantidad_total + cantidad)
        setPrecio_total(precio_total + producto.price * cantidad)
        successNotification(cantidad)

    }

    const eliminarProducto = (idAEliminar, cantidad, productPrice) => {
        setCarrito(carrito.filter(item => item.id !== idAEliminar));
        setPrecio_total(precio_total - productPrice * cantidad)
        setCantidad_total(cantidad_total - cantidad)

        if (carrito.length === 0) {
            limpiarCarrito()
            console.log('carrito desde adentro del if', carrito);
        }
    }

    const limpiarCarrito = () => {
        setCarrito([])
        setPrecio_total(0)
        setCantidad_total(0)
    }

    const isInCart = (id) => {
        const buscaId = (element) => element.id === id
        const respuesta = carrito.some(buscaId);
        return respuesta
    }


    const valorDelContexto = {
        carrito,
        precio_total,
        cantidad_total,
        cantidadProductoElegido,
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