import React from 'react';
import './BtnHome.scss'
import { Link } from 'react-router-dom'




function BtnHome() {
    return <Link to={'/'} className='btn__home' >
        Volver al inicio
    </Link>;
}

export default BtnHome;
