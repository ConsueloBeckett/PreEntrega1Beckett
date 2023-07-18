import React from 'react'
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import Category from '../components/Category/Category'

const Routers = () => {
  return (
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<ItemListContainer/>}/>
    <Route path='/detail-item/:id' element={<ItemDetailContainer/>}/>
    <Route path='/category/:nombre' element={<Category/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default Routers