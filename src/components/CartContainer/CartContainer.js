import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { CartItem } from "../CartItem/CartItem"




export function CartContainer(){
    const{cartList} = useContext(CartContext)

    {console.log(cartList)}

    return(
        <div>
            <p>
                A
            </p>
            {
                cartList.map (prod =>(
                    <CartItem infoDetalle={prod} ></CartItem>
                ))
            }
        </div>
    )
}