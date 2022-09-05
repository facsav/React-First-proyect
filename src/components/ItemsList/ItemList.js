import { Items } from "../Items/Items"
import { useEffect, useState } from "react"
import {obtenerLista} from '../../helper/helper'

export function ItemList () {

    const [data, setData] = useState([])
    useEffect(()=>{
        obtenerLista().then(data => {
            setData(data)
        })
    },[])
  
    return(
        <>  
            {data.map( data=>(
                <Items infoTarjeta={data} ></Items>
            ))}
        </>
    )
}

