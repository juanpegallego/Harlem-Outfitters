import React, { useContext, useState, useEffect } from 'react'
import { contexto } from './AppContext'
import './Cart.scss'
import CartItem from './CartItem'
import db from './Firebase'
import { collection, addDoc, getDocs } from "@firebase/firestore"
import Form from './Form'
import { successOrder, errorOrder } from './Notification'
import BtnHome from './Buttons/BtnHome'



function Cart({ setCartMessage }) {
    const { cantidad_total, precio_total, limpiarCarrito,
        cantidadProductoElegido, carrito, eliminarProducto } = useContext(contexto)

    const [clientData, setClientData] = useState({
        name: null,
        phone: null,
        mail: null,
        adress: null,
        contact: 'whatsapp'
    })
    const [order, setOrder] = useState({
        buyer: {
            name: null,
            phone: null,
            mail: null,
            adress: null,
            contact: 'whatsapp'
        },
        items: [],
        date: '',
        total: ''

    })

    const [orderFinished, setOrderFinished] = useState(false)
    const date = new Date()

    const confirmBuy = () => {


        if (order.buyer.name !== null &&
            order.buyer.phone !== null &&
            order.buyer.mail !== null &&
            order.buyer.adress !== null &&
            order.buyer.contact !== null
        ) {
            setOrderInDB(order)
        }
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
            getOrderId()


        } catch (e) {
            errorOrder('Hubo un error, vuelva a intentarlo', e);
        }
    }


    const getOrderId = () => {
        console.log('getting order ID');
        const coleccionPedidos = collection(db, "pedidos")
        const pedido = getDocs(coleccionPedidos);

        pedido
            .then((resultado) => {
                const data = resultado.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                const orderId = data[0].id.slice(0, 5);
                const metodoContacto = data[0].Cliente.contact
                setOrderFinished(true);
                successOrder(orderId, metodoContacto);
                setCartMessage(`Recuerde que  el codigo de reserva: ${orderId} es el que le enviaremos por ${metodoContacto} para continuar con el pago.`)
                limpiarCarrito()
            })
            .catch((error) => {
                errorOrder(error);
            })
    }




    useEffect(() => {
        setOrder(order => ({
            ...order,
            buyer: clientData,
            items: carrito,
            date: date,
            total: precio_total
        }));
    }, [clientData]);




    return (
        <div className='cart__container'>
            <div className='selected__products__container'>
                <h1>Tus productos</h1>
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
            <article className='form__row__container'>

                <Form confirmBuy={confirmBuy}
                    setClientData={setClientData}
                    clientData={clientData} />

                <div className='cart__navegation'>

                    <aside className='selected__products__count'>
                        <h2>Cantidad de items: {cantidad_total} </h2>
                        <h2>Precio total:    ${precio_total}.-</h2>
                    </aside>

                    {orderFinished ?
                        <div className='cart__navegation_btn'>
                            <BtnHome />
                        </div>
                        :
                        <div className='cart__navegation_btn'>
                            <BtnHome />
                            <button onClick={confirmBuy}>Finalizar compra</button>
                            <button onClick={limpiarCarrito}>Vaciar carrito</button>
                        </div>
                    }

                </div>
            </article>

        </div>
    )
}

export default Cart
