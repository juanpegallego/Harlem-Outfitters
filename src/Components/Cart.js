import React, { useContext, useState } from 'react'
import { contexto } from './AppContext'
import './Cart.scss'
import CartItem from './CartItem'
import db from './Firebase'
import { collection, addDoc } from "@firebase/firestore"
import Form from './Form'
import { successOrder, errorOrder } from './Notification'

function Cart() {
    const { cantidad_total, precio_total, limpiarCarrito,
        cantidadProductoElegido, carrito, eliminarProducto } = useContext(contexto)
    const [clientData, setClientData] = useState({
        name: null,
        phone: null,
        mail: null
    })
    const [order, setOrder] = useState({
        buyer: {
            name: null,
            phone: null,
            mail: null
        },
        items: [],
        date: '',
        total: ''

    })
    const date = new Date()

    const confirmBuy = () => {
        setOrder(order => ({
            ...order,
            buyer: clientData,
            items: carrito,
            date: date,
            total: precio_total
        }));


        if (order.buyer.name !== null &&
            order.buyer.phone !== null &&
            order.buyer.mail !== null) { setOrderInDB(order) }
        else {
            errorOrder('Complete sus datos por favor');
        }
    }


    const setOrderInDB = async (order) => {
        try {
            await addDoc(collection(db, 'pedidos'), {
                'Cliente': order.buyer,
                'Fecha': order.date,
                'Producto': order.items[0].title,
                'ID Producto': order.items[0].id,
                'Cantidad': order.items[0].cantidad,
                'Precio total': order.total
            })
            successOrder('41241');
        } catch (e) {
            errorOrder('Hubo un error, vuelva a intentarlo');
        }
    }





    return (
        <div className='cart__container'>
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

            <h1>Cantidad de productos: {cantidad_total} </h1>
            <h2>Precio total: ${precio_total}</h2>

            <Form confirmBuy={confirmBuy}
                setClientData={setClientData}
                clientData={clientData} />

            <div className='cart__navegation'>
                <button onClick={limpiarCarrito}>Vaciar carrito</button>
                <button onClick={confirmBuy}>Finalizar compra</button>
            </div>

        </div>
    )
}

export default Cart
