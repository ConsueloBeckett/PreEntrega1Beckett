import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Item =({ products }) => {

    const [itemQuantity, setItemQuantity] = useState(1)
    const navegate = useNavigate();

    const handleClick = (id) => {
        navegate(`/item-detail/${id}`)

    }
    const handleAdd = () => {
        setItemQuantity(itemQuantity + 1)
    }
    const handleLess = () => {
        setItemQuantity(itemQuantity - 1)
    }

    return(
      
        <div className="ItemCard">
            <header className="ItemCard__header">
            <h2 className="ItemCard__title">{products.nombre}</h2>
            </header>
           <img src={products.img} alt={'image from ${products.nombre}'} />
            
            <section className="ItemCard__body">
                <p className="ItemCard__price">
                Precio: ${products.precio}
                </p>
                <p className="ItemCard__quantity">
                    Stock: {products.cantidad}
                </p>
                <p className="ItemCard__text_caracteristica">
                    Caracteristica: {products.caracteristica}
                </p>
                <p className="ItemCard__text_category">
                    Categoria: {products.category}
                </p>
            </section>
            <div>
            <button onClick={handleLess} disabled={itemQuantity <= 1}> - </button>
            <p>{itemQuantity}</p>
            <button onClick={handleAdd}> + </button>
            </div>
            <button onClick={() => handleClick(products.id)}>Detalle</button>
            <footer className="ItemCard__footer">
                <button className="ItemCard__btn">Ver detalle</button>
                </footer>
            </div>
    )
}

export  default Item