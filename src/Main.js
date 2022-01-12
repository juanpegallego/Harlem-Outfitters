import React from 'react'
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom'
import Cart from './Components/Cart';

function Main() {
    return (
        <main>            
            <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/products/:id' element={<ItemDetailContainer/>} />
                <Route path='/categoria/:id' element={<ItemListContainer/>} />
                <Route path='/cart' element={<Cart/>} />
            </Routes>
        </main>
    )
}

export default Main
