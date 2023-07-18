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
        <Link  to="/fruta" px={4} h={8}>Fruta</Link>
        <Link to="/verdura" px={4} h={8}>Verdura</Link>
        
        <CardWidget />
        </HStack>
     </HStack>
 )

}

export {NavBar};