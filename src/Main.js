import React from 'react'
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom'
import CartContainer from './Components/CartContainer';

function Main() {
    return (
        <main>
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/products/:id' element={<ItemDetailContainer />} />
                <Route path='/categoria/:id' element={<ItemListContainer />} />
                <Route path='/cart' element={<CartContainer />} />
            </Routes>
        </main>
    )
}

export default Main
