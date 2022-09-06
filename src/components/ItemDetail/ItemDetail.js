import { useEffect, useState } from "react"
import { obtenerLista } from "../../helper/helper"
import { Items } from "../Items/Items"
import css from "../Items/items.css"
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer"
import { ItemCount } from "../ItemCount/ItemCount"

export function ItemDetail ({infoDetalle}){

    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     obtenerLista()
    //     .then(response =>{
    //         setData(response.find(prod => prod.id === 1))
    //     })
    // }, [])

    console.log("llega la info", {infoDetalle})
    return(
        <div class="card">
            <img src={infoDetalle.foto} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <p class="card-text">{infoDetalle.descLarga}</p>
                <h3>{infoDetalle.precio}</h3>
                <ItemCount stock={infoDetalle.stock}></ItemCount>
            </div>
        </div>
    )

}