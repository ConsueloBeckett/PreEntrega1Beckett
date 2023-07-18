import { Card, CardBody } from '@chakra-ui/react'

function CardProductos() {
const productos = {
parrafo: 'productoA',

}

return (

<Card w='40%' h='40%'>
  <CardBody  w='40%' h='30%'>
     <img src='https://cdn.pixabay.com/photo/2017/10/14/15/51/strawberry-2850845_1280.png' alt='frutilla'/>
     {productos.parrafo}
     
  </CardBody>
</Card>

)
}

export {CardProductos}