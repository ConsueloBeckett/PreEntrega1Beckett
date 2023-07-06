import { ChakraProvider} from '@chakra-ui/react'
import { Navbar} from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { CardProductos} from './components/Main/Main';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <ChakraProvider>
     <Navbar />
     <ItemListContainer greeting="BIENVENIDO LA FRUTERIA DON GATO"/>
      <CardProductos/>
      <ItemCount/>
    </ChakraProvider>



  );
}

export default App;
