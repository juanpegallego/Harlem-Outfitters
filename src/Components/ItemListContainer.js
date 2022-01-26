import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import './ItemListContainer.scss'
import imageBanner1 from '../Assets/banner-img-player.jpg'
import imageBanner2 from '../Assets/banner-img-aro.jpg'
import imageBanner3 from '../Assets/banner-img-dance.jpg'
import Banner from './Banner';


function ItemListContainer() {

    const imagenes = [imageBanner1, imageBanner2, imageBanner3]
    const titles = ['3 Cuotas Sin Interes en toda nuestra tienda', 'Te gustó, lo pediste, te llegó, lo disfrutaste.', '15% de descuento en la 2da unidad']
    const subtitles = ['Comprando con tarjetas de Banco Macro', 'Sin usuarios, sin claves ', 'Comprando durante todo el mes de Enero']
    const [image, setImage] = useState(imageBanner1)
    const [title, setTitle] = useState()
    const [subtitle, setSubtitle] = useState()
    const [count, setCount] = useState(0)

    useEffect(() => {

        setImage(imagenes[count])
        setTitle(titles[count])
        setSubtitle(subtitles[count])

        if (count > 2) {
            setCount(0)
        }
        const id = setInterval(() => {
            setCount(count + 1)
        }, 10000);

        return () => {
            clearInterval(id)
        }


    });



    return (
        <div className='itemListContainer'>
            <Banner
                title={title}
                subtitle={subtitle}
                image={image}
                bgcColor={'transparent'}
                fontColor={'white'}
                height={'45vh'}
                fontSize={'1.5rem'}
            />
            <ItemList />
        </div>
    )
}

export default ItemListContainer
