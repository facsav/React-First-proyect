import { Items } from "../Items/Items"
import { useEffect, useState } from "react"
import {obtenerLista} from '../../helper/helper'



export function ItemList (props) {
    

const {data} = props
  
    return(
        <>  
            {data.map( data=>(
                <Items infoTarjeta={data} ></Items>
            ))}
        </>
    )
}