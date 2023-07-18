import React from 'react'
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

const Routers = () => {
  return (
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<ItemListContainer/>}/>
    <Route path='/item/:id' element={<ItemDetailContainer/>}/>
    <Route path='/category/:id' element={<ItemDetailContainer/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default Routers