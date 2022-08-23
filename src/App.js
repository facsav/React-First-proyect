import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <ItemListContainer nombre="facu" apellido="savio" mensaje="Bienvenidos" ></ItemListContainer>

    </>
  );
}

export default App;
