import React from 'react'
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom'

function Main() {
    return (
        <main>
            
            <Routes>
               <Route path='/' element={<ItemListContainer/>} />
               <Route path='/products/:id' element={<ItemDetailContainer/>} />
               <Route path='/categoria/:id' element={<ItemListContainer/>} />
               {/* <Route path='/carrito' element='' /> */}
            </Routes>




        </main>
    )
}

export default Main
