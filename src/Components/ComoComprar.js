import React from 'react';
import BtnHome from './Buttons/BtnHome';
import BtnCart from './Buttons/BtnCart';

function ComoComprar() {
    return <div>
        <h1>Como comprar</h1>
        <ul>
            <li>Agrega al carrito los productos que te gusten</li>
            <li>Cuando ya hayas elegido tus productos,  anda al <strong>carrito</strong>  o busca el link de <strong>finalizar compra</strong> </li>
            <li>revisa tu pedido y completa tus datos </li>
            <li>cuando pongas finalizar compra te daremos un <strong>codigo de seguimiento</strong> </li>
            <li>nosotros nos contactaremos con vos y te daremos el codigo que recibiste cuando confirmaste la compra </li>
            <li>Haces el pago con un link de pago que te daremos nosotros</li>
            <li>listo! en unos dias recibis tu pedido</li>
        </ul>

        <BtnHome />
        <BtnCart />


    </div>

}

export default ComoComprar;
