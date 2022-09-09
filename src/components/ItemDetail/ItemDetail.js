import { useEffect, useState } from "react"
import { obtenerLista } from "../../helper/helper"
import { Items } from "../Items/Items"
import css from "../ItemDetail/itemDetail.css"
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer"
import { ItemCount } from "../ItemCount/ItemCount"


export function ItemDetail ({infoDetalle}){


    function agregarProd(contador){
        if (contador  === 0)
        {

        }

        else if (contador === 1) {
            alert(`Se agregó ${contador} producto al carrito`)
            console.log(`Se agregó ${contador} producto al carrito`)
        }
        else{
            alert(`Se agregaron ${contador} productos al carrito`)
            console.log(`Se agregaron ${contador} productos al carrito`)
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
                        <ItemCount onAdd={agregarProd} stock={infoDetalle.stock}></ItemCount>
                    </div>
                </div>
        </div>
        </>
    )

}