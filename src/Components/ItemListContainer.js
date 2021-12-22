import React, {useState} from 'react'
import ItemCount from './ItemCount'

import './ItemListContainer.scss'

function ItemListContainer({greeting}) {
    const [initial, setInitial] = useState(1);
    const [selectedItemCount, setSelectedItemCount] = useState(0);
    
    const onAdd = () => {
        if ( initial > 0) {
            setSelectedItemCount(initial)
            
        }        
        console.log(selectedItemCount)
    }



    return (
        <div className='itemListContainer'>
            <h1>{greeting}</h1>
            <ItemCount
                product={'Camiseta Chicago Bulls '}
                stock={10}
                onAdd={onAdd}
                initial={initial}
                setInitial={setInitial}
            />
        </div>
    )
}

export default ItemListContainer
