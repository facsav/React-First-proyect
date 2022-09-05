import { useEffect, useState } from "react"
import { obtenerLista } from "../../helper/helper"
import { Items } from "../Items/Items"
import css from "../Items/items.css"
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer"
import { ItemCount } from "../ItemCount/ItemCount"

export function ItemDetail (){

    const [data, setData] = useState([])
    useEffect(()=>{
        obtenerLista()
        .then(response =>{
            setData(response.find(prod => prod.id === 1))
        })
    }, [])

    console.log(data)
    return(
        <div class="card">
            <img src={data.foto} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <p class="card-text">{data.descLarga}</p>
                <h3>{data.precio}</h3>
                <ItemCount stock={data.stock}></ItemCount>
            </div>
        </div>
    )

}