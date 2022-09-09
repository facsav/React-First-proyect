import { useState } from "react"

export function ItemCount (props){
    const {stock, onAdd} = props
    const [contador, setContador] = useState(0)

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





    return(
    <div>
        <p> Productos seleccionados {contador} </p>
        <button className="btn btn-primary" onClick={sumaNum}>+</button>
        <button className="btn btn-primary" onClick={restaNum}>-</button>
        <hr></hr>
        <button className="btn btn-primary" onClick={()=>onAdd(contador)}  > Agragar al carrito </button>
    </div>
    )
}