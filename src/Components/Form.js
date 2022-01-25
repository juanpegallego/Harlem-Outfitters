import React from 'react';
import './Form.scss'

function Form({ setClientData, clientData }) {



    return <form>
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" onChange={e => setClientData(clientData => ({ ...clientData, name: e.target.value }))} />

        <label htmlFor="phone">Telefono</label>
        <input type="number" name="phone" onChange={e => setClientData(clientData => ({ ...clientData, phone: e.target.value }))} />


        <label htmlFor="mail">Mail</label>
        <input type="email" name="mail" onChange={e => setClientData(clientData => ({ ...clientData, mail: e.target.value }))} />
    </form>;
}

export default Form;

