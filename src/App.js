import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {ItemCount} from './components/ItemCount/ItemCount';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <ItemListContainer nombre="facu" apellido="savio" mensaje="Bienvenidos" ></ItemListContainer>
    <ItemCount stock = {10} > </ItemCount>
    </>
  );
}

export default App;
