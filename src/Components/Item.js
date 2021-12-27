import React, {useState} from 'react'
import ItemCount from './ItemCount.js'
import './Item.scss'

function Item({productTitle, productId,productPrice, stock}) {

    const [initial, setInitial] = useState(1);
    const [selectedItemCount, setSelectedItemCount] = useState(0);
    
    const onAdd = () => {
        if ( initial > 0) {
            setSelectedItemCount(initial)            
        }        
        console.log(selectedItemCount)
    }


    return (
        <div className='item__container'>
            <h3>{productTitle}</h3>
            <p>Nro item{productId}</p>
            <h3>${productPrice}</h3>
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
