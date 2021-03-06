import React from 'react';
import './Form.scss'

function Form({ setClientData }) {



    return <form>
        <h2>Completa este formulario  para armar el pedido</h2>
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" placeholder='Ingresa tu nombre' onChange={e => setClientData(clientData => ({ ...clientData, name: e.target.value }))} />

        <label htmlFor="phone">Telefono</label>
        <input type="number" name="phone" placeholder='Ingresa tu telefono' onChange={e => setClientData(clientData => ({ ...clientData, phone: e.target.value }))} />


        <label htmlFor="adress">Domicilio</label>
        <input type="text" name="adress" placeholder='Ingresa tu direccion de envio' onChange={e => setClientData(clientData => ({ ...clientData, adress: e.target.value }))} />

        <label htmlFor="mail">Mail</label>
        <input type="email" name="mail" placeholder='Ingresa tu correo electronico' onChange={e => setClientData(clientData => ({ ...clientData, mail: e.target.value }))} />

        <label htmlFor="contact">Metodo de contacto</label>
        <select name="contact" onChange={e => setClientData(clientData => ({ ...clientData, contact: e.target.value }))} >
            <option value="whatsapp" >Whatsapp</option>
            <option value="mail" >Mail</option>
        </select>

    </form>;
}

export default Form;

