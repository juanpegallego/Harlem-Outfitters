import React from 'react'
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom'
import CartContainer from './Components/CartContainer';
import ComoComprar from './Components/ComoComprar';


function Main() {
    return (
        <main>
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/como%20comprar' element={<ComoComprar />} />
                <Route path='/products/:id' element={<ItemDetailContainer />} />
                <Route path='/categoria/:id' element={<ItemListContainer />} />
                <Route path='/cart' element={<CartContainer />} />
            </Routes>
        </main>
    )
}

export default Main
