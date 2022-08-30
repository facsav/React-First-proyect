import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {ItemCount} from './components/ItemCount/ItemCount';
import { Items } from './components/Items/Items';
import imagenes from './assets/imagenes';
import { ItemList } from './components/ItemsList/ItemList';



function App() {
  return (
    <>
    <Navbar></Navbar>
    <ItemListContainer nombre="facu" apellido="savio" mensaje="Bienvenidos" ></ItemListContainer>
    <ItemCount stock = {10} > </ItemCount>
    <ItemList></ItemList>

    </>
  );
}

export default App;
