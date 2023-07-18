const products = [
    {
        id: 1,
        nombre: "Berenjena",
        precio: 2500,
        cantidad: 10,
        img:'./src/assets/berenjena.jpg',
        caracteristica:"es una hortaliza de color rojo, con un colorido oscuro y una gran cantidad de flores."
    },
    {
        id: 2,
        nombre: "Arandano",
        precio: 5000,
        cantidad: 8,
        img:'./src/assets/arandano.jpg',
        caracteristica:"es una fruta pequeña y dulce que se utiliza en postres y otros platos dulces."
    },
    {
        id: 3,
        nombre: "Frutilla",
        precio: 3000,
        cantidad: 20,
        img:'./src/assets/frutilla.jpg',
        caracteristica:"es una fruta dulce y aromática que se utiliza en postres y otros platos dulces."
    },
    {
        id: 4,
        nombre: "Cereza",
        precio: 5000,
        cantidad: 20,
        img:'./src/assets/cereza.jpg',
        caracteristica:"es una fruta dulce y jugosa que se consume fresca o en conserva"
    },
    {
        id: 5,
        nombre: "Durazno",
        precio: 2500,
        cantidad: 15,
        img:'./src/assets/frutilla.jpg',
        caracteristica:"es una fruta jugosa y dulce que se consume fresca o en conserva."
    },
    {
        id: 6,
        nombre: "Sandia",
        precio: 3000,
        cantidad: 20,
        img:'./src/assets/sandia.jpg',
        caracteristica:"es una fruta grande y refrescante que se consume principalmente en verano."
    },
    {
        id: 7,
        nombre: "Tomate",
        precio: 1500,
        cantidad: 30,
        img:'./src/assets/tomate.jpg',
        caracteristica:"es una hortaliza muy versátil que se utiliza en muchas preparaciones culinarias."
    },
    {
        id: 8,
        nombre: "Mango",
        precio: 3000,
        cantidad: 15,
        img:'./src/assets/mango.jpg',
        caracteristica: "es una fruta tropical dulce y jugosa que se consume fresca o en conserva."
    },
    {
        id: 9,
        nombre: "Pera",
        precio: 2000,
        cantidad: 25,
        img:'./src/assets/pera.jpg',
        caracteristica:"es una fruta  dulce y jugosa que se consume tantp cruda como al horno."

    }
]

export const getProducts =() => {
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve(products)
        }, 600)
    })
}