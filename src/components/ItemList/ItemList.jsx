import React from 'react'
import  Item  from "../Item/Item";
import map from 'lodash/map'; 


const ItemList = ({products}) => {
return (

<>
{products.map((prod) => {
    return <Item key={products.id} products={prod}/>
})}
</>


)

}

export default ItemList;