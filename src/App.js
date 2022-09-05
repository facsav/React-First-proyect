import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {ItemCount} from './components/ItemCount/ItemCount';
import { Items } from './components/Items/Items';
import imagenes from './assets/imagenes';
import { ItemList } from './components/ItemsList/ItemList';
import { ItemDetail } from './components/ItemDetail/ItemDetail';


function App() {
  return (
    <>
    <Navbar></Navbar>
    <ItemListContainer></ItemListContainer>
    <ItemDetail></ItemDetail>
    </>
  );
}

export default App;
