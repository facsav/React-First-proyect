import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { CartItem } from "../CartItem/CartItem"




export function CartContainer(){
    const{cartList, removeAll, cartShow} = useContext(CartContext)

    {console.log(cartList)}

    return(

        <div>
           <h3 className="bg-light">Carrito de compras</h3>
           {cartList.length>0?
           <>
           {
                cartList.map (prod =>(
                    <CartItem infoDetalle={prod} ></CartItem>
                    
                ))
                
           }
           <button onClick={removeAll} className="btn btn-primary" >Borrar todos los productos</button> 
           <button className="btn btn-primary" >Terminar Compra</button> 
           </>
           :
           <>
           
            <p className="bg-light">No hay productos agregados</p>
            <Link className="btn btn-primary" id="" to='/'>Volvel al menu</Link>
           </>
           }
        </div>
    )
        
    
}