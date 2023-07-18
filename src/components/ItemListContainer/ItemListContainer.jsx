import React from 'react'
import { useState, useEffect} from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import  ItemList  from "../ItemList/ItemList";
import { getProducts } from '../../MockAsync';

const ItemListContainer = () => {
 const [products, setProducts] = useState([]);
const url = "./products.json";

 const getProducts = async () => {  
    try {
    const products = await fetch(url);
    const resp = await products.json();
    setProducts(resp);
    return resp; 
 }  catch (error) {
    console.log(error);
 }}
 
useEffect(() => {
    getProducts();
},[]);

 return (
<div>
    
    <ItemList products={products}/>
    <ItemCount initial={1} stock={20} onAdd={(quantity) => ('')}/>
</div>

 )

}

export default ItemListContainer