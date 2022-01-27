import React from 'react';
import imgCamisetas from '../Assets/camisetas600x367.jpg'
import imgMochilas from '../Assets/calzadonba.jfif'
import imgCalzado from '../Assets/mochilasnba.jpeg'
import './CategoriesBanners.scss'
import { Link } from 'react-router-dom'

function CategoriesBanner() {





    return <section className='categories__banner__container'>

        <Link to={'/categories/camisetas'}>
            <div className='categories__card'>
                <img src={imgCamisetas} alt={imgCamisetas} />
                <h1>Camisetas</h1>
            </div>
        </Link>
        <Link to={'/categories/accesorios'}>
            <div className='categories__card'>
                <img src={imgMochilas} alt={imgMochilas} />
                <h1>Accesorios</h1>
            </div>
        </Link>
        <Link to={'/categories/calzado'}>
            <div className='categories__card'>
                <img src={imgCalzado} alt={imgCalzado} />
                <h1>Calzado</h1>
            </div>
        </Link>

    </section>;
}

export default CategoriesBanner;
