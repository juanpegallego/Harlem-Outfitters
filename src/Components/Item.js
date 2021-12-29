import React, { useState } from 'react'
import ItemCount from './ItemCount.js'
import './Item.scss'

function Item({ productTitle, productId, productPrice, stock, image }) {

    const [initial, setInitial] = useState(1);
    const [selectedItemCount, setSelectedItemCount] = useState(0);

    const onAdd = () => {
        if (initial > 0) {
            setSelectedItemCount(initial)
        }
    }


    return (
        <div className='item__container'>
            <div className='title__container'>
                <h3>{productTitle}</h3>
                <p>ID Producto:{productId}</p>
                <h2>$ {productPrice * 50}</h2>
                <h3> O 3 cuotas de $ {(productPrice * 50 / 3).toFixed(2)} con Visa/Mastercard</h3>
            </div>

            <img src={image} />
            <ItemCount
                stock={stock}
                onAdd={onAdd}
                initial={initial}
                setInitial={setInitial}
            />


        </div>
    )
}

export default Item
