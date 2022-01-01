import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Order from '../pages/Order'

import Flavor from '../pages/Order/Flavor'
import Size from '../pages/Order/Size'
import Dough from '../pages/Order/Dough'
import Data from '../pages/Order/Data'


export default function AppRoute(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/order' element={<Order />}>
                    <Route path='flavor' element={<Flavor />} />
                    <Route path='dough' element={<Dough />} />
                    <Route path='size' element={<Size />} />
                    <Route path='data' element={<Data />} />
                </Route>
            </Routes>
        </Router>
    )
}