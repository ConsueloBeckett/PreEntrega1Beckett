import { ChakraProvider} from '@chakra-ui/react'
import { NavBar } from './components/NavBar/NavBar';
import  ItemListContainer  from './components/ItemListContainer/ItemListContainer';
import  ItemDetailContainer  from './components/ItemDetailContainer/ItemDetailContainer';
import  ItemList  from './components/ItemList/ItemList';
import { Routes, Route, BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <ChakraProvider>
      <NavBar/>
      <BrowserRouter>
   <Routes>
    <Route exact path="/" element={<ItemListContainer/>}/>
    <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
    <Route exact path='/category/:id' element={<ItemListContainer/>}/>
   </Routes>
   </BrowserRouter>
     <main>
     <ItemListContainer/>
     <ItemList/>
     </main>
    </ChakraProvider>
  );
}

export default App;
