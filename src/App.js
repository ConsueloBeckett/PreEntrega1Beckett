import { ChakraProvider} from '@chakra-ui/react'
import { NavBar } from './components/NavBar/NavBar';
import  ItemListContainer  from './components/ItemListContainer/ItemListContainer';
import  ItemList  from './components/ItemList/ItemList';


function App() {
  return (
    <ChakraProvider>
      <NavBar/>
     <main>
     <ItemListContainer/>
     <ItemList/>
     </main>
    </ChakraProvider>
  );
}

export default App;
