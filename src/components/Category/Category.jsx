import { useEffect, useState } from 'react';
import React from 'react'
import { useParam } from 'react-router-dom';



const Category = () => {

    const parametros = useParam();
    const [products, setProducts] = useState([]);
    const url = "../products.json";

    const getProducts = async () => {
        try {
        const products = await fetch(url);
        const resp = await products.json();
        setProducts(resp);
        return resp;
    } catch (error) {
        console.log(error);
    }}

    const productsCategories = products.filter((product) => product.category === parametros.name);

    useEffect(() => {
        getProducts();
    },[]);

  return (
    <>{productsCategories.map((product) => {return <Item key={product.id} data={product}/>})}
    </>
  )

}

export default Category;