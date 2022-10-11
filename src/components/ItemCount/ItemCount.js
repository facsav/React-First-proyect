import { useState } from "react"
import { Link } from "react-router-dom"

export function ItemCount (props){



    const {stock, onAdd} = props
    const [contador, setContador] = useState(0)




    // ------------------FUNCIONES + y - -------------------------------------------
    function sumaNum (){
        if ( contador < stock){
            setContador (contador + 1)
        }
        else{
            alert(" No hay mas stock")
        }


    }

    function restaNum(){
        if ( contador > 0){
            setContador (contador - 1 )
        }
    }

    const [condition,setCondition] = useState(false)
    const Componente = ({condition}) =>{
        return(
            <div>
            <p> Productos seleccionados {contador} </p>
            <button className="btn btn-primary" onClick={restaNum}>-</button>
            <button className="btn btn-primary" onClick={sumaNum}>+</button>
            <hr></hr>
            <button className={contador === 0 ? "btn btn-primary disabled" : "btn btn-primary "} onClick={()=> {onAdd(contador); setCondition (true);}}   > Agragar al carrito  </button>
            <Link className="btn btn-primary" style={{display: condition ? '' : "none"}} id="" to='/cart'>Finalizar Compra</Link>
        </div>
        )
    }


    return(
        <Componente condition={condition} ></Componente>
    )
}