import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './ItemCount.scss'

function ItemCount({ stock, initial, onAdd }) {
    const [contador, setContador] = useState(initial)


    const addItem = () => {
        setContador(contador + 1);

        if (initial >= stock) {
            setContador(stock)
        }
    }

    const RemoveItem = () => {
        setContador(initial - 1);

        if (initial < 2) {
            setContador(1)
        }
    }

    const confirmItem = () => {
        onAdd(contador)
    }

    return (
        <div className='itemcount__container'>

            <h4>Stock: {stock}</h4>

            <div className='controls__container'>
                <RemoveIcon
                    onClick={RemoveItem}
                    className='controls__icon' />

                {contador}

                <AddIcon
                    onClick={addItem}
                    className='controls__icon' />

            </div>


            <button onClick={confirmItem}>
                Agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount
