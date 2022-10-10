import { useContext } from "react"
import React, { useState } from 'react';
import { CartContext } from "../../context/CartContext"
import { CartItem } from "../CartItem/CartItem"
import { dataBase } from "../../utils/firebase"
import {collection, addDoc, doc, updateDoc} from "firebase/firestore";
import { Link } from "react-router-dom";



export function CartContainer(){
    const {cartList, removeAll, getTotalPrice, cartShow} = useContext(CartContext);
    console.log(cartList)
    const [idOrder, setIdOrder] = useState("");
  
    const sendOrder = (e)=>{
      e.preventDefault();
      const order = {
        buyer: {
          name: e.target[0].value,
          phone:e.target[1].value,
          email:e.target[2].value
        },
        items: cartList,
        total: getTotalPrice()
      }

      const queryRef = collection(dataBase,"orders");
      addDoc(queryRef, order).then(respuesta=>setIdOrder(respuesta.id))
      console.log(order)
      alert("Orden Enviada!")
    }

    const updateOrder = ()=>{
        const queryRef = doc(dataBase,"items","QPecYuDxkskZBr3uoVjI");
        updateDoc(queryRef, {
          categoria: "zapatos",
          pictureUrl: "https://firebasestorage.googleapis.com/v0/b/react-41590.appspot.com/o/zapato-hombre.jpg?alt=media&token=36321466-cb68-445e-858a-8772114f12e6",
          price:90,
          title:"zapatos hombre"
        }).then(()=>console.log("producto actualizado"))
    }
    


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
            <hr/>
            <button className="btn btn-primary" onClick={removeAll}>Vaciar el carrito</button>
            <p className="bg-light" >Precio total: {getTotalPrice()}</p>
            <form onSubmit={sendOrder}>
              <input className="form-control" type="text" placeholder='nombre'/>
              <input className="form-control" type="text" placeholder='telefono'/>
              <input className="form-control" type="email" placeholder='email'/>
              <button className="btn btn-primary" type='submit'>enviar orden</button>
            </form>
            {/* <button className="btn btn-primary" onClick={updateOrder}>actualizar</button> */}
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