import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'    
import { ItemDetail } from '../ItemDetail/ItemDetail'   

const ItemDetailContainer = () => {

    const [products, setProducts] = useState({})
    const [loading, setLoading] = useState(true)

    const paramsItem = useParams()

    const getProducts = async () => {
        try{
            const products = await fetch('/products.json')
            const resp = await products.json()
            setProducts(resp)
            setLoading(false)
        return resp
        }catch(error){
        console.log(error)
        }
    }


     useEffect(() => {
        getProducts()
    },[])   
 
const items = products.find((products) => products.category === Number(paramsItem.id))


  return (
    <div>{loading ? "please wait" : <ItemDetail products={items}/>}</div>
  )
  
  }


export default ItemDetailContainer