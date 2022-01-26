import React from 'react'
import ItemList from './ItemList'
import './ItemListContainer.scss'
import imageBanner from '../Assets/banner-img-player.jpg'
import Banner from './Banner';



function ItemListContainer() {



    return (
        <div className='itemListContainer'>

            <Banner
                title={'Disfruta de 3 cuotas sin interes en todos nuestros productos'}
                subtitle={'Abonando con link de pago de Banco Macro'}
                bgcColor={'transparent'}
                fontColor={'white'}
                height={'45vh'}
                image={imageBanner}
                fontSize={'1.5rem'}
            />



            <ItemList />

        </div>
    )
}

export default ItemListContainer
