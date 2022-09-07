import { useEffect, useState } from "react"
import { obtenerLista } from "../../helper/helper"
import { Items } from "../Items/Items"
import css from "../ItemDetail/itemDetail.css"
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer"
import { ItemCount } from "../ItemCount/ItemCount"

export function ItemDetail ({infoDetalle}){


    console.log("llega la info", {infoDetalle})
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
                    <ItemCount stock={infoDetalle.stock}></ItemCount>
                </div>
            </div>
      </div>

        {/* <div class="card">
            <img src={infoDetalle.foto} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <p class="card-text">{infoDetalle.descLarga}</p>
                <h3>{infoDetalle.precio}</h3>
                <ItemCount stock={infoDetalle.stock}></ItemCount>
            </div>
        </div> */}
        </>
    )

}