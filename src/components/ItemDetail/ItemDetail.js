import { useContext, useEffect, useState } from "react"
import { obtenerLista } from "../../helper/helper"
import { Items } from "../Items/Items"
import css from "../ItemDetail/itemDetail.css"
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer"
import { ItemCount } from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"


export function ItemDetail ({infoDetalle}){

    const {addProduct} = useContext(CartContext)



    const onAdd = (count)=>{
        const newProduct = {...infoDetalle, quantity:count}
        addProduct(newProduct, count)
        alert('Se agregó el producto correctamente')
        

    }

    function agregarProd(count){
        if (count  === 0)
        {

        }

        else if (count === 1) {
            alert(`Se agregó ${count} producto al carrito`)
            console.log(`Se agregó ${count} producto al carrito`)
        }
        else{
            alert(`Se agregaron ${count} productos al carrito`)
            console.log (`Se agregaron ${count} productos al carrito`)
        }

    }





    return(
        <>
            <div class="container text-center ">
                <div class="row ">
                    <div class="col">
                        <img src={infoDetalle.foto} class="card-img-top" alt="..."></img>
                    </div>
                    <div class=" carta col row align-content-center ">
                        <p class="card-text">{infoDetalle.descLarga}</p>
                        <h3>{infoDetalle.precio}</h3>
                        <ItemCount onAdd={onAdd} stock={infoDetalle.stock}></ItemCount>
                    </div>
                </div>
        </div>
        </>
    )

}