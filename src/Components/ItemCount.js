import React  from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './ItemCount.scss'

function ItemCount({stock, initial,setInitial, product, onAdd}) {
    

    const addItem = () => {
        setInitial(initial + 1);

        if (initial >= stock){
            setInitial(stock)
        }
    }
    
    const RemoveItem = () => {
        setInitial(initial - 1);

        if (initial < 2){
            setInitial(1)
        }
    }

    return (
        <div className='itemcount__container'>

            <h4>Stock: {stock}</h4>

            <div className='controls__container'>
                <RemoveIcon 
                    onClick={RemoveItem}
                    className='controls__icon'/>

                {initial}

                <AddIcon 
                    onClick={addItem}
                    className='controls__icon'/>

            </div>


            <button 
                onClick={onAdd}
            >Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
