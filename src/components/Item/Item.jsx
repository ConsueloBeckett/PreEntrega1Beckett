import React from 'react'


const Item =({ products }) => {

    return
    (
        <div>
        <article className="ItemCard">
            <header className="ItemCard__header">
            <h2 className="ItemCard__title">{products.nombre}</h2>
            </header>
            <picture>
                <img src={products.img} className="ItemCard__img"  alt="" />
            </picture>
            <section className="ItemCard__body">
                <p className="ItemCard__text">
                Precio: ${products.precio}
                </p>
                <p className="ItemCard__text">
                    Cantidad: {products.cantidad}
                </p>
                <p className="ItemCard__text_caracteristica">
                    Stock: {products.caracteristica}
                </p>
                <p className="ItemCard__text_categories">
                    Stock: {products.category}
                </p>
            </section>
            <footer className="ItemCard__footer">
                <button className="ItemCard__btn">Ver detalle</button>
                </footer>
            </article>
            </div>



    )
}

export default Item;