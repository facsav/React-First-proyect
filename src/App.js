import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {ItemCount} from './components/ItemCount/ItemCount';
import { Items } from './components/Items/Items';
import imagenes from './assets/imagenes';
import { ItemList } from './components/ItemsList/ItemList';
import { ItemDetail } from './components/ItemDetail/ItemDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './components/Main/Main';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
    
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<ItemListContainer/>} ></Route>
        <Route path='/catalogo' element={<ItemListContainer/>} ></Route>
        <Route path='/catalogo/:tipo' element={<ItemListContainer/>} ></Route>
        <Route path='/items/:id' element={<ItemDetailContainer/>} ></Route>
        <Route path='/detail' element={<ItemDetailContainer/>}/>
      </Routes>

      
    </BrowserRouter>
  
  );
}

export default App;
