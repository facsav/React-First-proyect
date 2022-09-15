import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { CartItem } from "../CartItem/CartItem"




export function CartContainer(){
    const{cartList, removeAll} = useContext(CartContext)

    {console.log(cartList)}

    return(
        <div>
            <button onClick={removeAll} className="btn btn-primary" >Borrar todos los productos</button>
            {
                cartList.map (prod =>(
                    <CartItem infoDetalle={prod} ></CartItem>
                ))
                
            }
            
        </div>
    )
}