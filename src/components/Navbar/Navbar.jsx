import { HStack, Spacer, Link} from "@chakra-ui/react"
import catLogo from '../../assets/backCat.jpg';
import { CardWidget } from "../CartWidget/CartWidget";


const NavBar = () => {

 return(
    <HStack spacing={3}>
        <img src={catLogo} alt="cat black" width="100px" />
        <Spacer />
     <HStack>
         
        <Link  to="/" px={4} h={8}>Inicio</Link>
        <Link  to="/item/:id" px={4} h={8}>Productos</Link>
        <Link to="/category/:categoryId" px={4} h={8}>Categoria</Link>
        
        <CardWidget />
        </HStack>
     </HStack>
 )

}

export {NavBar};