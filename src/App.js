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


function App() {
  return (
    <BrowserRouter>
    
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Main/>} ></Route>
        <Route path='/catalogo' element={<ItemListContainer/>} ></Route>
        <Route path='/catalogo/:tipo' element={<ItemListContainer/>} ></Route>
        <Route path='/detail' element={<ItemDetail/>}/>
      </Routes>

      
    </BrowserRouter>
  
  );
}

export default App;
